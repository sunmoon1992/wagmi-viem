import { last, sortBy } from 'lodash'
import { create } from 'zustand'

import { checkRpcHealthStatus } from '@/api'
import { BEST_RPC_KEY, CHAIN_ID } from '@/config'
import { RpcNodeState } from '@/store/types'
import { Rec } from '@/typings'
import { rpcUrl } from '@/utils/wagmiConfig'

const loadJsonFile = (key: string, path = '/abi'): Promise<Rec> => {
  return new Promise((resolve, reject) => {
    import(`@/config${path}/${key}.json`)
      .then((data) => {
        resolve(data.default)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

const getHealthyNode = async (): Promise<string> => {
  const json = await loadJsonFile('rpcs', '')
  const rpcList = json[CHAIN_ID].rpc
  const queries = rpcList.map((rpc: string) =>
    checkRpcHealthStatus(rpc, {
      jsonrpc: '2.0',
      method: 'eth_getBlockByNumber',
      params: ['latest', false],
      id: 1
    })
  )

  const response = await Promise.all(
    queries.map((p: any) =>
      p
        .then((value: any) => ({
          status: 'fulfilled',
          value
        }))
        .catch((reason: any) => ({
          status: 'rejected',
          reason
        }))
    )
  )

  const chains = response.map((data, i) => rpcReturnFormat(rpcList[i], data)).filter((data) => data.height)
  // console.info(chains)
  if (chains.length) {
    const sorted = sortBy(chains, ['height', 'latency'])
    // console.info(sorted, last(sorted)?.url)
    return last(sorted)?.url || rpcUrl
  }

  return rpcUrl
}

const rpcReturnFormat = (
  url: string,
  data: Rec
): {
  url: string
  height: number | null
  latency: number | null
} => {
  let height = data?.value?.result?.number ?? null
  let latency = data?.value?.latency ?? null
  if (height) {
    const hex = height.toString(16)
    height = parseInt(hex, 16)
  } else {
    latency = null
  }
  return { url, height, latency }
}

const useRpcNodeStore = create<RpcNodeState>((set) => ({
  loaded: false,
  fetch: async () => {
    const node = await getHealthyNode()
    localStorage.setItem(BEST_RPC_KEY, node)
    set({ loaded: true })
  }
}))

export { useRpcNodeStore }
