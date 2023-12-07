import './globals.css'
import Link from 'next/link';
import styles from './hero.module.css'
import Script from 'next/script'
import Image from 'next/image'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Source_Code_Pro, Source_Serif_4, Source_Sans_3, Noto_Serif_SC } from 'next/font/google'

export function generateMetadata() {
  return {
    'description': 'Tripper Press Website',
    'viewport': 'width=device-width,initial-scale=1.0,maximum-scale=1.0',
    'manifest': '/manifest.json',
  }
}

const source_Code_Pro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Source-Code-Pro',
})

const source_Sans_3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Source-Sans-3',
})

const source_Serif_4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Source-Serif-4',
  fallback: ['noto_Serif_SC', 'system-ui', 'arial'],
})

const noto_Serif_SC = Noto_Serif_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Noto-Serif-SC',
  weight: ['200', '300', '400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn" className={`${source_Serif_4.variable} ${source_Sans_3.variable} ${source_Code_Pro.variable} ${noto_Serif_SC.variable}`}>
      <body className='font-serif'>
        <Header />
        {children}
        <Footer />
        <div className="container">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-HFH67WJVKQ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HFH67WJVKQ');
            `}
          </Script>
        </div>
      </body>
    </html>
  )
}
