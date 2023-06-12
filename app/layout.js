import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import styles from './hero.module.css'
import Script from 'next/script'
import Image from 'next/image'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = {
  title: '按下瞬间 - Tripper Press',
  description: 'Tripper Press Website',
  viewport: 'width=device-width,initial-scale=1.0,maximum-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <body>
        <ClerkProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
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
        </ClerkProvider>
      </body>
    </html>
  )
}
