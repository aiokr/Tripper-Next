import Image from 'next/image'
import Link from 'next/link'
import style from '../photo.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPhotos } from 'contentlayer/generated';

async function fetchPhoto() {
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const categories = Array.from(new Set(album.map(album => album.category)))
  return { album, categories }
}

export default async function PressAllPage({ children }) {
  const { album, categories } = await fetchPhoto()
  return (
    <main className='text-white container max-w-[1280px] grid grid-cols-12 gap-4 lg:gap-6'>
      <div className={`col-span-12 md:col-span-2 px-8 md:px-0 py-16 flex flex-col gap-4 sticky`}>
        {categories.map(category => (
          <Link href={`/photo/category/${category}`} key={category} className={`${style.photoCategory}`}>{category}</Link>
        ))}
      </div>
      <div className={`col-span-12 md:col-span-10`}>
        {children}
      </div>
    </main>
  )
}