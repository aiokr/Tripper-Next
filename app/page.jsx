import Image from 'next/image'
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import heroStyle from './hero.module.css'
import { allPosts } from 'contentlayer/generated'
import IndexStyle from './index.module.css'

async function fetchBlogData() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 6)
  return { posts }
}

export default async function Home() {
  const { posts } = await fetchBlogData()
  return (
    <main className='bg-white dark:bg-zinc-900'>
      <div className='container lg:px-8 max-w-[1280px]'>
        <div className={`${heroStyle['hero-area']} lg:pt-[65px]`}>
          <div className={`${heroStyle['hero-img']} h-[300px] lg:h-[400px]`}>
            <div className={`${heroStyle['hero-layer']}`}>
              <div className={`${heroStyle['hero-title']} text-2xl lg:text-4xl font-bold px-8`}>人类无可救药地留在柏拉图的洞穴里</div>
              <div className={`${heroStyle['hero-subtitle']} text-white opacity-80 pt-3`}>Tripper Press</div>
            </div>
          </div>
        </div>
        <div className={`${IndexStyle['postHeader']} px-6 lg:px-0 pt-8 pb-4`}>
          <div className="left inline">
            <div className="text-2xl font-bold dark:text-white">文章</div>
          </div>
          <div className="right inline">
            <Link className='text-main' href="/posts/1">所有文章</Link>
          </div>
        </div>
        <hr />
        <div className='py-6 grid grid-cols-1 md:grid-cols-2 px-6 gap-6 lg:grid-cols-3 lg:px-0'>
          {posts && posts.map((post) => (
            <div key={post.url}>
              <Link href={`/post/${post.url}`} >
                {post.cover ? (
                  <div className={`${IndexStyle['postEntry']}`}>
                    <div className={`${IndexStyle['postEntryCover']} h-[233px]`}>
                      <Image src={post.cover} width={600} height={400} alt={post.title}
                        className={`${IndexStyle['postEntryCover']} object-cover h-full w-full`}
                      />
                    </div>
                    <div className={`${IndexStyle['postEntryInfo']} h-[167px] py-6`}>
                      <div className={`${IndexStyle['postEntryTitle']} text-2xl font-medium dark:text-white`}>{post.title}</div>
                      <div className='opacity-60 py-1 dark:text-zinc-400'>{format(parseISO(post.date), 'yyyy-MM-dd')}
                        {post.category && (
                          ' · ' + post.category
                        )}
                      </div>
                      <div className={`${IndexStyle['postEntryExcerpt']} opacity-60 hidden md:block dark:text-zinc-100`}>{post.excerpt}</div>
                    </div>
                  </div>
                ) : (
                  <div className={`${IndexStyle['postEntry']}`}>
                    <div className={`${IndexStyle['postEntryInfo']} h-[200px] lg:h-[400px] py-4`}>
                      <div className={`${IndexStyle['postEntryTitle']} text-2xl font-medium dark:text-white`}>{post.title}</div>
                      <div className='opacity-60 py-1 dark:text-zinc-400'>{format(parseISO(post.date), 'yyyy-MM-dd')}
                        {post.category && (
                          ' · ' + post.category
                        )}
                      </div>
                      <div className={`${IndexStyle['postEntryExcerptNoCover']} opacity-60 hidden md:block dark:text-zinc-100`}>{post.excerpt}</div>
                    </div>
                  </div>
                )}
              </Link>
            </div>
          ))
          }
        </div>
        <div className='pt-6'>

        </div>
      </div>
    </main >
  )
}