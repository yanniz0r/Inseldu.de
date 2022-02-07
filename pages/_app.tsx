import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DarkModeSwitch from '../components/dark-mode-switch'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DarkModeSwitch />
    <Component {...pageProps} />
  </>
}

export default MyApp
