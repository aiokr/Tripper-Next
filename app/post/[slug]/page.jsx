"use client"
import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import React, { useRef } from 'react';
import { allPosts } from 'contentlayer/generated'
import style from './post.module.css'
//Markdown
import MarkdownIt from 'markdown-it'
import tocAndAnchor from 'markdown-it-toc-and-anchor'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
var md = require('markdown-it')({
  breaks: true,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
});
md.use(emoji).use(footnote).use(tocAndAnchor)
import Image from 'next/image'

const upyunImg = ({ src, width, quality }) => {
  return `${src}_itp/fw/${width}`
}

export default async function generateStaticParams(props) {
  console.log(props.params.slug)
  const post = allPosts.find((post) => post.url == props.params.slug)
  const url = 'https://next.tripper.press/post/' + props.params.slug
  const postCont = post.body.raw
  const postCover = post.cover
  var result = md.render(postCont);
  return (
    <main>
      {post.cover ? (
        <div className={`${style['postCoverHeader']}`} style={{ backgroundImage: 'url("' + postCover + '")' }}>
          <div className={`${style['postHeaderLayer']}`}>
            <div className={`${style['info-area']} lg:px-8 max-w-[800px]`}>
              <div className='text-3xl font-medium pt-4'>{post.title}</div>
              <div className='opacity-60 pt-4'>{format(parseISO(post.date), 'yyyy-MM-dd')}{post.category ? `/${post.category}` : ''}{post.tags ? `/${post.tags}` : ''}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${style['postDefaultHeader']}`}>
          <div className={`${style['postHeaderLayer']}`}>
            <div className={`${style['info-area']} lg:px-8 max-w-[800px]`}>
              <div className='text-3xl font-medium pt-4'>{post.title}</div>
              <div className='opacity-60 pt-4'>{format(parseISO(post.date), 'yyyy-MM-dd')}{post.category ? `/${post.category}` : ''}{post.tags ? `/${post.tags}` : ''}</div>
            </div>
          </div>
        </div>
      )}
      <div className='container pt-8 lg:px-8 max-w-[800px] article' dangerouslySetInnerHTML={{ __html: result }} />
      <div className={`${style['commentHr']} pt-10 pb-6`}>
      </div>
    </main>
  )
}