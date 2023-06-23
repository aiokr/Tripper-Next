'use client';

import { usePathname } from 'next/navigation';
import style from './header.module.css'
import darkNavStyle from './headerDark.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() { // 必须以大写开头
  const pathname = usePathname();

  const getPageStyle = (pathname) => {
    const darkPages = ['/album', '/photo', '/lens'];

    // 检查路径的开头是否匹配 darkPages 中的任何一个
    const isDarkPage = darkPages.some(page => pathname.startsWith(page));

    return isDarkPage ? darkNavStyle : ''; // 如果页面路径匹配 darkPages，则应用暗色样式，否则返回 undefined
  };

  // 根据当前页面的 pathname 选择要使用的样式
  const currentPageStyle = getPageStyle(pathname);
  return (
    <div className={`${currentPageStyle.header} ${style.header} bg-[#ffffff55] dark:text-white dark:bg-[#161617cc]`}>
      <div className='container grid grid-cols-1 md:grid-cols-3'>
        <Link href="/" className='hidden md:flex items-center'>
          <Image src='https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar' width={32} height={32} unoptimized alt='LOGO'
            className='block mr-2'
          />
        </Link>
        <div className='flex place-content-evenly gap-2'>
          <Link className={`${style.headerLink} ${pathname === '/' ? style.activeLink : ''} `} scroll={false} href="/">
            <span className='hidden md:inline-block'>Home</span>
            <span className='inline-block md:hidden translate-y-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </span>
          </Link>
          <Link className={`${style.headerLink} ${pathname.startsWith('/post') ? style.activeLink : ''}`} scroll={false} href="/posts/1">
            <span className='hidden md:inline-block'>Post</span>
            <span className='inline-block md:hidden translate-y-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>

            </span>
          </Link>
          <Link className={`${style.headerLink} ${pathname.startsWith('/album') || pathname.startsWith('/photo') ? style.activeLink : ''}`} scroll={false} href="/photo">
            <span className='hidden md:inline-block'>Portfolio</span>
            <span className='inline-block md:hidden translate-y-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </span>
          </Link>
          <Link className={`${style.headerLink} ${pathname === '/about' ? style.activeLink : ''}`} scroll={false} href="/about">
            <span className='hidden md:inline-block'>About</span>
            <span className='inline-block md:hidden translate-y-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
            </span>
          </Link>
        </div>
        <div className='hidden md:flex flex-row justify-self-end items-center ml-2'>
        </div>
      </div>
    </div >
  )
}