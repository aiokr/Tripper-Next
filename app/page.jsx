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
    .slice(0, 4)
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 8)
  return { posts, album }
}

async function fetchLensData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/lensapi`, { cache: 'no-store' });
  const LensData = await response.json();
  return LensData.slice(0,8)
}

export default async function Home() {
  const { posts, album } = await fetchBlogData()
  const LensData = await fetchLensData()
  return (
    <main className='bg-white dark:bg-zinc-900'>
      <div className='container max-w-[1280px] px-6 lg:px-8 pt-16 md:pt-20 lg:pt-28 pb-4 flex flex-col'>
        <div className='inline-block pb-4 text-4xl lg:text-5xl font-bold dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#9DCBEE] to-main'>
          Tripper Press
        </div>
        <div className="inline-block md:text-lg text-sub dark:text-white">撑住小鸟的不是它脚下脆弱的树枝，而是它随时能张开的翅膀。</div>
      </div>
      <div className='container max-w-[1280px] px-6 lg:px-8 pb-12 flex gap-6'>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' href='https://twitter.com/skomobi' target='_black'>
          <svg viewBox="0 0 48 48" height="1.2em" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" /></svg>
        </Link>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' href='https://space.bilibili.com/11597001' target='_black'>
          <svg height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="14" width="38" height="28" rx="2" stroke="currentColor" strokeWidth="4" /><path d="M24 14L38 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 14L10 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M35 20L35 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><rect x="33" y="32" width="4" height="4" rx="2" fill="currentColor" /></svg>
        </Link>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' rel="me" href='https://m.cmx.im/@tripper' target='_black'>
          <svg height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
        <Link className='inline-block text-sub hover:text-main dark:text-white transition' rel="me" href='/flipbox'>
          <svg height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 22V4H33V22L27 15.7273L21 22Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" stroke-linejoin="round" /><path d="M10 4H38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" stroke-linejoin="round" /></svg>
        </Link>
      </div>
      <div className='container max-w-[1280px] lg:px-8'>
        <div className={`${style['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">Portfolio & Product</div>
          </div>
        </div>
        <hr />
        <div className='py-12 px-6 '>
          <div className='text-2xl font-bold flex justify-center items-center h-6'>View Works on
            <Link href='https://www.behance.net/tripress' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.5 28.2" role="graphics-symbol img" width="100%" height="100%" className={`${style['behanceLogo']} transition-all ease-in-out m-2 h-[20px] pb-[1.5px] inline`} aria-hidden="true"><title>Behance</title><g><path d="M13.1 0c1.3 0 2.5.1 3.6.4 1.1.2 2 .6 2.8 1.1.8.5 1.4 1.2 1.8 2.1.4.9.6 2 .6 3.2 0 1.4-.3 2.6-1 3.5-.6.9-1.6 1.7-2.8 2.3 1.7.5 3 1.4 3.8 2.6.8 1.2 1.3 2.7 1.3 4.4 0 1.4-.3 2.6-.8 3.6s-1.3 1.9-2.2 2.5c-.9.6-2 1.1-3.2 1.4-1.2.3-2.4.5-3.6.5H0V0h13.1zm-.8 11.2c1.1 0 2-.3 2.7-.8.7-.5 1-1.4 1-2.5 0-.6-.1-1.2-.3-1.6-.2-.4-.5-.7-.9-1-.4-.2-.8-.4-1.3-.5-.5-.1-1-.1-1.6-.1H6.1v6.5h6.2zm.3 11.8c.6 0 1.2-.1 1.7-.2s1-.3 1.4-.6c.4-.3.7-.6 1-1.1.2-.5.4-1.1.4-1.8 0-1.4-.4-2.4-1.2-3.1-.8-.6-1.9-.9-3.2-.9H6.1V23h6.5zm19.3-.1c.8.8 2 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.9c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.6-.8 4.2-.8 1.7 0 3.2.3 4.5 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.2 1.4.3 2.8.2 4.4H30.5c0 1.6.6 3.1 1.4 3.9zm6.3-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1 .7-1.4 1.1-.4.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.2-1.5-.7-2.5-1.4-3.2zM52.8 0v10.4h.1c.7-1.2 1.6-2 2.7-2.5s2.1-.8 3.2-.8c1.5 0 2.7.2 3.6.6.9.4 1.7 1 2.2 1.7.5.7.9 1.6 1.1 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.2-2.7-1.2-1.5 0-2.6.5-3.2 1.3-.7.9-1 2.4-1 4.4v10.5h-5.5V0h5.5zM70 10.6c.6-.9 1.3-1.5 2.2-2.1.9-.5 1.9-.9 3-1.1 1.1-.2 2.2-.3 3.3-.3 1 0 2 .1 3.1.2 1 .1 2 .4 2.8.8.9.4 1.5 1 2.1 1.7.5.7.8 1.7.8 2.9v10.5c0 .9.1 1.8.2 2.6s.4 1.5.7 1.9h-5.6c-.2-.2-.3-.6-.4-.9-.1-.3-.1-.7-.1-1-.9.9-1.9 1.5-3.1 1.9-1.2.4-2.4.5-3.6.5-1 0-1.8-.1-2.7-.4-.8-.2-1.5-.6-2.2-1.1-.6-.5-1.1-1.1-1.5-1.9-.3-.8-.5-1.6-.5-2.7s.2-2.1.6-2.8c.4-.7.9-1.3 1.5-1.8.6-.4 1.4-.8 2.2-1 .8-.2 1.6-.4 2.5-.5l2.4-.3c.8-.1 1.5-.2 2.1-.3.6-.2 1.1-.4 1.5-.7.4-.3.5-.7.5-1.3 0-.6-.1-1.1-.3-1.4-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.4-.4-.1-.9-.1-1.4-.1-1.1 0-1.9.2-2.5.7-.6.5-1 1.3-1.1 2.3h-5.5c0-1.2.4-2.3.9-3.1zm10.9 7.8c-.3.1-.7.2-1.1.3-.4.1-.8.1-1.3.2-.4.1-.9.1-1.3.2l-1.2.3c-.4.1-.8.3-1 .5-.3.2-.5.5-.7.8-.3.4-.3.8-.3 1.3s.1.9.3 1.2c.2.3.4.6.7.8.3.2.7.3 1.1.4.4.1.8.1 1.3.1 1.1 0 1.9-.2 2.5-.5.6-.4 1-.8 1.3-1.3.3-.5.5-1 .5-1.5.1-.5.1-.9.1-1.2v-2.1c-.3.2-.6.4-.9.5zM95.6 7.6v2.8h.1c.7-1.2 1.6-2 2.7-2.5s2.3-.8 3.4-.8c1.5 0 2.7.2 3.6.6 1 .4 1.7 1 2.2 1.7.5.7.9 1.6 1.2 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.3-2.8-1.3-1.5 0-2.6.6-3.3 1.5-.7.9-1 2.4-1 4.4v10.5h-5.5V7.6h5.4zm25.8 3.6c-.9 0-1.6.2-2.2.6-.6.4-1.1.9-1.5 1.6-.4.6-.6 1.3-.8 2.1-.2.8-.2 1.5-.2 2.3 0 .7.1 1.5.2 2.2.2.8.4 1.4.8 2 .4.6.8 1.1 1.4 1.5.6.4 1.3.6 2.2.6 1.3 0 2.3-.4 3.1-1.1.7-.7 1.2-1.7 1.3-3h5.3c-.4 2.7-1.4 4.7-3.1 6.1-1.7 1.4-3.9 2.1-6.6 2.1-1.5 0-2.9-.3-4.1-.8-1.3-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-2-2.1-3.2-.5-1.3-.7-2.6-.7-4.1 0-1.6.2-3 .7-4.3.5-1.3 1.1-2.5 2-3.5.9-1 2-1.7 3.2-2.3 1.3-.5 2.7-.8 4.3-.8 1.2 0 2.3.2 3.4.5s2.1.8 2.9 1.4c.9.6 1.6 1.4 2.1 2.4.5.9.8 2.1.9 3.4h-5.4c-.2-2.4-1.5-3.6-3.9-3.6zm-92-9.3h11.2v2.7H29.4zm109.9 21c.8.8 2.1 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.8c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.7-.8 4.2-.8 1.7 0 3.2.3 4.4 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.4 1.4.5 2.9.4 4.5h-14.5c0 1.5.6 3 1.4 3.8zm6.4-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1.1.7-1.4 1.1-.3.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.3-1.5-.8-2.5-1.4-3.2z"></path></g></svg>
            </Link>
          </div>
        </div>
        <div className={`${style['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">Essays</div>
          </div>
          <div className="right inline">
            <Link className='text-main' href="/posts/1">All Posts</Link>
          </div>
        </div>
        <hr />
        <div className='py-6 grid grid-cols-1 md:grid-cols-2 px-6 gap-6 lg:grid-cols-4 lg:px-0'>
          {posts && posts.map((post) => (
            <div key={post.url}>
              <Link href={`/post/${post.url}`} >
                <div className={`${style['postEntry']}`}>
                  <div className={`${style['postEntryCover']} h-[180px]`}>{post.cover ? (
                    <Image src={post.cover} width={300} height={200} alt={post.title}
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
            <div className="text-2xl font-bold dark:text-white">Images</div>
          </div>
          <div className="right inline">
            <Link className='text-main' href="/lens">All Images</Link>
          </div>
        </div>
        <hr />
        <div className={`container max-w-[1000] pt-6 grid grid-cols-2 px-6 md:grid-cols-4 lg:px-0 gap-2 lg:gap-4`}>
          {LensData && LensData.map((data) => (
            <div key={data.url}>
              <Link className='scroll-my-12' href={`/lens/${data.no}`} id={`${data.no}`}>
                <div className={`${style['protfolioEntryImg']} aspect-square`}>
                  <Image src={data.image} className='rounded aspect-square object-cover' width={400} height={400} alt={data.name} />
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