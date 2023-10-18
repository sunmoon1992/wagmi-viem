import { useScroll2Top } from '@/hooks/useScroll2Top'
import Wallet from '@/pages/c/Wallet'
import { InterceptConnect } from '@/pages/connect'
import loadable from '@loadable/component'
import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Test = loadable(() => import('@/pages/test'))
const Connect = loadable(() => import('@/pages/connect'))

function App() {
  useScroll2Top()

  return (
    <div id="app-container">
      <Wallet />
      <div className="xyz-content-main">
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route
            path="/login"
            element={
              <InterceptConnect>
                <Connect />
              </InterceptConnect>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default React.memo(App)
