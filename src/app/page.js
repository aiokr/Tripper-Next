import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './hero.module.css'

export default function Home() {
  return (
    <main className="container">
      <div className={`${styles['hero-area']} lg:container lg:max-w-7xl lg:px-8 pt-8`}>
        <div className={`${styles['hero-img']} h-[300px] lg:h-[500px]`}>
          <div className={`${styles['hero-layer']}`}>
            <div className={`${styles['hero-title']} text-4xl font-bold`}>前行有风</div>
            <div className={`${styles['hero-subtitle']} text-white opacity-80 pt-3`}>Tripper Press</div>
          </div>
        </div>
      </div>
    </main>
  )
}