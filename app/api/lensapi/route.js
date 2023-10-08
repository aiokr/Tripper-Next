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
const LensData = await Promise.all(notionData.map(async (item) => {
      const name = item.properties.Name.title[0] ? item.properties.Name.title[0].plain_text : null
      const prefix = item.properties.ID.unique_id.prefix + '-' + item.properties.ID.unique_id.number
      const image = item.properties.Image.files[0].type === 'file' ? item.properties.Image.files[0].file.url : item.properties.Image.files[0].external.url
      const expiry_time = item.properties.Image.files[0].type === 'file' ? item.properties.Image.files[0].file.expiry_time : null
      const camera = item.properties.Camera.select ? item.properties.Camera.select.name : null
      const lens = item.properties.Lens.select ? item.properties.Lens.select.name : null
      const coordinate = item.properties.Location.rich_text[0] ? item.properties.Location.rich_text[0].plain_text : null
      const locationResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/geo2name/${coordinate}`);
      const locationData = await locationResponse.json();
      const location = locationData.country === '中国' ? locationData.province + ' · ' + locationData.city : locationData.country + ' · ' + locationData.province
      return {
        'no': prefix,
        'id': item.id,
        'name': name,
        'image': image,
        'expiry_time': expiry_time,
        'coordinate': coordinate,
        'location': location,
        'camera': camera,
        'lens': lens,
        'date': item.properties.Date.date.start,
      };
    }));
    const newLensJson = JSON.stringify(LensData);

    // 创建一个新的 Response 对象
    const response = new Response(newLensJson, {
      headers: {
        'Cache-Control': 'public, max-age=10', // 缓存 10 秒
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