import { WalletClient } from 'viem'

export enum ChainId {
  MAINNET = 42161,
  TESTNET = 421613
}

export declare type Lang = 'en' | 'zh-CN'

export type Rec = Record<string, any>

export interface ChainIdRec {
  [ChainId.MAINNET]: string | Rec | `0x${string}`
  [ChainId.TESTNET]: string | Rec | `0x${string}`
}

export declare type ContractKeys = 'multicall' | 'airdrop'

export declare type TWalletClient = WalletClient | undefined | null
