import { BEST_RPC_KEY, CHAIN_ID, DEFAULT_PRC_URLS } from '@/config'
import { PublicClientConfig, WalletClientConfig, createPublicClient, createWalletClient, custom, http } from 'viem'
import { arbitrumGoerli } from 'viem/chains'

const value = localStorage.getItem(BEST_RPC_KEY)
const rpc = value ?? DEFAULT_PRC_URLS[CHAIN_ID]
export const publicClient = createPublicClient({
  chain: arbitrumGoerli,
  transport: http(rpc),
  batch: {
    multicall: {
      batchSize: 1024 * 200
    }
  }
} as PublicClientConfig)
export const walletClient = createWalletClient({
  chain: arbitrumGoerli,
  transport: window.ethereum ? custom(window.ethereum) : http(rpc)
} as WalletClientConfig)
