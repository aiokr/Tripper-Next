import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export default async function PostPage2(props) {
  console.log(props.params.slug)
  const post = allPosts.find((post) => post.url == props.params.slug)

  console.log(post)
  return (post.body.html)

}