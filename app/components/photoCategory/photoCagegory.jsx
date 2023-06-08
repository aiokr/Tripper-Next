import style from './photoCategory.module.css'
import { compareDesc} from 'date-fns'
import Link from 'next/link';
import { allPhotos } from 'contentlayer/generated';

async function fetchPhoto() {
  const album = allPhotos
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 10)
  const categories = Array.from(new Set(album.map(album => album.category)))
  return { categories }
}

export default async function PhotoCategoryLink() { // 必须以大写开头
  const { categories } = await fetchPhoto()
  return (
    <>
      <Link href={`/photo`} key='all' className={`${style.photoCategory}`}>全部</Link>
      {categories.map(category => (
        <Link href={`/photo/category/${category}`} key={category} className={`${style.photoCategory}`}>{category}</Link>
      ))}
    </>
  )
}