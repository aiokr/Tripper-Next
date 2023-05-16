
import { allPhotos } from 'contentlayer/generated';
import Image from 'next/image.js';

export function fetchAlbum(props) {
  const album = allPhotos.find((photos) => photos.url == props.params.slug)
  const photos = album.photos
  const title = album.title + ' - Tripper Press'
  return { photos, album }
}

export async function albumPage(props) {
  const { photos, album } = fetchAlbum(props);
  return (
    <main className='bg-zinc-900 text-white pt-[65px] p-6'>
      {props.params.slug}
      {album.title}
      {photos && photos.map((photos) => (
        <div key={photos}>
            <Image src={photos} width={600} height={600} />
        </div>
      ))}
    </main>
  )
}

export default albumPage