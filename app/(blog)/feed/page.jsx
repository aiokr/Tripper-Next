import { Feed } from "feed";
import { allPosts } from 'contentlayer/generated'
import { writeFileSync } from 'fs';

export default async function generateRSS() {

  const feed = new Feed({
    title: "瞬间 Press",
    description: "拿起相机 认真思考",
    id: "https://tripper.press/",
    link: "https://tripper.press/",
    language: "zh-CN",
    feedLinks: {
      RSS2: "https://tripper.press/rss.xml",
    },
    copyright: `Copyright © 2016 - ${new Date().getFullYear()} aiokr`,
    author: {
      name: "aiokr",
      link: "https://tripper.press/",
    },
  });

  feed.items = []

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      link: `https://tripper.press/post/${post.url}`,
      date: new Date(post.date),
      author: post.author,
      content: post.body.html,
    });
  });

  writeFileSync('./public/feed.xml', feed.rss2());
  writeFileSync('./public/atom.xml', feed.atom1());
  writeFileSync('./public/feed.json', feed.json1());
}