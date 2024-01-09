import { useScroll2Top } from '@/hooks/useScroll2Top'
import loadable from '@loadable/component'
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl, SOLANA_CONNECTION, PublicKey, LAMPORTS_PER_SOL, Connection, Keypair } from '@solana/web3.js'
import { useEffect, useMemo } from 'react'
import { isMobile } from 'react-device-detect'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
  getAccount, getMint
} from '@solana/spl-token'
import { Buffer } from 'buffer'
import * as web3 from '@solana/web3.js'
import { struct, u32, ns64 } from '@solana/buffer-layout'

const Home = loadable(() => import('@/pages/home'))
const HomeH5 = loadable(() => import('@/pages/home/h5'))

function App() {
  useScroll2Top()

  const network = 'devnet' // 选择 'mainnet-beta', 'testnet', 或 'devnet'
  const endpoint = clusterApiUrl(network)
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new BackpackWalletAdapter()], [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider autoConnect wallets={wallets}>
        <div>
          <Routes>
            <Route path='/' element={isMobile ? <HomeH5 /> : <Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Toaster toastOptions={{ style: { background: '#404040', color: '#fff' } }} />
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
