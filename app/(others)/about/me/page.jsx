import Image from 'next/image'
import Link from 'next/link'
import style from '../about.module.css'
import Script from 'next/script'
import videos from './videos.json'

export default async function AboutPage() {
  return (
    <main className='dark:bg-zinc-900 lg:pt-[65px]'>
      <div className={`${style['aboutCard']} container max-w-[1200px] px-6 py-4 lg:px-10 lg:py-8`}>
        <h2>陈王健平</h2>
          <Link className='block' href="mailto: chenwjp@foxmail.com" target='_black'/>Email: chenwjp@foxmail.com<br />
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h3>教育经历</h3>
            <div>
              <div className='flex justify-between font-bold'>
                <div>本科, 南宁师范大学</div>
                <div>2018.9 - 2022.6</div>
              </div>
              <div>经济与管理学院 文化产业管理系</div>
            </div>
          </div>
          <div>
            <h3>证书奖项</h3>
            <div className='flex justify-between'>
              <div>大学英语 四级</div>
              <div>2020.12</div>
            </div>
            <div className='flex justify-between'>
              <div>大学生创新创业训练计划项目 省级</div>
              <div>2020.04</div>
            </div>
          </div>
        </div>
        <div>
          <h3>视频项目</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {videos.map((videos) => (
              <a className='' key={videos.title} href={`${videos.url}`} target='_blank'>
                <Image className='aspect-video object-cover mb-2 ' src={videos.img} alt={videos.title} width={1200} height={1200} unoptimized/>
                <div>{videos.title}</div>
              </a>
            ))}
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