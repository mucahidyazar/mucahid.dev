import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: 'https://api.hashnode.com/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `${process.env.HASHNODE_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
})
