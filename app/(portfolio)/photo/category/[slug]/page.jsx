import Image from 'next/image'
import Link from 'next/link'
import style from '../../photo.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPhotos } from 'contentlayer/generated';

async function fetchAlbumData(category) {
  const categoryDecodedStr = decodeURIComponent(category)
  let categoryStr = ''
  for (let i = 0; i < categoryDecodedStr.length;) {
    const code = categoryDecodedStr.codePointAt(i)
    categoryStr += String.fromCodePoint(code)
    i += code > 0xffff ? 2 : 1 // 处理 Unicode 码位
  }
  const album = allPhotos.filter(album => album.category === categoryStr)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return { album }
}

export default async function PressAllPage(props) {
  var category = props.params.slug
  const { album } = await fetchAlbumData(category || '') // 传入空字符串来获取无分类的文章
  return (
    <main className='text-white'>
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
    </main>
  )
}