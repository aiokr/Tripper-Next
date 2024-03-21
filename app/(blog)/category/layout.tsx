import Link from 'next/link';
import { getAllCategories } from '~/sanity/queries'
import style from './categoryLayout.module.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文章分类 - Tripper Press',
  openGraph: {
    title: '文章分类 - Tripper Press',
    images: ['https://tripper.press/api/og?title=文章分类'],
  },
}

export default async function categoryLayout({ children }) {
  const AllCategories = await getAllCategories()
  return (
    <main className='dark:bg-zinc-900 lg:pt-[65px] pb-12'>
      <div className='container px-4 lg:px-8 max-w-[1280px]'>
        <div className={`${style['postHeader']} pt-8 pb-4`}>
          <div className="text-2xl font-bold">分类</div>
        </div>
        <hr />
        <div className='grid py-6 gap-2 grid-cols-2 lg:grid-cols-6'>
          {AllCategories.map((category: any) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="block py-2 text-center rounded-full border hover:bg-zinc-100 hover:dark:bg-zinc-800 transition-all ease-in-out">{category.title}</Link>
          ))}
        </div>
        {children}
      </div>
    </main>
  )
}