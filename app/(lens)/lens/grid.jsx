"use client"
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import style from './../lens.module.css'

export default function LensListView({ data }) {
  return (
    data.map((data) => (
      <div key={data.no}>
        <Link href={`/lens/${data.no}`} id={`${data.no}`}>
          <div className={`${style['lensPhoto']} aspect-square`}>
            {data.thumb ?
              <Image src={data.thumb} className='object-cover aspect-square max-w-[100%] max-h-[800px]' width={800} height={800} alt={data.title}  placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsW3LkPwAGVQLf/ytPgwAAAABJRU5ErkJggg==' unoptimized /> :
              <Image src={data.image} className='object-cover aspect-square max-w-[100%] max-h-[800px]' width={800} height={800} alt={data.title}  placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsW3LkPwAGVQLf/ytPgwAAAABJRU5ErkJggg==' unoptimized />
            }
          </div>
        </Link>
      </div>
    ))
  )
}