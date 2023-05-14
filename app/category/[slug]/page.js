import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import style from './category.module.css'

async function fetchBlogData(category) {
  const categoryDecodedStr = decodeURIComponent(category)
  let categoryStr = ''
  for (let i = 0; i < categoryDecodedStr.length;) {
    const code = categoryDecodedStr.codePointAt(i)
    categoryStr += String.fromCodePoint(code)
    i += code > 0xffff ? 2 : 1 // 处理 Unicode 码位
  }
  const posts = allPosts.filter(post => post.category === categoryStr)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return { posts }
}

export async function categoryPage(props) {
  var category = props.params.slug
  const { posts } = await fetchBlogData(category || '') // 传入空字符串来获取无分类的文章
  return (
    <div className='col-span-3 lg:col-span-2'>
      {posts && posts.map((post) => (
        <div key={post.url}>
          <Link href={`/post/${post.url}`} className={`${style['postEntry']}  mt-12 grid grid-cols-3`}>
            <div className={`${style['postEntryInfo']} px-6 lg:px-0 col-span-2`} >
              <div className={`${style['postEntryTitle']} text-lg lg:text-2xl font-medium`}>{post.title}</div>
              <div className='opacity-60'>{format(parseISO(post.date), 'yyyy-MM-dd')}</div>
              <div className={`${style['postEntryExcerpt']} opacity-60 hidden md:block`}>{post.excerpt}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default categoryPage