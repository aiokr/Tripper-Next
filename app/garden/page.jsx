import style from './garden.module.css'
import Link from 'next/link'

export const metadata = {
  title: '🪸 Garden - Tripper Press',
  description: 'Tripper Press Website',
}

export default async function DigitalGarden() {
  return (
    <main className="bg-slate-50">
      <div className='container px-4 lg:px-2 max-w-[1280px] grid grid-cols-12 gap-4 py-[65px]'>
        <div className={`${style['Card']} col-span-12 p-3 lg:p-8 bg-gradient-to-br from-[#71afdd50] to-[#71afdd]`}>
          <div className='text-2xl lg:text-3xl py-4 font-[500] text-center text-white'>👋 Welcome to my Digital Garden</div>
        </div>
        <Link href='https://photup.notion.site/Press-Moment-d53931c07cb043ca99ded68166573ea2' target='_blank'
              className={`${style['Card']} col-span-4 md:col-span-3 lg:col-span-2 p-3 lg:p-8 bg-white`}>
          <div className='text-2xl lg:text-3xl py-4 font-[500] text-center '>⌨️<br />Notion</div>
        </Link>
        <Link href='/category/瞬间周报' target='_blank'
              className={`${style['Card']} col-span-4 md:col-span-3 lg:col-span-3 p-3 lg:p-8 bg-white`}>
          <div className='text-2xl lg:text-3xl py-4 font-[500] text-center '>📨<br />Newsletter</div>
        </Link>
        <Link href='https://www.notion.so/photup/Tripper-Workplace-4ba7c5bcbcc14571a1e40ece084d5cb9' target='_blank'
              className={`${style['Card']} col-span-4 md:col-span-3 lg:col-span-3 p-3 lg:p-8 bg-white`}>
          <div className='text-2xl lg:text-3xl py-4 font-[500] text-center '>🧰<br />Work Bench</div>
        </Link>
        <div className={`${style['Card']} col-span-4 md:col-span-3 lg:col-span-4 p-3 lg:p-8 bg-gradient-to-br from-[#71afdd50] to-[#71afdd]`}>
          <div className='text-2xl lg:text-3xl py-4 font-[500] text-center text-white'>🧑‍💻<br />No Login</div>
        </div>
      </div>
    </main>
  )
}