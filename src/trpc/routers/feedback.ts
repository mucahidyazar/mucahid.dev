import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "../api";
import { prisma } from "../db";

export const feedbackRouter = createTRPCRouter({
  getFeedbacks: publicProcedure
    .query(async () => {
      const orders = await prisma.feedback.findMany()

      return orders
    }),
  createFeedback: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().optional(),
      message: z.string(),
    }))
    .mutation(async ({ input }) => {
      const response = await prisma.feedback.create({
        data: input
      })
      return response
    }),
  updateFeedback: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().optional(),
      message: z.string().optional(),
      status: z.enum(["active", "in_progress"]).optional(),
    }))
    .mutation(async ({ input }) => {
      const response = await prisma.feedback.update({
        where: {
          id: input.id
        },
        data: input
      })
      return response
    }),
  deleteFeedback: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .mutation(async ({ input }) => {
      const response = await prisma.feedback.delete({
        where: {
          id: input.id
        }
      })
      return response
    }),
})