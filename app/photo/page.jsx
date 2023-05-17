import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPhotos } from 'contentlayer/generated';

async function fetchPhoto() {
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return { album }
}

export default async function PressPage({ children }) {
  const { album } = await fetchPhoto()
  return (
    <main className='bg-zinc-900 text-white'>
      <div className={`container max-w-[1000] pt-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6`}>
        {album && album.map((album) => (
          <div key={album.url}>
            <Link className='scroll-my-12' href={`/album/${album.url}/0`} id={`${album.url}`}>
              <div className={`${style['protfolioEntryImg']} aspect-[16/10]`} style={{ backgroundImage: 'url("' + album.cover + '")' }}>
                <div className={`${style['protfolioEntryLayer']} flex flex-col justify-center items-center opacity-0 hover:opacity-80 backdrop-blur ease-in-out transition bg-zinc-950`} >
                  <div className='text-lg font-medium uppercase'>{album.title}</div>
                  <div className='text-sm opacity-75'>{format(parseISO(album.date), 'yyyy-MM-dd')}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}