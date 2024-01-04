import App from '@/App.tsx'
import '@/i18n'
import QueryClientProvider from '@/providers/QueryClient'
import '@/style/index.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
