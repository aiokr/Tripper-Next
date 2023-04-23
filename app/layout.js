import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import styles from './hero.module.css'
import Script from 'next/script'

export const metadata = {
  title: 'Next Tripper Press',
  description: 'Tripper Press Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <body>
        <div className={`${styles.header}`}>
          <Link className='' href="/">Home</Link>
          <Link className='' href="/posts">Posts</Link>
          <Link className='' href="/photo">Photo</Link>
          <Link className='' href="/about">About</Link>
        </div>
        {children}
        <footer className={`${styles.footer} container lg:px-8 px-6 max-w-[1280px]`}>
          <hr />
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div>
              <p className='opacity-80'>© Tripper Press 2016-2023 <br />
                <a className='text-main' href='https://github.com/aiokr/Tripper-Next' target='blank'>Design and Code by aiokr</a> <br />
                Beta Version at <Link className='text-main' href="https://next.tripper.press">Next-Tripper-Press</Link>
              </p>
            </div>
            <div>
              <p>
              </p>
            </div>
          </div>
        </footer>
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
      </body>
    </html>
  )
}
