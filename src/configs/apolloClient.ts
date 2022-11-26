import {ApolloClient, InMemoryCache} from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://api.hashnode.com/',
  cache: new InMemoryCache(),
})
