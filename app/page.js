import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './hero.module.css'
import { allPosts } from 'contentlayer/generated'

async function fetchBlogData() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3)
  return { posts }
}

export default function Home() {
  return (
    <main className="container lg:px-8 max-w-[1280px]">
      <div className={`${styles['hero-area']}`}>
        <div className={`${styles['hero-img']} h-[300px] lg:h-[500px]`}>
          <div className={`${styles['hero-layer']}`}>
            <div className={`${styles['hero-title']} text-4xl font-bold`}>前行，有风</div>
            <div className={`${styles['hero-subtitle']} text-white opacity-80 pt-3`}>Tripper Press</div>
          </div>
        </div>
      </div>
    </main>
  )
}