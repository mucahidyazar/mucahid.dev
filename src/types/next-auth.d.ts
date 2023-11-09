import { DefaultSession } from "next-auth"

interface User extends DefaultSession["user"] {
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