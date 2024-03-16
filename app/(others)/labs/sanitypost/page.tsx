import { getAllLatestBlogPostSlugs } from '~/sanity/queries';

export default async function PostList() {
  const posts = await getAllLatestBlogPostSlugs() || []
  console.log(posts)
  return (
    <main className='pt-24 dark:bg-zinc-900'>
      {posts}
    </main>
  );
}