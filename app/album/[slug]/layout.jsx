// 此目录下的 layout 显示一个集合中的所有图片，children 显示单张图片及信息。

import { allPhotos } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import style from './album.module.css'
import Script from 'next/script';
import { useMDXComponent } from 'next-contentlayer/hooks'

export function fetchAlbum(params) {
  const album = allPhotos.find((photos) => photos.url == params.slug) //获取一个相册的所有数据
  const photos = album.photos //提取出相册中的照片列表
  const albumCode = album.body.code
  const title = album.title + ' - Tripper Press'
  return { photos, album, albumCode }
}

const MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  pre: ({ children }) => <pre className='overflow-x-scroll'>{children}</pre>,
  // Add a custom component.
}

export default function AlbumPage({ params, children }) {
  const { photos, album, albumCode } = fetchAlbum(params);
  const MDXContent = useMDXComponent(albumCode)
  return (
    <section className='bg-zinc-900 text-[#f5f5f5] pt-6 lg:pt-[65px] p-6'>
      <div className='container max-w-[1200px]'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3 md:col-span-2'>
            {children}
            <div className='flex flex-row gap-4 overflow-x-scroll rounded'>
              {photos && photos.map((photo, index) => ( //index 是数组的索引，从 0 开始
                <Link key={photo} href={`/album/${params.slug}/${index}`}
                  className={`${style['albumItem']} h-20 lg:h-36 aspect-square rounded`} style={{ backgroundImage: 'url("' + photo + '")' }}>
                </Link>
              ))}
            </div>
          </div>
          <div className='col-span-3 md:col-span-1 md:p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-6 h-6 pr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <Link className='inline-block align-middle leading-6' href={`/photo/#${params.slug}`}>
              Back To Works
            </Link>
            <div className='text-2xl lg:text-3xl font-semibold py-2'>
              {album.title}
            </div>
            <div className='text-sm opacity-75'>{format(parseISO(album.date), 'yyyy-MM-dd')}</div>
          </div>
        </div>
        <div className='container pt-8 px-6 lg:px-8 article'>
          <MDXContent components={MDXComponents}/>
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