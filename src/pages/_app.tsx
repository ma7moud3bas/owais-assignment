import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

const gothicFont = localFont({
  src: '../../public/assets/fonts/Century Gothic.ttf',
  variable: '--font-gothic'
})

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" },)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${gothicFont.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
