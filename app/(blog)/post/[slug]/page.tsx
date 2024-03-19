import Image from 'next/image'
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import style from './post.module.css';
import 'highlight.js/styles/default.css';
import { getBlogPost } from '~/sanity/queries'
import { PostPortableText } from '~/sanity/PortableText';
import Comment from '../../../components/comment/giscus'
import type { Metadata, ResolvingMetadata } from 'next'

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug)
  const { title, description, cover } = post
  return {
    title: title + ' - Tripper Press',
    description,
    openGraph: {
      title: title + ' - Tripper Press',
      description,
      images: [
        {
          url: cover.asset.url,
        },
      ],
      type: 'article',
    },
    twitter: {
      images: [
        {
          url: cover.asset.url,
        },
      ],
      title: title + ' - Tripper Press',
      description,
      card: 'summary_large_image'
    },
  } satisfies Metadata
}

export default async function generateStaticParams({ params }) {

  const postSlug: string = params.slug
  const post = await getBlogPost(postSlug)
  //console.log(params)
  return (
    <main className='dark:bg-zinc-900'>
      {post.cover ? (
        <div className={`${style['postCoverHeader']}`} style={{ backgroundImage: 'url("' + post.cover.asset.url + '")' }}>
          <div className={`${style['postHeaderLayer']}`}>
            <div className={`${style['info-area']} px-6 lg:px-8 max-w-[800px]`}>
              <div className='text-3xl font-medium pt-4 dark:text-white'>{post.title}</div>
              <div className='opacity-60 pt-4 dark:text-zinc-400'>{format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
                {Array.isArray(post.categories) && (
                  <span> · {post.categories.join(' · ')}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${style['postDefaultHeader']}`}>
          <div className={`${style['postHeaderLayer']}`}>
            <div className={`${style['info-area']} px-6 lg:px-8 max-w-[800px]`}>
              <div className='text-3xl font-medium pt-4 dark:text-white'>{post.title}</div>
              <div className='opacity-60 pt-4 dark:text-zinc-400'>{format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
                {Array.isArray(post.categories) && (
                  <span> · {post.categories.join(' · ')}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='container pt-8 px-6 lg:px-8 max-w-[800px] article'>
        <PostPortableText
          value={post.body}
        />
      </div>
      <div className='container pt-8 px-6 lg:px-8 max-w-[800px]'>
        <Comment id={post} />
      </div>
      <div className={`${style['commentHr']} pt-10 pb-6`}>
      </div>
    </main>
  );
}