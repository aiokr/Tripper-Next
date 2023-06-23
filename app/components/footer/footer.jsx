'use client';

import styles from './footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-zinc-200 dark:bg-zinc-800 pb-20 lg:pb-0`}>
      <div className='container max-w-[1280px] p-8'>
        <div className='inline-block py-4 ease-in-out transition hover:text-main'>
          <Image className="hidden dark:inline" src="https://imgur.lzmun.com/picgo/logo/tripper2colorfull.png_avatar"
            width={32} height={32}
            alt="logo" automatically="true" provided="true"
          />
          <Image className="inline dark:hidden" src="https://imgur.lzmun.com/picgo/logo/tripper2blackfull.png_avatar"
            width={32} height={32}
            alt="logo" automatically="true" provided="true"
          />
          <span className='text-lg lg:text-2xl text-bold leading-[32px] align-middle pl-4'>Tripper Press<span className='px-3'>·</span>按下瞬间</span>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <p className='block opacity-80 dark:text-white'>
            <Link className='text-main' href='https://github.com/aiokr/Tripper-Next' target='_blank'>Design and Code by aiokr</Link> <br />
            {
              process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ? (
                <Link className='block text-ellipsis overflow-hidden' href={`https://github.com/aiokr/Tripper-Next/commit/` + `${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`} target='_blank'>
                  Build by Github Commit
                </Link>
              ) : (
                <span className='block text-ellipsis overflow-hidden'>Build By Vercel CLI</span>
              )
            }
            © Tripper Press 2016-2023 <br />
          </p>
        </div>
      </div>
    </footer>
  )
}