import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { User } from "@prisma/client"
import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

// import { Client } from "postmark"

import { env } from "@/configs/env.mjs"
import { db } from "@/lib/db"



// const postmarkClient = new Client(env.POSTMARK_API_TOKEN)
export const adapter = PrismaAdapter(db);

export const authOptions: NextAuthOptions = {
  // huh any! I know.
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  adapter,
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/sign-in'
  },
  callbacks: {
    async session({ token, session }) {

      if (token) {
        session.user = token.user as User
      }


      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })


      if (user) {
        token.user = user
      } else if (dbUser) {
        token.user = {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          image: dbUser.image,
          role: dbUser.role,
        }
      }

      return token
    },
    async redirect({ baseUrl }) { return baseUrl },
  },
}
