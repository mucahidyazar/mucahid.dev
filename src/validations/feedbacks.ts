import { z } from "zod";

export type TCreateFeedbackValidation = z.infer<typeof createFeedbackValidation>

export const createFeedbackValidation = z.object({
  name: z
    .string()
    .min(3, 'Your name must be at least 3 characters')
    .max(50, 'Your name must be less than 50 characters'),
  email: z.string().optional(),
  message: z
    .string()
    .min(3, 'Message must be at least 3 characters')
    .max(500, 'Message must be less than 500 characters'),
});

