import '../../styles/globals.css'
import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../locales/i18n'
import DarkModeSwitch from '../components/dark-mode-switch'
import type { Theme } from '../components/dark-mode-switch'
import Button from '../components/button'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-6 text-center dark:bg-slate-900">
      <span className="bg-gradient-to-r from-indigo-700 to-emerald-400 bg-clip-text text-9xl font-extrabold text-transparent dark:from-indigo-500 dark:to-emerald-500">
        404
      </span>
      <p className="text-2xl font-light text-slate-700 dark:text-slate-300">
        Whoa, this page doesn't exist.
      </p>
      <p className="text-slate-500 dark:text-slate-400">
        You must have taken a wrong turn somewhere in the internet.
      </p>
      <Button color="primary" variant="solid" href="/">
        Take me Home
      </Button>
    </div>
  )
}

function RootComponent() {
  const [theme, setTheme] = useState<Theme>()

  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <script
            defer
            src="https://umami.inselmann.online/script.js"
            data-website-id="3755d45d-5afa-4d60-bea0-4c55e1e37d5b"
          />
          <DarkModeSwitch theme={theme} setTheme={setTheme} />
          <Outlet />
        </I18nextProvider>
        <Scripts />
      </body>
    </html>
  )
}
