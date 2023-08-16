export enum ChainId {
  MAINNET = 42161,
  TESTNET = 421613
}

export declare type Lang = 'en' | 'zh-CN'

export type Rec = Record<string, any>

export interface ChainIdRec {
  [ChainId.MAINNET]: string | Rec
  [ChainId.TESTNET]: string | Rec
}
