import App from '@/App.tsx'
import '@/i18n'
import WalletProvider from '@/providers/WalletProvider'
import '@/style/index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletProvider>
        <App />
      </WalletProvider>
    </BrowserRouter>
  </React.StrictMode>
)
