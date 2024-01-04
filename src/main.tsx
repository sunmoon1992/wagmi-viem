import App from '@/App.tsx'
import '@/i18n'
import '@/style/index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
