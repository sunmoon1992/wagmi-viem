import { INIT_RPC_URL } from '@/config'
import { createPublicClient, createWalletClient, custom, http, PublicClientConfig, WalletClientConfig } from 'viem'
import { arbitrumGoerli } from 'viem/chains'

export const publicClient = () => {
  return createPublicClient({
    chain: arbitrumGoerli,
    transport: http(INIT_RPC_URL()),
    batch: {
      multicall: {
        batchSize: 1024 * 200
      }
    }
  } as PublicClientConfig)
}

export const walletClient = () => {
  const transport = window.ethereum ? custom(window.ethereum) : http(INIT_RPC_URL())
  return createWalletClient({
    chain: arbitrumGoerli,
    transport
  } as WalletClientConfig)
}
