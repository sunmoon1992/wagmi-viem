import { ChainId, ChainIdRec } from '@/typings'

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
