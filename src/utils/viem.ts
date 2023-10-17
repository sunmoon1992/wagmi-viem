import { createPublicClient, createWalletClient, custom, http, PublicClientConfig, WalletClientConfig } from 'viem'
import { arbitrumGoerli } from 'viem/chains'

export const publicClient = () => {
  const rpc = localStorage.getItem('rpc') ?? ''
  return createPublicClient({
    chain: arbitrumGoerli,
    transport: http(rpc),
    batch: {
      multicall: {
        batchSize: 1024 * 200
      }
    }
  } as PublicClientConfig)
}

export const walletClient = () => {
  let _transport
  if (window.ethereum) {
    _transport = custom(window.ethereum)
  } else {
    const rpc = localStorage.getItem('rpc') ?? ''
    _transport = http(rpc)
  }
  return createWalletClient({
    chain: arbitrumGoerli,
    transport: _transport
  } as WalletClientConfig)
}
