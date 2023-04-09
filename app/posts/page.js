import Image from 'next/image'
import { headers } from 'next/headers';
import Link from 'next/link';
import style from './post.module.css'

async function fetchBlogData() {
    const BlogDbUrl = 'https://api.notion.com/v1/databases/c37515903dc94a60939422b2157a5ff3/query'
    // const headersInstance = headers()
    const authorization = 'Bearer ' + process.env.NOTION_SECRET
    const NotionVersion = process.env.NOTION_V
    const options = {
        next: { revalidate: 10 },
        method: 'POST',
        body: JSON.stringify({
            page_size: 100,
            "sorts": [{ "property": "Date", "direction": "descending" }]
        }),
        headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json',
            'Notion-Version': NotionVersion,
            'Authorization': authorization
        },
    };
    const res = await fetch(BlogDbUrl, options);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function BlogPage() {
    const data = await fetchBlogData();
    const postData = data.results
    console.log(postData)
    console.log('-----------------------------------------------')
    return (
        <main className="container px-6 lg:px-8 max-w-[1280px]">
            <div className={`${style['postHeader']} pt-8 pb-4`}>
                <div className="left inline">
                    <div className="text-2xl font-bold">文章</div>
                </div>
                <div className="right inline">
                    <Image className="article-avatar" src="https://imgur.lzmun.com/picgo/after2022/tripper2whitefull.png_avatar"
                        width={32} height={32}
                        alt="logo" automatically="true" provided="true"
                    />
                </div>
            </div>
            <hr />
            <ul>
                {postData.map((blog) => (
                    <div className={`${style['postEntry']} pt-6 pb-6`} key={blog.id}>
                        <Link href={`/post/${blog.id}`}>{blog.id}</Link>
                        <div>{blog.properties.Title.title[0].plain_text}</div>
                        <p>{blog.properties.Date.date.start}</p>
                        <p>{blog.properties.Category.select.name}</p>
                        <p>{blog.properties.Tags.multi_select.map((tag) => tag.name).join(', ')}</p>
                    </div>
                ))}
            </ul>
        </main>
    )
}

export default BlogPage