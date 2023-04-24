import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string(),
  NEXT_PUBLIC_API_URL: z.string().default('http://localhost:8001'),
  VERSION: z.string().default('v1'),
  DASHBOARD: z.string().default('admin'),
});

export const env = envSchema.parse(process.env);