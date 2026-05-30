import { createServerFn } from '@tanstack/react-start'
import { serverConfig } from './config'
import { contactSchema } from '../lib/contact-schema'

export type { ContactInput } from '../lib/contact-schema'

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator(contactSchema.parse)
  .handler(async ({ data }) => {
    const body = {
      server: serverConfig.MXROUTE_SERVER,
      username: serverConfig.MXROUTE_USER,
      password: serverConfig.MXROUTE_PASS,
      from: serverConfig.MXROUTE_FROM,
      to: serverConfig.CONTACT_TO,
      subject: `[Contact] ${data.scope} — ${data.name}`,
      body: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Scope:</strong> ${data.scope}</p>
        <hr />
        <p>${data.message.replace(/\n/g, '<br />')}</p>
      `,
    }

    console.log(body)

    const res = await fetch('https://smtpapi.mxroute.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const result = await res.json() as { success: boolean; message: string }

    console.log(result)

    if (!result.success) {
      throw new Error(result.message)
    }

    return { success: true }
  })
