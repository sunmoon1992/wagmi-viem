import useGlobalInit from '@/hooks/useGlobalInit'
import { useScroll2Top } from '@/hooks/useScroll2Top'
import { FastClient } from '@/pages/c/FastClient'
import Footer from '@/pages/c/Footer'
import Header from '@/pages/c/Header'
import { InterceptConnect } from '@/pages/connect'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'

const Test = loadable(() => import('@/pages/test'))
const Home = loadable(() => import('@/pages/home'))
const Explore = loadable(() => import('@/pages/explore'))
const Sell = loadable(() => import('@/pages/sell'))
const Connect = loadable(() => import('@/pages/connect'))

function App() {
  useScroll2Top()
  useGlobalInit()

  return (
    <div id="app-container">
      <Header />
      <div className="xyz-content-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <InterceptConnect>
                <Connect />
              </InterceptConnect>
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/sell" element={<Sell />} />
          <Route
            path="/test"
            element={
              <FastClient>
                <Test />
              </FastClient>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
