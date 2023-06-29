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
    <main className='dark:bg-zinc-900'>
      <div className='container px-4 lg:px-2 max-w-[1000px] grid grid-cols-12 grid-rows-2 gap-4 pt-[65px]'>
        <div className={`${style['aboutCard']} relative row-span-1 col-span-6 px-6 py-4 lg:px-10 lg:py-8 bg-main`}>
          <div className='text-xl lg:text-3xl font-[500] leading-[36px] lg:leading-[48px] text-white'>👋 Hey,</div>
          <div className='text-2xl leading-5 lg:text-[48px] py-1 lg:py-8 font-[500] text-white'>I am aiokr</div>
        </div>
        <div className={`${style['aboutCard']} row-span-1 col-span-6 p-6 lg:p-12 bg-black`}>
          <div className={`${style['earthCard']} h-full`}></div>
        </div>
        <div className={`${style['aboutCard']} row-span-1 col-span-12 lg:col-span-6 px-6 py-4 lg:px-10 lg:py-8 border`}>
          <div className='text-2xl lg:text-3xl font-[500] leading-[36px] lg:leading-[48px] dark:text-white'>🏳️‍🌈 I am</div>
          <div className='py-1 lg:py-4'>
            <span className='text-lg leading-6 lg:leading-[3rem] lg:text-3xl font-[500] mr-2 bg-clip-text text-transparent bg-gradient-to-r from-[#71afdd70] to-main'>Always as a Student</span><br />
            <span className='text-lg leading-6 lg:leading-[3rem] lg:text-3xl font-[500] mr-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500'>Photographer</span><br />
            <span className='text-lg leading-6 lg:leading-[3rem] lg:text-3xl font-[500] bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-sky-950'>Blogger</span><br />
            <span className='text-lg leading-6 lg:leading-[3rem] lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-400'>
              <span>L</span>
              <span className='text-indigo-500 font-bold'>G</span>
              <span>B</span>
              <span>T</span>
            </span><br />
          </div>
        </div>
        <div className={`${style['aboutCard']} relative row-span-1 col-span-12 lg:col-span-6 px-6 py-4 lg:px-10 lg:py-8 text-white bg-[#A3B4BF]`}>
          <div className='text-2xl lg:text-3xl font-[500] leading-[36px] lg:leading-[48px]'>💡 Intersted in</div>
          <div className='py-1 lg:py-4'>
            <span className='text-lg leading-6 lg:leading-[3rem] lg:text-3xl font-[500] mr-2 '>
              Digital Nomad<br />
              Frontend<br />
            </span>
          </div>
        </div>
      </div>
      <div className='container px-4 lg:px-2 max-w-[1000px] grid grid-cols-12 pt-4'>
        <div className={`${style['aboutCard']} flex flex-col lg:flex-row justify-between items-center row-span-2 col-span-12 p-4 lg:p-8 border`}>
          <div className='text-2xl lg:text-3xl font-[500] leading-[60px] dark:text-white'>🔎 Find me @</div>
          <div className='grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5'>
            <a href='https://github.com/aiokr' target='_blank' className={`${style['aboutLink']} flex justify-center items-center  drop-shadow-lg shadow-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-950`} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="fill-white"><title>github</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            </a>
            <a href='https://sspai.com/u/aiokr/posts' target='_blank' className={`${style['aboutLink']} flex justify-center items-center  drop-shadow-lg shadow-red-300 bg-gradient-to-br from-[#fc281a] to-[#d7161c]`}>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="fill-white"><path d="m.67 6.186.105-1.51a.903.903 0 0 1 .754-.828L20.015.807a.811.811 0 0 1 .94.866l-.118 1.449a1 1 0 0 1-.828.904l-3.186.543v9.358a4 4 0 0 0 .44 1.824L19.08 19.3c.103.201.157.424.157.65v.194a.583.583 0 0 1-.584.584h-1.089a2.328 2.328 0 0 1-2.057-1.238l-1.732-3.27a4 4 0 0 1-.466-1.872V5.242l-4.829.898V18.19a2 2 0 0 1-.755 1.566l-.947.753a1 1 0 0 1-.623.217h-.21a.758.758 0 0 1-.758-.758V6.59l-3.33.648A1 1 0 0 1 .669 6.186Z"></path></svg>
            </a>
            <a href='https://500px.com.cn/aiokr' target='_blank' className={`${style['aboutLink']} flex justify-center items-center  drop-shadow-lg shadow-blue-100 bg-gradient-to-br from-blue-400 to-blue-600`} >
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2361" width="26" height="26"><path d="M572.705148 111.825273c-60.705148 0-123.0078 12.780031-170.932917 31.950078-4.792512 1.597504-7.98752 6.390016-7.98752 11.182527 0 4.792512 1.597504 12.780031 4.792512 20.767551 3.195008 7.98752 11.182527 27.157566 25.560062 20.767551 47.925117-17.572543 100.642746-28.75507 148.567863-28.75507 54.315133 0 107.032761 11.182527 158.152886 31.950078 39.937598 17.572543 76.680187 41.535101 118.215289 76.680187 3.195008 3.195008 6.390016 3.195008 9.585023 3.195008 7.98752 0 15.975039-7.98752 22.365055-14.377536 11.182527-12.780031 17.572543-22.365055 7.987519-31.950078-38.340094-36.74259-81.472699-63.900156-134.190327-86.26521-59.107644-23.962559-119.812793-35.145086-182.115445-35.145086z" p-id="2362" fill="#ffffff"></path><path d="M253.204368 674.146646s4.792512 15.975039 7.98752 22.365054c17.572543 39.937598 41.535101 75.082683 71.887675 107.032762 30.352574 30.352574 67.095164 54.315133 107.032761 71.887675 41.535101 17.572543 84.667707 25.560062 130.99532 25.560063s89.460218-9.585023 130.99532-25.560063c39.937598-17.572543 75.082683-41.535101 107.032761-71.887675 30.352574-30.352574 54.315133-67.095164 71.887676-107.032762 17.572543-41.535101 25.560062-84.667707 25.560062-130.995319s-9.585023-89.460218-25.560062-130.99532c-17.572543-39.937598-41.535101-75.082683-71.887676-107.032761-30.352574-30.352574-67.095164-54.315133-107.032761-71.887676-41.535101-17.572543-84.667707-25.560062-130.99532-25.560062-46.327613 0-91.057722 9.585023-132.592823 25.560062-31.950078 14.377535-87.862715 49.522621-119.812793 83.070203V63.900156h463.276131c17.572543 0 17.572543-23.962559 17.572543-31.950078s0-31.950078-17.572543-31.950078L280.361934 1.597504c-14.377535 0-22.365055 11.182527-22.365054 22.365055v388.193447c0 12.780031 15.975039 20.767551 30.352574 23.962559 28.75507 6.390016 35.145086-3.195008 41.535101-12.780031l1.597504-1.597504c11.182527-15.975039 43.132605-49.522621 43.132606-49.522621 51.120125-51.120125 119.812793-79.875195 193.297972-79.875195s142.177847 28.75507 193.297971 79.875195c51.120125 51.120125 79.875195 119.812793 79.875195 193.297972s-28.75507 142.177847-79.875195 193.297972c-51.120125 51.120125-121.410296 79.875195-194.895475 79.875195-49.522621 0-97.447738-12.780031-137.385336-38.340094V563.918877c0-31.950078 14.377535-65.49766 36.74259-91.057723 25.560062-28.75507 62.302652-46.327613 100.642746-46.327613s73.485179 14.377535 100.642745 39.937598c25.560062 25.560062 39.937598 60.705148 39.937598 97.447738 0 78.277691-62.302652 140.580343-140.580343 140.580343-15.975039 0-43.132605-6.390016-44.73011-6.390016-15.975039-4.792512-22.365055 17.572543-25.560062 23.962559-7.98752 28.75507 4.792512 33.547582 6.390016 35.145086 25.560062 7.98752 41.535101 9.585023 63.900156 9.585023 111.825273 0 202.882995-91.057722 202.882995-202.882995 0-110.227769-91.057722-201.285491-202.882995-201.285492-54.315133 0-105.435257 20.767551-143.775351 59.107645-36.74259 36.74259-57.51014 84.667707-57.510141 132.592823v194.895476c-20.767551-23.962559-41.535101-59.107644-55.912636-95.850234-4.792512-14.377535-17.572543-11.182527-33.547582-6.390015-4.792512 3.195008-27.157566 9.585023-22.365055 27.157566z" p-id="2363" fill="#ffffff"></path><path d="M895.400936 851.469579c-7.98752-7.98752-12.780031-11.182527-19.170047-12.780031-4.792512-1.597504-9.585023 0-14.377535 3.195007l-3.195008 3.195008c-36.74259 36.74259-79.875195 67.095164-127.800312 86.265211-49.522621 20.767551-102.24025 31.950078-158.152886 31.950078-54.315133 0-107.032761-11.182527-158.152886-31.950078-47.925117-20.767551-91.057722-49.522621-127.800312-86.265211-38.340094-38.340094-67.095164-81.472699-86.265211-127.800312-17.572543-44.730109-23.962559-79.875195-25.560062-91.057722v-3.195008c-3.195008-12.780031-14.377535-14.377535-31.950078-11.182527-7.98752 1.597504-28.75507 4.792512-27.157566 20.76755 6.390016 36.74259 15.975039 73.485179 30.352574 107.032762 23.962559 55.912637 57.51014 105.435257 99.045242 146.970359 43.132605 43.132605 92.655226 76.680187 146.970358 99.045241 57.51014 23.962559 118.215289 36.74259 180.517941 36.74259s123.0078-12.780031 180.517941-36.74259c55.912637-23.962559 105.435257-57.51014 146.970359-99.045241l3.195008-3.195008c6.390016-4.792512 11.182527-12.780031-7.98752-31.950078zM491.232449 618.234009c0 6.390016 6.390016 12.780031 9.585024 15.975039l1.597504 1.597504c6.390016 6.390016 12.780031 9.585023 17.572543 9.585024 4.792512 0 7.98752-1.597504 7.987519-3.195008 3.195008-3.195008 35.145086-35.145086 36.74259-38.340094l35.145086 35.145086c3.195008 3.195008 6.390016 4.792512 11.182527 6.390016 6.390016 0 11.182527-3.195008 17.572543-9.585024 15.975039-15.975039 7.98752-23.962559 3.195008-28.75507l-35.145086-35.145086 36.742589-38.340093c7.98752-9.585023 1.597504-17.572543-6.390015-25.560063-11.182527-11.182527-20.767551-12.780031-27.157566-7.987519l-36.74259 36.742589-35.145086-36.742589c-1.597504-1.597504-4.792512-3.195008-7.987519-3.195008-4.792512 0-11.182527 3.195008-17.572543 9.585023-11.182527 11.182527-14.377535 19.170047-7.98752 25.560063l36.74259 36.742589L496.024961 608.648986c-3.195008 3.195008-4.792512 6.390016-4.792512 9.585023z" p-id="2364" fill="#ffffff"></path></svg>
            </a>
            <a href='https://unsplash.com/@aiokr' target='_blank' className={`${style['aboutLink']} flex justify-center items-center  drop-shadow-lg shadow-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-950`} >
              <svg t="1683381310105" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2792" width="26" height="26"><path d="M960 460.34V960H64V460.34h282.26v249.84h331.48V460.34zM677.74 64H346.26v249.82h331.48z" p-id="2793" fill="#ffffff"></path></svg>
            </a>
            <a href='mailto:aiokr@outlook.com' target='_blank' className={`${style['aboutLink']} flex justify-center items-center  drop-shadow-lg shadow-emerald-100 bg-gradient-to-br from-emerald-300 to-emerald-600`} >
              <svg t="1683427985885" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3435" width="22" height="22"><path d="M513.92 537.216L99.968 278.592v96.96L513.92 637.44v-0.32l412.48-265.664V277.12L513.92 537.216zM0 128h1024v768H0V128z" fill="#ffffff" p-id="3436"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className='container px-4 lg:px-2 max-w-[1000px] grid grid-cols-12 pt-4'>
        <div className={`${style['aboutCard']} col-span-12 px-6 py-4 lg:px-10 lg:py-8 bg-gradient-to-br from-[#6BE1AE] to-[#71afdd]`}>
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
      <div className='container px-4 lg:px-2 max-w-[1000px] grid grid-cols-12 pt-4'>
        <div className={`${style['aboutCard']} ${style['labCard']} col-span-12 px-6 py-4 lg:px-10 lg:py-8 bg-[#121212]`}>
          <div className='text-xl lg:text-3xl font-[500] leading-[48px] lg:leading-[60px] text-white'>🧑‍💻 Labs</div>
          <div className='py-4 text-white grid grid-cols-2 lg:grid-cols-4'>
            <Link href='/labs/css' c>CSS 新特性</Link>
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