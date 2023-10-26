import axios from "axios";
import { z } from "zod";

import { env } from '@/configs/env.mjs'

import {
  createTRPCRouter,
  publicProcedure,
} from "../api";

interface LoginSuccessResponse {
  token: string
  message: string
}
interface LoginErrorResponse {
  message: string
}
export const mhrsRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({
      username: z.string(),
      password: z.string(),
    }))
    .mutation(async ({ input }) => {
      const response = await axios.post<LoginSuccessResponse | LoginErrorResponse>(`${env.NEXT_PUBLIC_APP_URL}/api/mhrs/login`, input)
      return response
    }),
})