import Image from 'next/image'
import Link from 'next/link'
import style from './photo.module.css'
export default function PressPage({ children }) {
  return (
    <main className='bg-zinc-900 text-white pb-[65px]'>
      <div className={`${style['hero']}`} >
        <div className={`${style['heroLayer']} px-12 py-16 lg:pt-48 lg:pb-36 text-white text-3xl lg:text-6xl font-semibold`}>
          <Image className="pb-24" src="https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar"
            width={64} height={64}
            alt="logo" automatically="true" provided="true"
          />
          <div className='text-center'>When I Press The Tripper</div>
          <div className='text-center'>The Moment Forever</div>
        </div>
      </div>
      <div className={`${style['navbar']} container max-w-[600] grid grid-cols-3`}>
        <div></div>
        <div className='text-center'>
          <Link href='/photo/works'>Recently Works</Link>
        </div>
        <div></div>
      </div>
      {children}
    </main>
  )
}