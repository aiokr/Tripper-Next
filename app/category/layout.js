import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated';
import style from './categoryLayout.module.css';

async function fetchBlogData() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  const categories = Array.from(new Set(posts.map(post => post.category)))
  return { posts, categories }
}

export default async function RootLayout({ children }) {
  const { categories } = await fetchBlogData()
  return (
    <main className='lg:pt-[65px] pb-12'>
    <div className='container px-4 lg:px-8 max-w-[1280px]'>
      <div className={`${style['postHeader']} pt-8 pb-4`}>
        <div className="left inline">
          <div className="text-2xl font-bold">分类</div>
        </div>
        <div className="right inline">
          <Image className="article-avatar" src="https://imgur.lzmun.com/picgo/after2022/tripper2whitefull.png_avatar"
            width={32} height={32}
            alt="logo" automatically="true" provided="true"
          />
        </div>
      </div>
      <hr />
      <div className='grid py-6 gap-2 grid-cols-2 lg:grid-cols-6'>
        {categories.map(category => (
          <Link href={`/category/${category}`} key={category} className="block py-2 text-center rounded-full border hover:text-white hover:bg-slate-300 transition-all ease-in-out">{category}</Link>
        ))}
      </div>
      {children}
      </div>
    </main>
  )
}