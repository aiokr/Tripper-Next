import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from 'date-fns'
import { getLatestPhoto } from '~/sanity/queries'
import style from './lens.module.css'
import { AptureIcon, LensIcon } from '~/app/components/Icon'

export default async function Lens() {
  const AllPhotos = await getLatestPhoto({ start: 0, end: 20, forDisplay: true })
  //console.log(AllPhotos)
  return (
    <main className='dark:bg-zinc-900'>
      <div className="container py-24 flex flex-col">
        {AllPhotos.map((photo: any) => (
          <div key={photo._id} className="w-[80%] mr-auto ml-auto mb-20 shadow-2xl">
            <Image className="w-full"
              alt={photo.title} src={photo.url} width={photo.width} height={photo.height} placeholder="blur" blurDataURL={photo.lqip} loading="lazy" unoptimized />
            <div className='flex h-20 bg-white p-4 gap-8 font-light text-sm dark:bg-zinc-800'>
              <div className="flex flex-col items-center justify-center">
                <div className='text-xs'>参数</div>
                <div className='flex'>
                  <span>F{photo.FNumber}/ </span>
                  <span><AptureIcon /> {photo.ExposureTime}/ </span>
                  <span>ISO{photo.ISO}/ </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}