import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns'
import { getPostByCategory } from '~/sanity/queries'
import style from './category.module.css'

export default async function categoryPage({ params }) {
  var categorySlug = params.slug
  const posts = await getPostByCategory({ categorySlug })
  console.log(categorySlug, posts)
  return (
    <div className='col-span-3 lg:col-span-2'>
    </div>
  )
}