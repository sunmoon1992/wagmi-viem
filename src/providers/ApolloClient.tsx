import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import type { ApolloProviderProps } from '@apollo/client/react/context/ApolloProvider'

import { APOLLO_CLIENT_URI } from '@/config'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: APOLLO_CLIENT_URI
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only'
    },
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network'
    }
  }
})

function ApolloClientProvider(props: Omit<ApolloProviderProps<any>, 'client'>) {
  return <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
}

export default ApolloClientProvider
