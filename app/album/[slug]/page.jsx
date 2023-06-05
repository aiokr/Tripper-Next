"use client"

// 此目录下的 layout 显示一个集合中的所有图片，children 显示单张图片及信息。
import { allPhotos } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import style from './album.module.css'
import { useState } from "react";
import Script from 'next/script';
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image';

export function fetchAlbum(params) {
  const album = allPhotos.find((photos) => photos.url == params.slug) //获取一个相册的所有数据
  const photos = album.photos //提取出相册中的照片列表
  const albumCode = album.body.code //获取相册正文
  const title = album.title + ' - Tripper Press'
  return { photos, album, albumCode }
}

const MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  pre: ({ children }) => <pre className='overflow-x-scroll'>{children}</pre>,
  // Add a custom component.
}

export default function AlbumPage({ params }) {
  const { photos, album, albumCode } = fetchAlbum(params);
  const [activeIndex, setActiveIndex] = useState(0);
  const MDXContent = useMDXComponent(albumCode)
  return (
    <section className='bg-zinc-900 text-[#f5f5f5] pt-6 lg:pt-[65px] p-6'>
      <div className='container max-w-[1200px]'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3 md:col-span-2'>
            <section className='pb-6'>
              <Image src={photos[activeIndex]} width={1500} height={1000} alt={album.title} className='object-cover object-center w-full aspect-[3/2] rounded' unoptimized />
            </section>
            <div className='flex flex-row gap-4 overflow-x-scroll rounded  overscroll-none'>
              {photos && photos.map((photo, index) => ( //index 是数组的索引，从 0 开始
                <Link key={index} href={`/album/${params.slug}/`}
                  onClick={() => setActiveIndex(index)}
                  className={`${style['albumItem']} h-20 lg:h-36 aspect-square`}>
                  <Image src={photo} width={200} height={200} className='aspect-square object-cover rounded' unoptimized />
                </Link>
              ))}
            </div>
          </div>
          <div className='col-span-3 md:col-span-1 md:p-2'>
            <div className='text-2xl lg:text-3xl font-semibold py-2'>
              {album.title}
            </div>
            <div className='text-sm opacity-75'>{format(parseISO(album.date), 'yyyy-MM-dd')}</div>
          </div>
        </div>
        <div className='container pt-8 px-6 lg:px-8 article postArticle'>
          <MDXContent components={MDXComponents} />
        </div>
      </div>
      <Script id='photoScrollToTop'>
        {`
          window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
          })
       `}
      </Script>
    </section>
  )
}