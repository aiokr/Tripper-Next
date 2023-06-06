import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'

export default function PressPage({ children }) {
  return (
    <main className='bg-zinc-900 text-white font-semibold'>
      <div className={`${style['hero']}`} >
        <div className={`${style['heroLayer']} px-12 py-16 lg:pt-48 lg:pb-36`}>
          <Image className="pb-16" src="https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar"
            width={64} height={64}
            alt="logo" automatically="true" provided="true"
          />
          <div className={`${style['heroText']} text-xl md:text-4xl xl:text-6xl text-clip bg-clip-text text-transparent bg-gradient-to-br from-slate-100 to-zinc-700`}>
            <div className='text-center uppercase'>The Moment When I Press The Tripper</div>
            <div className='text-center uppercase'>The Moment Forever</div>
          </div>
        </div>
      </div>
      <div className={`${style['navbar']} container max-w-[600] grid grid-cols-4`}>
        <div></div>
        <div className='text-center'>
          <Link href='/photo'>All Works</Link>
        </div>
        <div className='text-center'>
          <Link href='/photo/glass'>Lens</Link>
        </div>
        <div></div>
      </div>
      <div className='px-4'>
        {children}
      </div>
    </main>
  )
}