import { groq } from 'next-sanity'
import { getDate } from './date'
import { client } from './client'
import { type Post, type PostDetail } from './schemas/post'

export const getAllLatestBlogPostSlugsQuery = () =>
  groq`
  *[_type == "post" && !(_id in path("drafts.**"))
  && publishedAt <="${getDate().toISOString()}"
  && defined(slug.current)] | order(publishedAt desc).slug.current
  `

export const getAllLatestBlogPostSlugs = () => {
  return client.fetch<string[]>(getAllLatestBlogPostSlugsQuery())
}

type GetBlogPostsOptions = {
  limit?: number
  offset?: number
  forDisplay?: boolean
}

export const getLatestBlogPostsQuery = ({
  limit = 1,
  forDisplay = true,
}: GetBlogPostsOptions) =>
  groq`
  *[_type == "post" && publishedAt <= "${getDate().toISOString()}"
  && defined(slug)] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    mainImage {
      _ref,
      asset->{
        url,
        ${forDisplay
      ? '"lqip": metadata.lqip, "dominant": metadata.palette.dominant,'
      : ''
    }
      }
    }
  }`
export const getLatestBlogPosts = (options: GetBlogPostsOptions) =>
  client.fetch<Post[] | null>(getLatestBlogPostsQuery(options))

