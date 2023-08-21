import Token from '@/class/Token'
import tokens from '@/config/tokens'
import { Rec, TokenKeys } from '@/typings'
import { getBalance, multicall } from '@/utils/callFuncHelpers'
import { formatUnits } from '@/utils/tools'
import { useQuery } from '@tanstack/react-query'
import { MulticallParameters } from 'viem'
import { GetBalanceParameters } from 'viem/actions'
import { erc20ABI } from 'wagmi'

export const initialBalances = (): Rec => {
  let value = Object.create(null)
  for (const key in tokens) {
    const { symbol, tokenAddress } = tokens[key as TokenKeys]
    value = {
      ...value,
      [key]: '0',
      [symbol]: '0',
      [tokenAddress]: '0'
    }
  }
  return value
}

const combine = (): [string[], Token[]] => {
  const output1 = []
  const output2 = []
  for (const key in tokens) {
    const _key = key as TokenKeys
    // if (current.includes(_key)) {
    output1.push(_key)
    output2.push(tokens[_key as TokenKeys])
    // }
  }
  return [output1, output2]
}

let initialVal = initialBalances()
const [tkKeys, _tokens] = combine()

const getCalls = (account: string) => {
  return _tokens.map((t) => ({
    abi: erc20ABI,
    args: [account],
    address: t.tokenAddress,
    functionName: 'balanceOf'
  }))
}

export const useBalances = (account?: string) => {
  const { data: balances } = useQuery({
    queryKey: ['useBalances'],
    queryFn: async (): Promise<typeof initialVal | null> => {
      if (account) {
        const calls = getCalls(account)
        const res = await multicall({ contracts: calls, allowFailure: true } as MulticallParameters)
        const eth = await getBalance({ address: account } as GetBalanceParameters)
        const ethBalance = formatUnits(eth, 18)
        if (res.length > 0) {
          res.forEach(({ result, status }, index) => {
            const precision = _tokens[index].precision
            const balance = formatUnits(status === 'success' ? result : 0n, precision)
            initialVal = {
              ...initialVal,
              [_tokens[index].symbol]: balance,
              [_tokens[index].tokenAddress]: balance,
              [tkKeys[index]]: balance
            }
          })
        }
        return { ...initialVal, eth: ethBalance, ETH: ethBalance }
      }
      return null
    },
    retry: false,
    enabled: !!account,
    initialData: null,
    refetchInterval: account ? 6000 : false,
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
  return { balances }
}
