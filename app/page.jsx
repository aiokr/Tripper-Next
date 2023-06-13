import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import style from './hero.module.css'
import { allPosts, allPhotos } from 'contentlayer/generated'

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
        <div className="text-3xl lg:text-4xl font-bold dark:text-white pt-12 pb-4">衔枝筑巢，栽花种树。</div>
        <div className="md:text-lg lg:text-xl text-sub dark:text-white pb-6">我在这里向内生长，向外探索。</div>
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
                    <Image src='https://imgur.lzmun.com/picgo/after2022/202204091513971.jpeg_itp' width={300} height={200} alt={post.title}
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
                  <Image src={album.cover} className='rounded aspect-square object-cover' width={800} height={600} alt={album.title} unoptimized />
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
          <div className="text-xl text-center text-sub dark:text-white pt-12 pb-4">生活沉闷，前行有风</div>
        </div>
      </div>
    </main >
  )
}