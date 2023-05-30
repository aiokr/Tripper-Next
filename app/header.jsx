'use client';

import { usePathname } from 'next/navigation';
import style from './header.module.css'
import darkNavStyle from './headerDark.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() { // 必须以大写开头
  const pathname = usePathname();

  const getPageStyle = (pathname) => {
    const darkPages = ['/album', '/photo'];

    // 检查路径的开头是否匹配 darkPages 中的任何一个
    const isDarkPage = darkPages.some(page => pathname.startsWith(page));

    return isDarkPage ? darkNavStyle : 0;
  };

  // 根据当前页面的 pathname 选择要使用的样式
  const currentPageStyle = getPageStyle(pathname);
  return (
    <div className={`${currentPageStyle.header} ${style.header} bg-[#ffffff55] dark:text-white dark:bg-[#161617cc]`}>
      <div className='container grid grid-cols-1 md:grid-cols-3'>
        <Link href="/" className='hidden md:block'>
          <Image src='https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar' width={32} height={32} unoptimized alt='LOGO'
            className='inline-block align-center mr-2'
          />
        </Link>
        <div className='flex justify-center'>
          <Link className={`${style.headerLink}`} scroll={false} href="/">Home</Link>
          <Link className={`${style.headerLink}`} scroll={false} href="/posts/1">Posts</Link>
          <Link className={`${style.headerLink}`} scroll={false} href="/photo">Photography</Link>
          <Link className={`${style.headerLink}`} scroll={false} href="/about">About</Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}