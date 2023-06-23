import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPhotos } from 'contentlayer/generated';
import PhotoCategoryLink from '../../components/photoCategory/photoCagegory';

async function fetchPhoto() {
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 10)

  const categories = Array.from(new Set(album.map(album => album.category)))
  return { album, categories }
}

export default async function PressPage({ children }) {
  const { album, categories } = await fetchPhoto()
  return (
    <main className='text-white'>
      <div className={`text-white container max-w-[1280px] grid grid-cols-12 gap-4`}>
        <div className={`col-span-12 md:col-span-2 pb-10 flex flex-col gap-4 sticky`}>
          <PhotoCategoryLink />
        </div>
        <div className={`col-span-12 md:col-span-10`}>
          <div className={`container max-w-[1000] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2`}>
            {album && album.map((album) => (
              <div key={album.url}>
                <Link className='scroll-my-12' href={`/album/${album.url}`} id={`${album.url}`}>
                  <div className={`${style['protfolioEntryImg']} aspect-[16/10]`}>
                    <Image src={album.cover} className='aspect-[16/10] object-cover' width={800} height={600} alt={album.title} unoptimized />
                    <div className={`${style['protfolioEntryLayer']} flex flex-col justify-center items-center opacity-0 hover:opacity-80 ease-in-out transition bg-zinc-950`} >
                      <div className='text-xl font-medium uppercase'>{album.title}</div>
                      <div className='text-sm opacity-75'>{format(parseISO(album.date), 'yyyy-MM-dd')}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}