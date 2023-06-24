import './globals.css'
import Link from 'next/link';
import styles from './hero.module.css'
import Script from 'next/script'
import Image from 'next/image'
import Header from './components/header/header'
import Footer from './components/footer/footer'

export function generateMetadata() {
  return {
    'description': 'Tripper Press Website',
    'viewport': 'width=device-width,initial-scale=1.0,maximum-scale=1.0',
    'manifest': '/manifest.json',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <body>
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
