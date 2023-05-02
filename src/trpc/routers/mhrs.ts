import axios from "axios";
import { z } from "zod";

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
      const response = await axios.post<LoginSuccessResponse | LoginErrorResponse>(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/mhrs/login`, input)
      return response
    }),
})