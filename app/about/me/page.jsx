import Image from 'next/image'
import Link from 'next/link'
import style from '../about.module.css'
import Script from 'next/script'

export default async function AboutPage() {
  return (
    <main className='dark:bg-zinc-900 lg:pt-[65px]'>
      <div className={`${style['aboutCard']} container max-w-[1000px] px-6 py-4 lg:px-10 lg:py-8 lg:border`}>
        <h2>陈王健平</h2>
        <p>
          邮箱: chenwjp@foxmail.com<br />
          博客: https://tripper.press<br />
          Github: github.com/aiokr<br />
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
          <h3>开源项目</h3>
          <div>
            <Link className='block font-bold' href='https://github.com/aiokr/photo-tools' target='_blank'><h4>Tripper-Photo-Tools</h4></Link>
            <span>基于 Serverless 的图片处理 API</span>
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