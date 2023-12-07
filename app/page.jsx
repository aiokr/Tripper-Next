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

export default async function Home() {
  return (
    <main>
      <div className='container max-w-[1480px] px-4 lg:px-8 pt-16 md:pt-20 lg:pt-28 pb-4 flex flex-col'>
        <div className='pb-6 mb-6 text-5xl lg:text-7xl font-bold dark:text-white text-main border-b-8 border-main max-w-[450px]'>
          Tripper Press
        </div>
        <div className="pb-6md:text-md font-medium text-sub dark:text-white max-w-[450px]">Tripper Press is a personal brand，A creative-led design studio，Here I explore the MG animation and aesthetics.</div>
      </div>
      <div className='container max-w-[1480px] px-4 lg:px-8 pb-12 flex gap-6'>
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
      <div className='container max-w-[1480px] px-4 lg:px-8'>
        <div className='grid grid-cols-6 gap-6'>
          <Link className='col-span-6 md:col-span-4' href='https://www.behance.net/gallery/176450047/Sspai-Get-started-Ticktick-in-59-mins-PREIVEW' target='_blank'>
            <div className={`${style['protfolioItem']}`}>
              <Image src='https://imgur.lzmun.com/picgo/2023/202310272338345.png_itp' width={1200} height={800} />
              <Image src='https://imgur.lzmun.com/picgo/2023/202310272341822.png_itp' width={1200} height={800} className={`${style['protfolioEntryLayer']}  opacity-0 hover:opacity-100`} />
              <div className={`${style['protfolioText']} inline-block text-2xl mt-4`}>Get Start Ticktick in 59 mins By Sspai</div>
              <span> — </span>
              <div className={`${style['protfolioText']} inline text-2xl mt-4`}>Motion Graphics</div>
            </div>
          </Link> 
        </div>
        <div className='pb-24'>
        </div>
      </div>
    </main >
  )
}