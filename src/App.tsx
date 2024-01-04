import { useScroll2Top } from '@/hooks/useScroll2Top'
import loadable from '@loadable/component'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { WalletProvider } from '@solana/wallet-adapter-react'
import { useMemo } from 'react'
import { isMobile } from 'react-device-detect'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = loadable(() => import('@/pages/home'))
const HomeH5 = loadable(() => import('@/pages/home/h5'))

function App() {
  useScroll2Top()

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  return (
    <WalletProvider autoConnect wallets={wallets}>
      <div>
        <Routes>
          <Route path="/" element={isMobile ? <HomeH5 /> : <Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Toaster toastOptions={{ style: { background: '#404040', color: '#fff' } }} />
    </WalletProvider>
  )
}

export default App
