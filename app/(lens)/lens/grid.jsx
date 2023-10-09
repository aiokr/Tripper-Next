"use client"
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import style from './../lens.module.css'

export default function LensListView({ data }) {
  return (
    data.map((data) => (
      <div key={data.no}>
        <Link href={`/lens/${data.id}`} id={`${data.no}`}>
          <div className={`${style['lensPhoto']} aspect-square`}>
            <Image src={data.image} className='object-cover aspect-square max-w-[100%] max-h-[800px]' width={800} height={800} alt={data.title} unoptimized />
          </div>
        </Link>
      </div>
    ))
  )
}