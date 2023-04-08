import Image from 'next/image'
import { headers } from 'next/headers';
import style from './post.module.css'

async function fetchBlogData() {
    const BlogDbUrl = 'https://api.notion.com/v1/databases/c37515903dc94a60939422b2157a5ff3'
    // const headersInstance = headers()
    const authorization = 'Bearer ' + process.env.NOTION_SECRET
    const NotionVersion = process.env.NOTION_V
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Notion-Version': NotionVersion,
        'Authorization': authorization
    }
    const res = await fetch(BlogDbUrl, {
        headers: headers
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function  getStaticProps({ Posts }) {
    const data = await fetchBlogData();
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
            <ul>
              {data.last_edited_time}
            </ul>
        </main>
    )
}

export default getStaticProps