import 'tailwindcss/tailwind.css'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <PlausibleProvider domain="txadm.in"><Component {...pageProps} /></PlausibleProvider>
}
export default MyApp
