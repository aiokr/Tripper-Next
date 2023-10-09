"use client"
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import style from './../lens.module.css'

export default function LensListView({ data }) {
  return (
    data.map((data) => (
      <div key={data.no} className='mb-8'>
        <Link href={`/lens/${data.id}`} id={`${data.no}`}>
          <div className={`${style['lensPhoto']} max-w-full`}>
            <Image src={data.image} className='object-cover max-w-[100%] max-h-[800px]' width={1200} height={800} alt={data.title} unoptimized />
          </div>
        </Link>
        <div className={`${style['lensPhotoInfo']} mt-4 flex flex-row gap-8 justify-center items-center opacity-60 ease-in-out transition text-sm overflow-x-scroll `} style={{
          scrollbarWidth: 'none', /* For Firefox */
          msOverflowStyle: 'none' /* For Internet Explorer and Edge */
        }}>
          <div className='text-center px-12 py-3 rounded hover:shadow-xl transition-all ease-in-out'>
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
    ))
  )
}