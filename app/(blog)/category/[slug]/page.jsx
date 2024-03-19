import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { getPostByCategory } from '~/sanity/queries'
import style from './category.module.css'

export default async function categoryPage({ params }) {
  var categorySlug = params.slug
  const posts = await getPostByCategory({ categorySlug })
  //console.log(categorySlug, posts)
  return (
    <div className='col-span-3 lg:col-span-2'>
      {posts && posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/post/${post.slug}`} className={`${style['postEntry']}  mt-12 grid grid-cols-3`}>
            <div className={`${style['postEntryInfo']} px-6 lg:px-0 col-span-2`} >
              <div className={`${style['postEntryTitle']} text-lg lg:text-2xl font-medium`}>{post.title}</div>
              <div className='opacity-60'>{format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
                {Array.isArray(post.categories) && (
                  <span> · {post.categories.join(' · ')}</span>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}