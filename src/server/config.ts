import { z } from 'zod'

const serverConfigSchema = z.object({
  MXROUTE_SERVER: z.string().min(1),
  MXROUTE_USER: z.string().min(1),
  MXROUTE_PASS: z.string().min(1),
  MXROUTE_FROM: z.email(),
  CONTACT_TO: z.email(),
})

const parsed = serverConfigSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌ Invalid server configuration:')
  console.error(parsed.error.flatten().fieldErrors)
  throw new Error('Server configuration is invalid. Check your environment variables.')
}

export const serverConfig = parsed.data
