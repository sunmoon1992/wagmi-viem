import { useScroll2Top } from '@/hooks/useScroll2Top'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = loadable(() => import('@/pages/home'))

function App() {
  useScroll2Top()

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
