import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import styles from './hero.module.css'
import Script from 'next/script'
import Image from 'next/image'

export const metadata = {
  title: '按下瞬间 - Tripper Press',
  description: 'Tripper Press Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <body>
        <div className={`${styles.header} dark:text-white`}>
          <Link className='' href="/">Home</Link>
          <Link className='' href="/posts/1">Posts</Link>
          <Link className='' href="/garden">Garden</Link>
          <Link className='' href="/about">About</Link>
        </div>
        {children}
        <footer className={`${styles.footer} bg-gray-200 dark:bg-stone-800`}>
          <div className='container max-w-[1280px] p-8'>
            <Image className="inline" src="https://imgur.lzmun.com/picgo/after2022/tripper2whitefull.png_avatar"
              width={32} height={32}
              alt="logo" automatically="true" provided="true"
            />
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              <p className='block opacity-80 dark:text-white'>© Tripper Press 2016-2023 <br />
                <Link className='text-main' href='https://github.com/aiokr/Tripper-Next' target='_blank'>Design and Code by aiokr</Link> <br />
                Beta Version at <Link className='text-main' href="https://next.tripper.press">Next-Tripper-Press</Link><br />
                {
                  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ? (
                    <Link className='block text-ellipsis overflow-hidden' href={`https://github.com/aiokr/Tripper-Next/commit/` + `${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`} target='_blank'>
                      Build: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
                    </Link>
                  ) : (
                    <span className='block text-ellipsis overflow-hidden'>Build By Vercel CLI</span>
                  )
                }
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
