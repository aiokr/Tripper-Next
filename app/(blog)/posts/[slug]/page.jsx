import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import style from '../posts.module.css'

export const metadata = {
  'title': '文章 - Tripper Press',
  'og:title': '文章 - Tripper Press',
  'og:image': 'https://tripper.press/api/og?title=文章',
}

async function fetchBlogListByPage(pageNum) {
  const postsStartNum = 10 * (pageNum - 1)
  const postEndNum = postsStartNum + 10
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(postsStartNum, postEndNum)
  const AllPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const categories = Array.from(new Set(AllPosts.map(post => post.category)))
  const postsCount = Object.keys(AllPosts).length // 统计文章数量
  const pagesCount = Math.ceil(postsCount / 10)
  return { posts, categories, pagesCount }
}

async function BlogPage(props) {
  const { posts, categories, pagesCount } = await fetchBlogListByPage(props.params.slug)
  const nextPageNum = String(parseInt(props.params.slug) + 1)
  const prevPageNum = props.params.slug - 1
  return (
    <main className='dark:bg-zinc-900 lg:pt-[65px] pb-12'>
      <div className="container px-4 lg:px-8 max-w-[1280px]">
        <div className={`${style['postHeader']} pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">文章</div>
          </div>
        </div>
        <hr />
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-3 lg:col-span-2'>
            {posts && posts.map((post) => (
              <div key={post.url}>
                <Link href={`/post/${post.url}`} className={`${style['postEntry']} my-6 grid grid-cols-3`}>
                  {post.cover ? (
                    <div className={`${style['postEntryCover']} aspect-square`} >
                      <Image src={post.cover} width={600} height={600} alt={post.title} unoptimized
                        className={`${style['postEntryImage']} object-cover h-full w-full`}
                      />
                    </div>
                  ) : (
                    <div className={`${style['postEntryCover']} aspect-video`}>
                      <Image src={'https://tripper.press/api/og?title='+post.title} width={600} height={300} alt={post.title} unoptimized
                        className={`${style['postEntryImage']} object-cover  h-full w-full`}
                      />
                    </div>
                  )}
                  <div className={`${style['postEntryInfo']} px-6 col-span-2`} >
                    <div className={`${style['postEntryTitle']} text-lg lg:text-2xl font-medium dark:text-white`}>{post.title}</div>
                    <div className='opacity-60 py-2 dark:text-zinc-400'>{format(parseISO(post.date), 'yyyy-MM-dd')} · {post.category}</div>
                    <div className={`${style['postEntryExcerpt']} opacity-60 hidden md:block dark:text-zinc-100`}>{post.excerpt}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='mt-5'>
            <div className='text-xl font-bold mb-2 dark:text-white'>分类</div>
            {categories.map(category => (
              <Link href={`/category/${category}`} key={category} className={`${style['categoriesLink']} block py-2 opacity-60 hover:opacity-100 dark:text-zinc-100`}>{category}</Link>
            ))}
          </div>
          <div className='col-span-3 grid grid-cols-3 text-center pb-6'>
            <div>
              {props.params.slug !== '1' &&
                <Link href={`/posts/${prevPageNum}`} className={`${style['pageBtn']} dark:bg-zinc-800`}>Prev Page</Link>
              }
            </div>
            <div className='dark:text-white'>
              {props.params.slug}
            </div>
            <div>
              {props.params.slug !== String(pagesCount) &&
                <Link href={`/posts/${nextPageNum}`} className={`${style['pageBtn']} dark:bg-zinc-800`}>Next Page</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogPage