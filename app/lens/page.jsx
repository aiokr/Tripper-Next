"use server"
import Image from 'next/image'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import style from './lens.module.css'

export default async function LensPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/lensapi`);
  const LensData = await response.json();
  console.log(LensData)
  return (
    <div className='container max-w-[1200px] mt-16'>
      <div className='mh-0 my-auto'>
        {LensData.map((data) => (
          <div key={data.url} className='mb-8'>
            <Link href={`/lens/${data.id}`} id={`${data.id}`}>
              <div className={`${style['lensPhoto']}`}>
                <Image src={data.image} className='object-cover max-w-[1200px] max-h-[800px]' width={1200} height={800} alt={data.title} unoptimized />
              </div>
            </Link>
            <div className={`${style['lensPhotoInfo']} mt-4 flex flex-row gap-8 justify-center items-center opacity-60  ease-in-out transition text-sm`} >
              <div className='text-center p-3 rounded hover:shadow-xl transition-all ease-in-out'>
                <span className='font-bold opacity-40'>拍摄时间</span><br></br>
                {format(parseISO(data.date), 'yyyy-MM-dd')}
              </div>
              {data.location &&
                <div className='text-center p-3 rounded hover:shadow-xl transition-all ease-in-out'>
                  <span className='font-bold opacity-40'>拍摄地点</span><br></br>
                  {data.location}
                </div>
              }
              {data.camera &&
                <div className='text-center p-3 rounded hover:shadow-xl transition-all ease-in-out'>
                  <span className='font-bold opacity-40'>相机</span><br></br>
                  {data.camera}
                </div>
              }
              {data.lens &&
                <div className='text-center p-3 rounded hover:shadow-xl transition-all ease-in-out'>
                  <span className='font-bold opacity-40'>镜头</span><br></br>
                  {data.lens}
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}