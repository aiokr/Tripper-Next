'use client'
import { useEffect, useRef } from 'react'
import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from 'date-fns'
import { getLatestPhoto } from '~/sanity/queries'
import style from './lens.module.css'

export default async function Lens() {
  const AllPhotos = await getLatestPhoto()
  //console.log(AllPhotos)
  return (
    <main className='dark:bg-zinc-900'>
    <div className="container py-24 flex flex-col gap-7">
      {AllPhotos.map((photo: any) => (
        <div key={photo._id} className="w-[80%] mr-auto ml-auto">
          <Image className="w-full"
          alt={photo.title} src={photo.url} width={photo.width} height={photo.height} placeholder="blur" blurDataURL={photo.lqip} loading="lazy" unoptimized />
        </div>
      ))}
      </div>
    </main>
  )
}