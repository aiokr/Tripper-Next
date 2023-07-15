import Link from "next/link";
import style from './wiki.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
const { Client } = require("@notionhq/client")

export async function FetchNotionDb() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const databaseId = 'be7578485c594866b80a7f70ec072f01'; //Wiki Database ID
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 20,
  });
  const notionData = response.results
  return (notionData)
}

export default async function WikiPage() {
  const notionData = await FetchNotionDb()
  return (
    <>
      <div className="py-[120px] flex justify-center">
        {notionData.map((item) => (
          <div key={item.id} className="inline-block px-4 ">
            <Link href={'/wiki/' + item.id}>{item.properties.Page.title[0].plain_text}</Link>
          </div>
        ))}
      </div>
    </>
  )
}