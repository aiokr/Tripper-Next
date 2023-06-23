import Image from 'next/image'
import Link from 'next/link'
import style from '../photo.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPhotos } from 'contentlayer/generated';
import PhotoCategoryLink from '../../../components/photoCategory/photoCagegory';

async function fetchPhoto() {
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const categories = Array.from(new Set(album.map(album => album.category)))
  return { album, categories }
}

export default async function PressAllPage({ children }) {
  const { album, categories } = await fetchPhoto()
  return (
    <main className='text-white container max-w-[1280px] grid grid-cols-12 gap-4'>
      <div className={`col-span-12 md:col-span-2 pb-10 flex flex-col gap-4 sticky`}>
        <PhotoCategoryLink />
      </div>
      <div className={`col-span-12 md:col-span-10`}>
        {children}
      </div>
    </main>
  )
}