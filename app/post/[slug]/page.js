"use client"

import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import React, { useRef } from 'react';
import { allPosts } from 'contentlayer/generated'
import style from './post.module.css'
// import { ReactCusdis } from 'react-cusdis'
var md = require('markdown-it')({
  breaks: true,
});

export default async function PostPage(props) {
  console.log(props.params.slug)
  const post = allPosts.find((post) => post.url == props.params.slug)
  const url = 'https://next.tripper.press/post/' + props.params.slug
  const postCont = post.body.raw
  var result = md.render(postCont);
  return (
    <main className="container px-6 pt-8 lg:px-8 max-w-[800px]">
      <div className='text-3xl font-medium pt-4'>{post.title}</div>
      <div className='opacity-60 pt-4'>{format(parseISO(post.date), 'yyyy-MM-dd')}{post.category ? `/${post.category}` : ''}{post.tags ? `/${post.tags}` : ''}</div>
      <div className='article pt-6' dangerouslySetInnerHTML={{ __html: result }} />
      <div className={`${style['commentHr']} pt-10 pb-6`}>
</div>
    </main>
  )
}