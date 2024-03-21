import Image from 'next/image'
import Link from 'next/link'
import style from './about.module.css'
import friends from './links.json'

export const metadata = {
  'title': '关于 - Tripper Press',
  'og:title': '关于 - Tripper Press',
  'og:image': 'https://tripper.press/api/og?title=按下瞬间&subtitle=衔枝筑巢，栽花种树。',
}

export default async function AboutPage() {
  return (
    <main className='bg-slate-50 dark:bg-zinc-900'>
      {/** 主网格 */}
      <div className='container max-w-5xl px-3 md:px-2 grid auto-cols-fr auto-rows-fr grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 pt-[128px]'>
        {/** 欢迎卡片 */}
        <div className={`${style['aboutCard']} shadow-md justify-between aspect-square col-span-1 bg-white`}>
          <div className='text-lg md:text-2xl'>👋 Hey, I am </div>
          <div className='text-2xl md:text-4xl'><span className='font-bold text-main drop-shadow-xl'>aiokr</span></div>
        </div>
        {/** 实时地球卡片 */}
        <div className={`${style['aboutCard']} shadow-md aspect-square col-span-1 bg-black`}>
          <div className={`${style['earthCard']} h-full`}></div>
        </div>
        {/** 翻转卡片 */}
        <div className={`${style['flipCard']} relative row-span-2 col-span-1`}>
          {/** 地图卡片 */}
          <div className={`${style['aboutCard']} ${style['mapCard']} ${style['flipCardFront']} shadow-md px-6 py-4 lg:px-10 lg:py-8 text-white`} style={{ backgroundImage: 'url("https://imgur.lzmun.com/picgo/2024/Monochrome-1710074138271.png_itp")' }}>
          </div>
          {/** 地点卡片 */}
          <div className={`${style['aboutCard']} ${style['mapCard']} ${style['flipCardBack']} shadow-md relative row-span-2 col-span-1 px-6 py-4 lg:px-10 lg:py-8 text-white`} style={{ backgroundImage: 'url("https://imgur.lzmun.com/picgo/20191118195950.jpg_/fw/1280")' }}>
            <div className={`${style['mapCardInfoLayer']} justify-between`}>
              <div className='text-lg md:text-2xl'>🚩 Based on</div>
              <div className='text-center text-xl md:text-2xl drop-shadow-xl'>广西 · 柳州</div>
            </div>
          </div>
        </div>
        {/** 双图网格 */}
        <div className={`${style['aboutCard']} ${style['reGrid']} grid-rows-2 gap-4 md:gap-7 row-span-2 col-span-1`}>
          {/** 图片卡片 */}
          <div className={`${style['aboutCard']} ${style['imageCard']}  shadow-md aspect-square relative row-span-1 col-span-1 px-6 py-4 lg:px-10 lg:py-8 text-white`} style={{ backgroundImage: 'url("https://imgur.lzmun.com/picgo/after2022/202204091215137.jpeg_itp")' }}>
          </div>
          {/** 图片卡片 */}
          <div className={`${style['aboutCard']} ${style['imageCard']} shadow-md aspect-square relative row-span-1 col-span-1 px-6 py-4 lg:px-10 lg:py-8 text-white`} style={{ backgroundImage: 'url("https://imgur.lzmun.com/picgo/after2022/202204091513971.jpeg_itp")' }}>
          </div>
        </div>
        {/** 斜杠人生卡片 */}
        <div className={`${style['aboutCard']} ${style['reGrid']} grid grid-cols-2 gap-4 md:gap-7 row-span-1 col-span-2`}>
          <Link href='/photo' target='_blank' className={`${style['aboutCard']} shadow-md justify-center items-center text-md md:text-xl font-semibold bg-white`}>
            <span className="drop-shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent after:content-['_↗']">Photograph</span>
          </Link>
          <div className={`${style['aboutCard']} shadow-md justify-center items-center text-md md:text-xl font-semibold bg-white`}>
            <span className='drop-shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>Frontend</span>
          </div>
          <div className={`${style['aboutCard']} shadow-md justify-center items-center text-md md:text-xl font-semibold bg-white`}>
            <span className='drop-shadow-md bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Motion</span>
          </div>
          <div className={`${style['aboutCard']} shadow-md justify-center items-center text-md md:text-xl font-semibold bg-white`}>
            <span className='drop-shadow-md bg-gradient-to-r from-main to-sub bg-clip-text text-transparent'>and More…</span>
          </div>
        </div>

        <div className={`${style['aboutCard']} justify-center items-center col-span-2 md:col-span-4 p-4 lg:p-8 text-2xl lg:text-4xl font-bold drop-shadow-xl`}>
          少年没有乌托邦，<br />心向远方自明朗。
        </div>
      </div>

      <div className='container max-w-5xl px-3 md:px-2 grid grid-cols-12 pt-4 md:pt-7'>
        <div className={`${style['aboutCard']} shadow-md col-span-12 px-6 py-4 lg:px-10 lg:py-8 bg-gradient-to-br from-[#6BE1AE] to-[#71afdd]`}>
          <div className='text-xl lg:text-3xl font-[500] leading-[48px] lg:leading-[60px] text-white'>🔗 My Friends</div>
          <div className='py-4 text-white grid grid-cols-2 lg:grid-cols-4'>
            {friends.map((friends) => (
              <a key={friends.title} href={`${friends.url}`} target='_blank'>
                {friends.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='container max-w-5xl px-3 md:px-2 grid grid-cols-12 pt-4 md:pt-7'>
        <div className={`${style['aboutCard']} ${style['labCard']} shadow-md col-span-12 px-6 py-4 lg:px-10 lg:py-8 bg-[#121212]`}>
          <div className='text-xl lg:text-3xl font-[500] leading-[48px] lg:leading-[60px] text-white'>🧑‍💻 Labs</div>
          <div className='py-4 text-white grid grid-cols-2 lg:grid-cols-4'>
            <Link href='/labs/color' c>Tripper Color</Link>
          </div>
        </div>
      </div>
      <Image
        src="https://imgur.lzmun.com/picgo/after2022/202209101335136.png_avatar"
        alt="Picture of the author"
        className='center py-12'
        width={128}
        height={128}
        automatically="true"
        provided="true"
      />
    </main>
  )
}