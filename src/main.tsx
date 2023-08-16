import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import '@/i18n'
import ApolloClientProvider from '@/providers/ApolloClient'
import QueryClientProvider from '@/providers/QueryClient'
import WagmiClientProvider from '@/providers/WagmiClient'
import '@/style/index.module.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider>
        <ApolloClientProvider>
          <WagmiClientProvider>
            <App />
          </WagmiClientProvider>
        </ApolloClientProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
