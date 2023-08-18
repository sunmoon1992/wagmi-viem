export enum ConnectorIds {
  MetaMask = 'metaMask',
  Injected = 'injected',
  WalletConnect = 'walletConnect',
  WalletLink = 'coinbaseWallet'
}

export interface Wallet<T = ConnectorIds> {
  id: string
  icon: string
  title: string
  installed?: boolean
  connectorId: T
  downloadLink?: string
}

const isMetaMaskInstalled = () => {
  if (typeof window === 'undefined') return false
  if (window.ethereum?.isMetaMask) return true
  return !!window.ethereum?.providers?.some((p) => p.isMetaMask)
}

const wallets: Wallet[] = [
  {
    id: 'metaMask',
    icon: 'metamask.svg',
    title: 'MetaMask',
    get installed() {
      return isMetaMaskInstalled()
    },
    connectorId: ConnectorIds.MetaMask,
    downloadLink: 'https://metamask.io/download/'
  },
  {
    id: 'coinbaseWallet',
    icon: 'coinbase.svg',
    title: 'Coinbase Wallet',
    connectorId: ConnectorIds.WalletLink
  },
  {
    id: 'walletConnect',
    icon: 'wallet-connect.svg',
    title: 'WalletConnect',
    connectorId: ConnectorIds.WalletConnect
  },
  {
    id: 'tokenPocket',
    icon: 'token-pocket.svg',
    title: 'TokenPocket',
    get installed() {
      return typeof window !== 'undefined' && !!window.ethereum?.isTokenPocket
    },
    connectorId: ConnectorIds.Injected,
    downloadLink: 'https://www.tokenpocket.pro/'
  },
  {
    id: 'OKX',
    icon: 'okx.svg',
    title: 'OKX Wallet',
    get installed() {
      return typeof window !== 'undefined' && (!!window.ethereum?.isOKExWallet || !!window.ethereum?.isOkxWallet)
    },
    connectorId: ConnectorIds.Injected,
    downloadLink: 'https://www.okx.com/cn/download/'
  }
]

export const getWallets = () => {
  const noEthereum = typeof window !== 'undefined' && !window.ethereum
  const isInjected = wallets.some((c) => c.installed && c.connectorId === ConnectorIds.Injected)
  // console.info(noEthereum)
  if (noEthereum && isInjected) return wallets
  return [
    ...wallets,
    {
      id: 'injected',
      icon: 'others.svg',
      title: 'Other',
      installed: typeof window !== 'undefined' && !!window.ethereum,
      connectorId: ConnectorIds.Injected
    }
  ]
}
