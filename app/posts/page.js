import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import style from './posts.module.css'

async function fetchBlogData() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  const categories = Array.from(new Set(posts.map(post => post.category)))
  return { posts, categories }
}



async function BlogPage() {
  const { posts } = await fetchBlogData()
  const {categories} = await fetchBlogData()
  return (
    <main className="container lg:px-8 max-w-[1280px]">
      <div className={`${style['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
        <div className="left inline">
          <div className="text-2xl font-bold">文章</div>
        </div>
        <div className="right inline">
          <Image className="article-avatar" src="https://imgur.lzmun.com/picgo/after2022/tripper2whitefull.png_avatar"
            width={32} height={32}
            alt="logo" automatically="true" provided="true"
          />
        </div>
      </div>
      <hr />
      <div className='grid lg:grid-cols-3'>
        <div className='lg:col-span-2	'>
          {posts && posts.map((post) => (
            <div key={post.url}>
              {post.cover ? (
                <Link href={`/post/${post.url}`} className={`${style['postEntry']} my-6 grid grid-cols-3`}>
                  <div className={`${style['postEntryCover']} aspect-square`} style={{ backgroundImage: 'url("' + post.cover + '")' }}>
                  </div>
                  <div className={`${style['postEntryInfo']} px-6 lg:p-8 col-span-2`} >
                    <div className='text-lg lg:text-2xl font-medium'>{post.title}</div>
                    <div className='opacity-60 py-3'>{format(parseISO(post.date), 'yyyy-MM-dd')} · {post.category}</div>
                    <div className='opacity-60 hidden md:inline'>{post.excerpt}</div>
                  </div>
                </Link>
              ) : (
                <Link href={`/post/${post.url}`} className={`${style['postEntry']} my-6 grid grid-cols-1 aspect-[2/.8]`}>
                  <div className={`${style['postEntryInfo']} p-8 `} >
                    <div className='text-lg lg:text-2xl font-medium'>{post.title}</div>
                    <div className='opacity-60'>{format(parseISO(post.date), 'yyyy-MM-dd')}</div>
                    <div className='opacity-60 hidden md:inline'>{post.excerpt}</div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div>
          {categories.map(category => (
            <Link href={`/category/${category}`} key={category} className="block py-2 hover:underline">{category}</Link>
          ))}

        </div>
      </div>
    </main>
  )
}

export default BlogPage
