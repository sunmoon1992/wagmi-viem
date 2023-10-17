import lowLatencyNode from 'low-latency-node-helper'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import extraNodes from '@/config/rpcs.json'
import '@/i18n'
import ApolloClientProvider from '@/providers/ApolloClient'
import QueryClientProvider from '@/providers/QueryClient'
import WagmiClientProvider from '@/providers/WagmiClient'
import '@/style/index.less'

lowLatencyNode(421613, extraNodes)

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
