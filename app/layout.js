import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import styles from './hero.module.css'

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
        <Analytics />
      </body>
    </html>
  )
}
