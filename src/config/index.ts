import { ChainId, ChainIdRec } from '@/typings'
import * as chains from 'viem/chains'

const APOLLO_CLIENT_URIS: ChainIdRec = {
  [ChainId.MAINNET]: 'https://api.thegraph.com/subgraphs/name/liondextrade/finance',
  [ChainId.TESTNET]: 'https://api.thegraph.com/subgraphs/name/liondextrade/valult'
}

export const CHAIN_ID = import.meta.env.DAPP_CHAIN_ID as string
export const APOLLO_CLIENT_URI = APOLLO_CLIENT_URIS[CHAIN_ID] as string
export const STATIC_RESOURCES_URL = '//deeblue-static.pages.dev/image/'
export const LANG_CACHE_KEY = 'LANG'
export const ZERO = '0x0000000000000000000000000000000000000000'
export const MEDIA_LINKS = {
  dc: '',
  tw: '',
  tg: ''
}

export const INIT_RPC_URL = () => {
  const _rpc = localStorage.getItem('rpc')
  if (_rpc) {
    return _rpc
  } else {
    const _chains = chains as any
    const chainInfo = Object.values(_chains).find((r) => r.id === parseInt(CHAIN_ID))
    return chainInfo?.rpcUrls?.default?.http?.[0] ?? ''
  }
}
