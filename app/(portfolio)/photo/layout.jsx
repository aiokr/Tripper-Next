"use client"

import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'

export default function PressPage({ children }) {
  return (
    <main className='bg-zinc-900 text-white font-semibold'>
      <div className={`${style['hero']}`} >
      <div className='px-4 py-12 md:py-20 min-h-screen'>
        {children}
      </div>
      </div>
    </main>
  )
}