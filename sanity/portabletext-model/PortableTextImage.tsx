import { type PortableTextComponentProps } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'

export function PortableTextImage({
  value,
}: PortableTextComponentProps<{
  _key: string
  url: string
  dimensions: {
    width: number
    height: number
  }
  lqip?: string
  label?: string
  alt?: string
}>) {
  return (
    <div data-blockid={value._key} className="group relative pr-3 md:pr-0">
      <Image
        src={value.url}
        width={value.dimensions.width}
        height={value.dimensions.height}
        placeholder={value.lqip ? 'blur' : 'empty'}
        blurDataURL={value.lqip}
        className="mx-auto h-full overflow-hidden object-contain"
        alt={value.alt || ''}
        unoptimized
      />
    </div>
  )
}