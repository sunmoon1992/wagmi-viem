// import { QueryClient, QueryClientProvider, QueryClientProviderProps } from 'react-query/devtools'
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '@tanstack/react-query'
import { useState } from 'react'

function Provider(props: Omit<QueryClientProviderProps, 'client'>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default Provider
