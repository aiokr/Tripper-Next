import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'
export default function PressPage({ children }) {
  return (
    <main className='bg-zinc-900 text-white font-thin'>
      <div className={`${style['hero']}`} >
        <div className={`${style['heroLayer']} px-12 py-16 lg:pt-48 lg:pb-36`}>
          <Image className="pb-24" src="https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar"
            width={64} height={64}
            alt="logo" automatically="true" provided="true"
          />
          <div className={`${style['heroText']} text-lg lg:text-6xl`}>
            <div className='text-center uppercase'>The Moment When I Press The Tripper</div>
            <div className='text-center uppercase'>The Moment Forever</div>
          </div>

          <div className='pt-24 block md:hidden'>
            <span className='text-center'>View Works</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pt-2 center">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className={`${style['navbar']} container max-w-[600] grid grid-cols-3`}>
        <div></div>
        <div className='text-center'>
          <Link href='/photo'>Works</Link>
        </div>
        <div></div>
      </div>
      {children}
    </main>
  )
}