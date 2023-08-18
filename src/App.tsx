import { useScroll2Top } from '@/hooks/useScroll2Top'
import { ProtectViemClient } from '@/pages/ProtectViemClient'
import UpdatersForGlobal from '@/pages/Updaters/ForGlobal'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home2 = loadable(() => import('@/pages/Home2'))
const Home1 = loadable(() => import('@/pages/Home1'))
const Test = loadable(() => import('@/pages/Test'))

function App() {
  useScroll2Top()

  return (
    <div id="app-container">
      <UpdatersForGlobal />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectViemClient>
              <Test />
            </ProtectViemClient>
          }
        />
        <Route path="/1" element={<Home1 />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
