const { Client } = require("@notionhq/client")

export async function GET(request) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const databaseId = '6b35ba718f404e01a687a3043c9dd8bf';
    const notionRes = await notion.databases.query({
      database_id: databaseId,
      page_size: 120,
      sorts: [
        {
          "property": "Date",
          "direction": "descending"
        }
      ],
      "filter": {
        "and": [
        {
            "property": "Image",
            "files": {
              "is_not_empty": true
            }
          },
          {
            "property": "Location",
            "rich_text": {
              "is_not_empty": true
            }
          },
        ]
      },
    });

    // 将 Notion 客户端的响应结果重新命名为 notionData
    const notionData = notionRes.results;

    // 处理数据
    const LensData = notionData.map((item) => {
      const name = item.properties.Name.title[0] ? item.properties.Name.title[0].plain_text : null
      const prefix = item.properties.ID.unique_id.prefix + '-' + item.properties.ID.unique_id.number
      const image = item.properties.Image.files[0].type === 'file' ? item.properties.Image.files[0].file.url : item.properties.Image.files[0].external.url
      const expiry_time = item.properties.Image.files[0].type === 'file' ? item.properties.Image.files[0].file.expiry_time : null
      return {
        'no': prefix,
        'id': item.id,
        'name': name,
        'image': image,
        'expiry_time': expiry_time,
        'location': item.properties.Location.rich_text[0].plain_text,
        'date': item.properties.Date.date.start,
      };
    });
    const newLensJson = JSON.stringify(LensData);

    // 创建一个新的 Response 对象
    const response = new Response(newLensJson, {
      headers: {
        'Cache-Control': 'public, max-age=600', // 缓存10分钟
      },
    });

    // 返回 Response 对象
    return response;
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}