import { useScroll2Top } from '@/hooks/useScroll2Top'
import { FastClient } from '@/components/pages/FastClient'
import loadable from '@loadable/component'
import { Navigate, Route, Routes } from 'react-router-dom'
import useGlobalInit from "@/hooks/useGlobalInit";

const Test = loadable(() => import('@/pages/test'))

function App() {
  useScroll2Top()
  useGlobalInit()

  return (
    <div id="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <FastClient>
              <Test />
            </FastClient>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
