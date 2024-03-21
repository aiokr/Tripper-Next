'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import React from 'react'
import Link from 'next/link'

import {
  PortableTextBlocksBlockquote,
  PortableTextBlocksH1,
  PortableTextBlocksH2,
  PortableTextBlocksH3,
  PortableTextBlocksH4,
  PortableTextBlocksListItem,
  PortableTextBlocksNormal,
} from '~/sanity/portabletext-model/PortableTextBlocks'
import { PortableTextCodeBlock } from '~/sanity/portabletext-model/PortableTextCodeBlock'
import { PortableTextImage } from '~/sanity/portabletext-model/PortableTextImage'

const components: PortableTextComponents = {
  block: {
    normal: PortableTextBlocksNormal,
    h1: PortableTextBlocksH1,
    h2: PortableTextBlocksH2,
    h3: PortableTextBlocksH3,
    h4: PortableTextBlocksH4,
    blockquote: PortableTextBlocksBlockquote,
  },
  listItem: PortableTextBlocksListItem,
  types: {
    image: PortableTextImage,
    codeBlock: PortableTextCodeBlock,
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      )
    },
  },
}

export function PostPortableText(props: {
  value: any
  components?: PortableTextComponents
}) {
  return (
    <PortableText
      value={props.value}
      components={props.components ?? components}
    />
  )
}