import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string().default('https://api.mucahid.dev'),
  VERSION: z.string().default('v1'),
  DASHBOARD: z.string().default('admin'),
});

export const env = envSchema.parse(process.env);