import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'
export default function PressPage({ children }) {
  return (
    <main className={`${style['background']} bg-zinc-900 text-white font-thin`}>
      <div className={`${style['bgLayer']}`} >
        <div className={`${style['hero']}  px-12 py-16 lg:pt-48 lg:pb-20`} >
            <Image className="pb-24" src="https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar"
              width={64} height={64}
              alt="logo" automatically="true" provided="true"
            />
            <div className={`${style['heroText']} text-xl lg:text-6xl`}>
              <div className='text-center uppercase'>The Moment When I Press The Tripper</div>
              <div className='text-center uppercase'>The Moment Forever</div>
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
      </div>
    </main>
  )
}