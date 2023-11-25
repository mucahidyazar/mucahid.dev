// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-imports
import NextAuth, { DefaultSession } from "next-auth"

type User = DefaultSession["user"] & {
  id: string
  name: string | null
  email: string | null
  image: string | null
  role: 'ADMIN' | 'USER' | 'ARTIST'
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User
  }
}