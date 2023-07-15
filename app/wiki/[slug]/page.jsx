import Link from "next/link";
import style from '../wiki.module.css'
import { compareDesc, format, parseISO } from 'date-fns'
const { Client } = require("@notionhq/client")
import { NotionRenderer } from '@notion-render/client';
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";


export default async function WikiPage(props) {
  const client = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const pageId = props.params.slug; //Wiki Page ID

  const blocks = await client.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results, BlockObjectResponse);

  const renderer = new NotionRenderer();
  const html = await renderer.render(...blocks);

  return (
    <div className="py-[120px] flex justify-center">
      <div className='container pt-8 px-6 lg:px-8 max-w-[800px] article' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}