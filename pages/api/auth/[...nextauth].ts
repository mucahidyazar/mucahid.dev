import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'

import prisma from '../../../lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      from: process.env.SMTP_FROM,
    }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
  ],
  secret: process.env.SECRET,
  debug: true,
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async session({session, user}): Promise<any> {
      // Send properties to the client, like an access_token from a provider.
      return Promise.resolve({...session, user})
    },
  },
})
