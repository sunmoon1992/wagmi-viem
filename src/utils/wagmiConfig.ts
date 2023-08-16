import { configureChains, createConfig } from 'wagmi'
import { arbitrumGoerli } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
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

export const metaMaskConnector = new MetaMaskConnector({
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

// const walletConnectConnector = new WalletConnectConnector({
//   chains,
//   options: {
//     projectId: ''
//   }
// })

const walletConnectLegacyConnector = new WalletConnectLegacyConnector({
  chains,
  options: {
    qrcode: true
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
  // connectors: [metaMaskConnector, coinbaseWalletConnector, walletConnectConnector, walletConnectLegacyConnector, injectedConnector]
  connectors: [metaMaskConnector, coinbaseWalletConnector, walletConnectLegacyConnector, injectedConnector]
})
