import { z } from 'zod';

const envSchema = z.object({
  DASHBOARD: z.string().default('admin'),
});

export const env = envSchema.parse(process.env);