'use server'

import Link from "next/link";
import { compareDesc, format, parseISO } from 'date-fns'
const { Client } = require("@notionhq/client")
import { NotionRenderer } from '@notion-render/client';

export default async function FlipboxPage(searchParams) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const databaseId = 'be7578485c594866b80a7f70ec072f01'; //Wiki Database ID
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 40,
    sorts: [
      {
        timestamp: 'last_edited_time',
        direction: 'descending',
      },
    ]
  });
  
  const notionData = response.results

  return (
    <div className="pb-[65px] grid grid-cols-6 gap-2 justify-center">
      {notionData.map((item) => (
        <Link key={item.id} href={'/term/' + item.id} className="inline-block px-2 py-3 border">
          <div>{item.properties.Page.title[0].plain_text}</div>
          {item.properties.Tags.multi_select.map((tag) => (
            <div key={tag.id} className="inline-block pr-2 opacity-60 text-sm">
              {tag.name}
            </div>
          ))}
        </Link>
      ))}
    </div>
  )
}