import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

import { feedbackRouter } from './feedback'

const t = initTRPC.create({
  transformer: superjson,
})

export type AppRouter = typeof appRouter

export const appRouter = t.router({
  feedback: feedbackRouter,
})