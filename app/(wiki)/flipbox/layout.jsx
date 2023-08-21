import Link from "next/link";
import style from '../wiki.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
const { Client } = require("@notionhq/client")

export default async function WikiPageLayout({ children }) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const databaseId = 'be7578485c594866b80a7f70ec072f01'; //Wiki Database ID
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });

  const notionData = response.properties.Tags

  return (
    <div className="container dark:bg-zinc-900">
      <div className="pt-[125px] pb-[65px] text-2xl font-bold text-center">Tripper FlipBox</div>
      <div className="pb-8">
        {notionData.multi_select.options.map((tag) => (
          <Link key={tag.id} href={'/flipbox/?tags=' + tag.name} className="inline-block pr-2 opacity-60 text-sm">
            {tag.name}
          </Link>
        ))}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}