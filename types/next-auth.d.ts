declare var window: any

// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

import {User} from '@/types'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User
  }
}
