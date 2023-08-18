import type { WindowProvider } from 'wagmi/window'

declare global {
  interface Window {
    ethereum: WindowProvider
  }
}
