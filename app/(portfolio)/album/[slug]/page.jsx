"use client"

// 此目录下的 layout 显示一个集合中的所有图片，children 显示单张图片及信息。
import * as React from "react";
import { allPhotos } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import style from './album.module.css'
import { useState } from "react";
import Script from 'next/script';
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//Markdown
import tocAndAnchor from 'markdown-it-toc-and-anchor';
import emoji from 'markdown-it-emoji';
import footnote from 'markdown-it-footnote';
import highlightjs from 'markdown-it-highlightjs';
import iterator from 'markdown-it-for-inline'
var md = require('markdown-it')({
  breaks: true,
  linkify: true,
  langPrefix: 'language-',
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre className="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) { }
    }
    return '<pre className="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
md.use(emoji).use(footnote).use(tocAndAnchor).use(highlightjs).use(
  iterator, 'url_new_win', 'link_open', function (tokens, idx) {
    tokens[idx].attrPush(['target', '_blank']);
  });

export function fetchAlbum(params) {
  const album = allPhotos.find((photos) => photos.url == params.slug) //获取一个相册的所有数据
  const photos = album.photos //提取出相册中的照片列表
  const albumPost = album.body.raw //获取相册正文
  const result = md.render(albumPost); //转换正文
  const title = album.title + ' - Tripper Press'
  return { photos, album, result }
}

export default function AlbumPage({ params }) {
  const [open, setOpen] = React.useState(false);
  const { photos, album, result } = fetchAlbum(params);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className='bg-zinc-900 text-[#E2E2E2] pt-6 lg:pt-[65px] p-6'>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: photos[activeIndex] },
        ]}
      />
      <div className='container max-w-[1200px]'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3 md:col-span-2'>
            <section className='pb-6'>
              <Image src={photos[activeIndex]} width={1500} height={1000} alt={album.title} className='object-cover object-center w-full aspect-[3/2] rounded' unoptimized />
            </section>
            <div className='grid grid-cols-2 pb-6'>
              <button className={`${style['photoAction']}`} type="button" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
                <span> Full Screen </span>
              </button>
            </div>

            <div className='flex flex-row gap-4 overflow-x-scroll rounded  overscroll-none'>
              {photos && photos.map((photo, index) => ( //index 是数组的索引，从 0 开始
                <button key={index} href={`/album/${params.slug}/`}
                  onClick={() => setActiveIndex(index)}
                  className={`${style['albumItem']} h-20 lg:h-36 aspect-square`}>
                  <Image src={photo} width={200} height={200} className='aspect-square object-cover rounded' unoptimized />
                </button>
              ))}
            </div>
          </div>
          <div className='col-span-3 md:col-span-1 md:p-2'>
            <div className='text-2xl lg:text-3xl font-semibold py-2'>
              {album.title}
            </div>
            <div className='text-sm opacity-75'>{format(parseISO(album.date), 'yyyy-MM-dd')}</div>
          </div>
        </div>
        <div className='container pt-8 px-6 lg:px-8 article postArticle' dangerouslySetInnerHTML={{ __html: result }} />
      </div>
    </section>
  )
}