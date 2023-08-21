import { configureChains, createConfig } from 'wagmi'
import { arbitrumGoerli } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

import { CHAIN_ID, DEFAULT_PRC_URLS } from '@/config'
import { ChainId } from '@/typings'

export const rpcUrl = (DEFAULT_PRC_URLS[CHAIN_ID] ?? DEFAULT_PRC_URLS[ChainId.MAINNET]) as string

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrumGoerli],
  [
    jsonRpcProvider({
      rpc: () => ({ http: rpcUrl })
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
  publicClient,
  webSocketPublicClient,
  autoConnect: true,
  connectors: [metaMaskConnector, coinbaseWalletConnector, walletConnectConnector, injectedConnector]
})
