import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { User } from "@prisma/client"
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
// import { Client } from "postmark"

import { env } from "@/configs/env.mjs"
import { db } from "@/lib/db"

import { authorize } from "./authorize"

import type { NextAuthOptions } from "next-auth";

// const postmarkClient = new Client(env.POSTMARK_API_TOKEN)
export const adapter = PrismaAdapter(db);

export const authOptions = {
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
    CredentialsProvider({ // this!
      id: "googleonetap", // We will use this id later to specify for what Provider we want to trigger the signIn method
      name: "google-one-tap",

      // This means that the authentication will be done through a single credential called 'credential'
      credentials: {
        credential: { type: "text" },
      },
      // This function will be called upon signIn
      authorize
    }),
    CredentialsProvider({
      id: "credentials",
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.email) {
          return null
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || (user && !user.password)) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password as string)

        if (isPasswordValid) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  pages: {
    signIn: '/sign-in'
  },
  callbacks: {
    async session({ token, session }) {

      if (token) {
        session.user = token.user as any
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
        token.user = user as User
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
} satisfies NextAuthOptions
