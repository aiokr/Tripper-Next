import { Client } from "@notionhq/client";
   
export default async (req, res) => {
  const notion = new Client({ auth: process.env.NOTION_SECRET });
  const page_url = req.body.page_url;
  const page_id = page_url.split("-").pop();

  const response = await notion.pages.retrieve({ page_id });

  res.json({ id: response.id });
};