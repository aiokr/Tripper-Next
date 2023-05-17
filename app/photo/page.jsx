import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPhotos } from 'contentlayer/generated';

async function fetchPhoto() {
  const photo = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return { photo }
}

export default async function PressPage({ children }) {
  const { photo } = await fetchPhoto()

PressPage.headerStyle = "bg-red-500";
  return (
    <main className='bg-zinc-900 text-white'>
      <div className={`container max-w-[1000] pt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6`}>
        {photo && photo.map((photo) => (
          <div key={photo.url}>
            <Link href={`/album/${photo.url}/0`}>
              <div className={`${style['protfolioEntryImg']} aspect-[16/10]`} style={{ backgroundImage: 'url("' + photo.cover + '")' }}>
                <div className={`${style['protfolioEntryLayer']} flex flex-col justify-center items-center opacity-0 hover:opacity-80 ease-in-out transition bg-zinc-950`} >
                  <div className='text-lg font-medium'>{photo.title}</div>
                  <div className='text-sm opacity-75'>{format(parseISO(photo.date), 'yyyy-MM-dd')}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}