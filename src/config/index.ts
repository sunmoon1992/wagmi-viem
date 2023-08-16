import { ChainId, ChainIdRec } from '@/typings'

const APOLLO_CLIENT_URIS: ChainIdRec = {
  [ChainId.MAINNET]: 'https://api.thegraph.com/subgraphs/name/liondextrade/finance',
  [ChainId.TESTNET]: 'https://api.thegraph.com/subgraphs/name/liondextrade/valult'
}

const API_PREFIX_URLS: ChainIdRec = {
  [ChainId.MAINNET]: 'https://prod.liondex.com/',
  [ChainId.TESTNET]: 'https://dev.liondex.com/'
}

const EXPLORER_SCAN_URLS: ChainIdRec = {
  [ChainId.MAINNET]: 'https://arbiscan.io/',
  [ChainId.TESTNET]: 'https://testnet.arbiscan.io/'
}

export const DEFAULT_PRC_URLS: ChainIdRec = {
  [ChainId.MAINNET]: 'https://arbitrum-mainnet.infura.io/v3/2ae3a06d40634a05abf2962d708e382f',
  [ChainId.TESTNET]: 'https://goerli-rollup.arbitrum.io/rpc/'
}

export const CHAIN_ID = parseInt(import.meta.env.DAPP_CHAIN_ID as string)
export const API_PREFIX_URL = API_PREFIX_URLS[CHAIN_ID]
export const EXPLORER_SCAN_URL = EXPLORER_SCAN_URLS[CHAIN_ID]
export const APOLLO_CLIENT_URI = APOLLO_CLIENT_URIS[CHAIN_ID]
export const BEST_RPC_KEY = 'best-rpc-v1'
export const LANG_CACHE_KEY = 'LANG'
export const STATIC_RESOURCES_URL = ''
export const ZERO = '0x0000000000000000000000000000000000000000'
