import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { getLatestBlogPosts, getAllCategories } from '~/sanity/queries'
import style from '../posts.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文章 - Tripper Press',
  openGraph: {
    title: '文章 - Tripper Press',
    images: ['https://tripper.press/api/og?title=文章'],
  },
}

export default async function PostList({ params }) {
  const postPerPage = 12 // 每页文章数
  const pageNum: number = params.slug
  const postStartNum: number = postPerPage * (pageNum - 1)
  const postEndNum: number = postPerPage * (pageNum - 1) + postPerPage - 1
  const AllPosts = await getLatestBlogPosts({ forDisplay: true }) || [] // 所有文章
  const posts: any = await getLatestBlogPosts({ start: postStartNum, end: postEndNum, forDisplay: true }) || [] // 本页要显示的文章
  const AllCategories = await getAllCategories()
  const totalPostNum: number = Object.keys(AllPosts).length // 统计文章数量
  const pagesCount: number = Math.ceil(totalPostNum / postPerPage) // 总页数
  const nextPageNum: number = params.slug + 1
  const prevPageNum: number = params.slug - 1
  console.log(posts)
  return (
    <main className='dark:bg-zinc-900 lg:pt-[65px] pb-12 pt-24'>
      <div className="container px-4 lg:px-8 max-w-[1280px]">
        <div className={`${style['postHeader']} pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">文章</div>
          </div>
        </div>
        <hr />
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-3 lg:col-span-2'>
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/post/${post.slug}`} className={`${style['postEntry']} my-6 grid grid-cols-3`}>
                  {post.cover ? (
                    <div className={`${style['postEntryCover']} aspect-square`} >
                      <Image src={post.cover.asset.url} width={600} height={600} alt={post.title} unoptimized
                        className={`${style['postEntryImage']} object-cover h-full w-full`}
                      />
                    </div>
                  ) : (
                    <div className={`${style['postEntryCover']} aspect-video`}>
                      <Image src={'https://tripper.press/api/og?title=' + post.title} width={600} height={300} alt={post.title} unoptimized
                        className={`${style['postEntryImage']} object-cover  h-full w-full`}
                      />
                    </div>
                  )}
                  <div className={`${style['postEntryInfo']} px-6 col-span-2`} >
                    <div className={`${style['postEntryTitle']} text-lg lg:text-2xl font-medium dark:text-white`}>{post.title}</div>
                    <div className='opacity-60 py-2 dark:text-zinc-400'>{format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
                      {Array.isArray(post.categories) && (
                        <span> · {post.categories.join(' · ')}</span>
                      )}
                    </div>
                    <div className={`${style['postEntryExcerpt']} opacity-60 hidden md:block dark:text-zinc-100`}>{post.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='mt-5'>
            <div className='text-xl font-bold mb-2 dark:text-white'>分类</div>
            {AllCategories.map((category: any) => (
              <div key={category.slug}>
                <Link href={`/category/${category.slug}`} className={`${style['categoryLink']}  block py-2 opacity-60 hover:opacity-100 dark:text-zinc-100`}>
                  {category.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-3 grid grid-cols-3 text-center pb-6'>
          <div>
            {params.slug !== '1' &&
              <Link href={`/posts/${prevPageNum}`} className={`${style['pageBtn']} dark:bg-zinc-800`}>Prev Page</Link>
            }
          </div>
          <div className='dark:text-white'>
            {params.slug}
          </div>
          <div>
            {params.slug !== String(pagesCount) &&
              <Link href={`/posts/${nextPageNum}`} className={`${style['pageBtn']} dark:bg-zinc-800`}>Next Page</Link>
            }
          </div>
        </div>
      </div>
    </main>
  );
}