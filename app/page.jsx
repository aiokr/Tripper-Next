import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import style from './hero.module.css'
import { allPosts, allPhotos } from 'contentlayer/generated'

export const metadata = {
  'title': '按下瞬间 - Tripper Press',
  'og:title': '按下瞬间 - Tripper Press',
  'og:image': 'https://tripper.press/api/og?title=按下瞬间&subtitle=衔枝筑巢，栽花种树。生活沉闷，前行有风。',
}

async function fetchBlogData() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3)
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 8)
  return { posts, album }
}

export default async function Home() {
  const { posts, album } = await fetchBlogData()
  return (
    <main className='bg-white dark:bg-zinc-900'>
      <div className='container px-6 lg:px-8 max-w-[1280px] pt-16 md:pt-20 lg:pt-36 pb-6'>
        <div className="inline-block text-3xl lg:text-5xl font-bold dark:text-white pt-12 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9DCBEE] to-main ">Tripper Press</div>
        <div className="md:text-lg lg:text-lg text-sub dark:text-white pb-4">衔枝筑巢，栽花种树。</div>
        <div className='pb-4 flex gap-6'>
          <Link className='inline-block text-sub hover:text-main dark:text-white transition' href='https://twitter.com/skomobi' target='_black'>
            <svg viewBox="0 0 48 48" height="1.2em" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" /></svg>
          </Link>
          <Link className='inline-block text-sub hover:text-main dark:text-white transition' href='https://space.bilibili.com/11597001' target='_black'>
            <svg height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="14" width="38" height="28" rx="2" stroke="currentColor" strokeWidth="4" /><path d="M24 14L38 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 14L10 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M35 20L35 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><rect x="33" y="32" width="4" height="4" rx="2" fill="currentColor" /></svg>
          </Link>
        </div>
      </div>
      <div className='container lg:px-8 max-w-[1280px]'>
        <div className={`${style['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">文章</div>
          </div>
          <div className="right inline">
            <Link className='text-main' href="/posts/1">所有文章</Link>
          </div>
        </div>
        <hr />
        <div className='py-6 grid grid-cols-1 md:grid-cols-2 px-4 gap-6 lg:grid-cols-3 lg:px-0'>
          {posts && posts.map((post) => (
            <div key={post.url}>
              <Link href={`/post/${post.url}`} >
                <div className={`${style['postEntry']}`}>
                  <div className={`${style['postEntryCover']} h-[200px]`}>{post.cover ? (
                    <Image src={post.cover} width={300} height={200} alt={post.title}
                      className={`${style['postEntryCover']} object-cover h-full w-full`}
                    />
                  ) : (
                    <Image src={'https://tripper.press/api/og?title='+post.title} width={300} height={200} alt={post.title} unoptimized
                      className={`${style['postEntryCover']} object-cover h-full w-full`}
                    />
                  )}
                  </div>
                  <div className={`${style['postEntryInfo']} h-[100px] py-4`}>
                    <div className={`${style['postEntryTitle']} text-xl font-medium dark:text-white`}>{post.title}</div>
                    <div className='opacity-60 py-1 text-sm dark:text-zinc-400'>{format(parseISO(post.date), 'yyyy-MM-dd')}
                      {post.category && (
                        ' · ' + post.category
                      )}
                    </div>
                    <div className={`${style['postEntryExcerpt']} opacity-60 text-sm hidden md:block dark:text-zinc-100`}>{post.excerpt}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))
          }
        </div>
        <div className={`${style['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">影像</div>
          </div>
          <div className="right inline">
            <Link className='text-main' href="/photo">所有影像</Link>
          </div>
        </div>
        <hr />
        <div className={`container max-w-[1000] pt-6 grid grid-cols-2 px-4 md:grid-cols-4 lg:px-0 gap-2 lg:gap-4`}>
          {album && album.map((album) => (
            <div key={album.url}>
              <Link className='scroll-my-12' href={`/album/${album.url}`} id={`${album.url}`}>
                <div className={`${style['protfolioEntryImg']} aspect-square`}>
                  <Image src={album.cover} className='rounded aspect-square object-cover' width={400} height={400} alt={album.title} />
                  <div className={`${style['protfolioEntryLayer']} flex flex-col justify-center items-center opacity-0 lg:hover:opacity-80 bg-zinc-950 text-white`} >
                    <div className='text-xl font-medium uppercase'>{album.title}</div>
                    <div className='text-sm opacity-75'>{format(parseISO(album.date), 'yyyy-MM-dd')}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className='container px-6 lg:px-8 max-w-[1280px] pt-20 pb-24'>
          <Image
            src="https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar"
            alt="Picture of the author"
            className='center pt-6 pb-6'
            width={64}
            height={64}
            automatically="true"
            provided="true"
          />
          <div className="text-xl text-center text-sub dark:text-white pb-4">前行有风</div>
          <Link href='mailto:aiokr@outlook.com' target='_blank'>
            <div className="text-xl text-center text-sub dark:text-white pb-4">aiokr@outlook.com</div>
          </Link>
        </div>
      </div>
    </main >
  )
}