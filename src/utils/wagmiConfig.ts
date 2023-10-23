import { PublicClientConfig, WalletClientConfig, createPublicClient, createWalletClient, custom, http } from 'viem'
import { configureChains, createConfig } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

import { arbitrumGoerli } from 'viem/chains'

const chain = arbitrumGoerli

export const INIT_RPC_URL = () => {
  const _rpc = localStorage.getItem('rpc')
  return _rpc ? _rpc : chain?.rpcUrls?.default?.http?.[0] ?? ''
}

const {
  chains,
  publicClient: _publicClient,
  webSocketPublicClient
} = configureChains(
  [chain],
  // [mainnet, goerli, arbitrum, arbitrumGoerli],
  [
    jsonRpcProvider({
      rpc: () => ({ http: INIT_RPC_URL() })
    }),
    publicProvider()
  ]
)

const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false
  }
})

const coinbaseWalletConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'DAPP'
  }
})

// get projectId: https://cloud.walletconnect.com/app
const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId: 'a4f1a9fd334c569ccd281f5028b67dde'
  }
})

const injectedConnector = new InjectedConnector({
  chains,
  options: {
    name: 'Injected',
    shimDisconnect: true
  }
})

export const client = createConfig({
  publicClient: _publicClient,
  webSocketPublicClient,
  autoConnect: true,
  connectors: [metaMaskConnector, coinbaseWalletConnector, walletConnectConnector, injectedConnector]
})

export const publicClient = () => {
  return createPublicClient({
    chain,
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
    chain,
    transport
  } as WalletClientConfig)
}
