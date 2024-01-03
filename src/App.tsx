import { useScroll2Top } from '@/hooks/useScroll2Top'
import loadable from '@loadable/component'
import { isMobile } from 'react-device-detect'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = loadable(() => import('@/pages/home'))
const HomeH5 = loadable(() => import('@/pages/home/h5'))

function App() {
  useScroll2Top()

  return (
    <div>
      <Routes>
        <Route path="/" element={isMobile ? <HomeH5 /> : <Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
