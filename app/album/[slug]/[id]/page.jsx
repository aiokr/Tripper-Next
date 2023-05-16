import { allPhotos } from 'contentlayer/generated';
import Image from 'next/image.js';
import Link from 'next/link';
import style from '../album.module.css'

export async function fetchPhoto(slug, id) { //通过 slug 查找相册，通过 id 查找单张图片，同一个目录不能嵌套两个同名的动态路由
  const album = allPhotos.find((photos) => photos.url == slug)
  const photo = album.photos[id]
  return photo
}

export async function albumPhoto(props) {
  const photo = await fetchPhoto(props.params.slug, props.params.id)
  return (
    <section className='pb-6'>
      <Image src={photo} width={1500} height={1000} alt={props.params.slug} className='object-cover object-center w-full aspect-[4/3] rounded' unoptimized />
    </section>
  )
}

export default albumPhoto