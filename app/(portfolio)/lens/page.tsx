import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from 'date-fns'
import { getLatestPhoto } from '~/sanity/queries'
import style from './lens.module.css'
import { SunIcon, IsoIcon, ApertureIcon } from '~/app/components/Icons'
import { Fraction } from 'fractional';

function formatExposureTime(exposureTime: number) {
  if (exposureTime > 0 && exposureTime < 1) {
    const fraction = new Fraction(exposureTime);
    return `1/${fraction.denominator}`;
  } else if (exposureTime >= 1) {
    // 如果 exposureTime 是整数，则直接返回
    return exposureTime.toString();
  }
}

export default async function Lens() {
  const AllPhotos = await getLatestPhoto({ start: 0, end: 20, forDisplay: true })
  // console.log(AllPhotos)
  return (
    <main className='dark:bg-zinc-900'>
      <div className="container py-24 flex flex-col">
        {AllPhotos.map((photo: any) => (
          <section key={photo._id} className="mb-16 max-h-full">
            <div className={`lg:max-w-[80%] mx-auto mb-4  max-h-full`}>
              <Image className={`mx-auto shadow-2xl w-fit max-h-[80vh] object-contain`}
                alt={photo.title} src={photo.url} width={photo.width} height={photo.height} placeholder="blur" blurDataURL={photo.lqip} loading="lazy" unoptimized />
            </div>
            <div className='flex flex-row justify-center h-20 p-4 gap-8 font-light text-sm'>
              {photo.takenAt ? (
                <div className="flex flex-col items-center justify-center">
                  <div className='text-xs'>拍摄时间</div>
                  <div className='flex align-center gap-1'>
                    {format(parseISO(photo.takenAt), 'yyyy 年 MM 月 dd 日')}
                  </div>
                </div>
              ) : null}
              {photo.ExposureTime || photo.eExposureTime || photo.FNumber || photo.eFNumber || photo.ISO || photo.eISO ? (
                <div className="flex flex-col items-center justify-center">
                  <div className='text-xs'>参数</div>
                  <div className='flex align-center gap-1'>
                    {photo.ExposureTime || photo.eExposureTime ? (
                      <><SunIcon />{formatExposureTime(photo.ExposureTime || photo.eExposureTime)} &nbsp;</>
                    ) : null}
                    {photo.FNumber || photo.eFNumber ? (
                      <><ApertureIcon />F/{photo.FNumber || photo.eFNumber} &nbsp;</>
                    ) : null}
                    {photo.ISO || photo.eISO ? (
                      <><IsoIcon />ISO&nbsp;{photo.ISO || photo.eISO}</>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {photo.eCamera || photo.Camera ? (
                <div className="flex flex-col items-center justify-center">
                  <div className='text-xs'>相机</div>
                  <div className='flex align-center gap-1'>
                    {photo.eCamera || photo.Camera || '-'}
                  </div>
                </div>
              ) : null}
              {photo.eLensModel || photo.LensModel ? (
                <div className="flex flex-col items-center justify-center">
                  <div className='text-xs'>镜头</div>
                  <div className='flex align-center gap-1'>
                    {photo.eLensModel || photo.LensModel || '-'}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}