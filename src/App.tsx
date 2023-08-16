import loadable from '@loadable/component'

import { useTranslation } from 'react-i18next'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useScroll2Top } from '@/hooks/useScroll2Top'

const Home2 = loadable(() => import('@/pages/Home2'))
const Home1 = loadable(() => import('@/pages/Home1'))

function App() {
  useScroll2Top()

  const { t, i18n } = useTranslation()
  console.info(import.meta.env)

  return (
    <div id="app-container">
      <h1 onClick={() => i18n.changeLanguage('en')}>{t('common.twoway')}</h1>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/1" element={<Home1 />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
