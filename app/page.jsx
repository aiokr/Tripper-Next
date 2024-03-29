import Image from 'next/image'
import Link from 'next/link';
import { format, parseISO } from 'date-fns'
import style from './hero.module.css'
import { getLatestBlogPosts } from '~/sanity/queries'
import HeroCover from './components/Cover'

export const metadata = {
  'title': '按下瞬间 - Tripper Press',
  'og:title': '按下瞬间 - Tripper Press',
  'og:image': 'https://tripper.press/api/og?title=按下瞬间&subtitle=衔枝筑巢，栽花种树。生活沉闷，前行有风。',
}

async function fetchBlogData() {
  const posts = await getLatestBlogPosts({ start: 0, end: 3, forDisplay: true }) || [] // 本页要显示的文章
  return { posts }
}

export default async function Home() {
  const { posts } = await fetchBlogData()

  return (
    <main className='flex flex-col align-center'>
      <HeroCover />
      <div className='container max-w-[1280px] px-4 lg:px-0 py-12 flex gap-6'>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' href='https://twitter.com/skomobi' target='_black'>
          <svg viewBox="0 0 48 48" height="1.2em" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" /></svg>
        </Link>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' href='https://space.bilibili.com/11597001' target='_black'>
          <svg height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="14" width="38" height="28" rx="2" stroke="currentColor" strokeWidth="4" /><path d="M24 14L38 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 14L10 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M35 20L35 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><rect x="33" y="32" width="4" height="4" rx="2" fill="currentColor" /></svg>
        </Link>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' rel="me" href='https://m.cmx.im/@tripper' target='_black'>
          <svg height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
      <div className='container max-w-[1280px] px-4 lg:px-0'>
        <div className={`${style['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">Essays</div>
          </div>
          <div className="right inline">
            <Link className='text-main' href="/posts/1">All Posts</Link>
          </div>
        </div>
        <div className='py-6 grid grid-cols-1 md:grid-cols-2 px-2 gap-6 lg:grid-cols-4 lg:px-0'>
          {posts && posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/post/${post.slug}`} >
                <div className={`${style['postEntry']}`}>
                  <div className={`${style['postEntryCover']} aspect-square`}>{post.cover ? (
                    <Image src={post.cover.asset.url} width={300} height={300} alt={post.title} unoptimized
                      className={`${style['postEntryCover']} object-cover h-full w-full`}
                    />
                  ) : (
                    <Image src={'https://tripper.press/api/og?title=' + post.title} width={300} height={200} alt={post.title} unoptimized
                      className={`${style['postEntryCover']} object-cover h-full w-full`}
                    />
                  )}
                  </div>
                  <div className={`${style['postEntryInfo']} h-[100px] py-4`}>
                    <div className={`${style['postEntryTitle']} text-xl font-medium dark:text-white`}>{post.title}</div>
                    <div className='opacity-60 py-1 text-sm dark:text-zinc-400'>{format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
                      {Array.isArray(post.categories) && (
                        <span> · {post.categories.join(' · ')}</span>
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
        <div className='pb-24'>
        </div>
      </div>

    </main >
  )
}
