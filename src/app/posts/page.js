import Image from 'next/image'
import style from './post.module.css'
export default function PostsList() {
    return (
        <main className="container px-6 lg:px-8 max-w-[1280px]">
            <div className={`${style['postHeader']} pt-8 pb-4`}>
                <div className="left inline">
                    <div className="text-2xl font-bold">文章</div>
                </div>
                <div className="right inline">
                    <Image className="article-avatar" src="https://imgur.lzmun.com/picgo/after2022/tripper2whitefull.png_avatar"
                        width={32}
                        height={32}
                        alt="logo"
                        automatically="true"
                        provided="true"
                    />
                </div>
            </div>
            <hr />
        </main>
    )
}
