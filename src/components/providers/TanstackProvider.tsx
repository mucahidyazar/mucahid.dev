'use client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export function TanstackProvider({children}: any) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export const queryClient = new QueryClient()
