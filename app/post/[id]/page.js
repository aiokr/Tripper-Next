async function fetchPostData(id) {
  const postUrl = 'https://api.notion.com/v1/blocks/' + id + '/children'
  const authorization = 'Bearer ' + process.env.NOTION_SECRET
  const NotionVersion = process.env.NOTION_V
  const options = {
    next: { revalidate: 10 },
    method: 'GET',
    headers: {
      'Accept': 'application/json', 'Content-Type': 'application/json',
      'Notion-Version': NotionVersion,
      'Authorization': authorization
    },
  };
  const res = await fetch(postUrl, options);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function PostPage(props) {
  const id = props.params.id // 获取 URL 中的 id
  console.log(id)
  const data = await fetchPostData(id);
  console.log(data)
}