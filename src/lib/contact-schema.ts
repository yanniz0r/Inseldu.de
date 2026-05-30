import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.email('Invalid email address'),
  scope: z.enum(['System Architecture', 'Full-stack Development', 'Consulting', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
})

export type ContactInput = z.infer<typeof contactSchema>
