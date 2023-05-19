'use client';

import { usePathname } from 'next/navigation';
import styles from './hero.module.css'
import defaultStyle from './headerDefault.module.css'
import darkNavStyle from './headerDark.module.css'
import Link from 'next/link';

export default function Header() { // 必须以大写开头
  const pathname = usePathname();

  const getPageStyle = (pathname) => {
    const darkPages = ['/album', '/photo'];

    // 检查路径的开头是否匹配 darkPages 中的任何一个
    const isDarkPage = darkPages.some(page => pathname.startsWith(page));

    return isDarkPage ? darkNavStyle : defaultStyle;
  };

  // 根据当前页面的 pathname 选择要使用的样式
  const currentPageStyle = getPageStyle(pathname);
  return (
    <div className={`${currentPageStyle.header} bg-[#ffffff55] dark:text-white dark:bg-[#161617cc]`}>
      <Link className='' scroll={false} href="/">Home</Link>
      <Link className='' scroll={false}  href="/posts/1">Posts</Link>
      <Link className='' scroll={false}  href="/photo">Photos</Link>
      <Link className='' scroll={false}  href="/about">About</Link>
    </div>
  )
}