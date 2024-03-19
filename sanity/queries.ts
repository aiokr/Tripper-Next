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
  start?: number
  end?: number
  offset?: number
  forDisplay?: boolean
}

export const getLatestBlogPostsQuery = ({
  start = 0,
  end = 4,
  forDisplay = true,
}: GetBlogPostsOptions) =>
  groq`
  *[_type == "post" && !(_id in path("drafts.**")) && publishedAt <= "${getDate().toISOString()}"
  && defined(slug.current)] | order(publishedAt desc)[${start}..${end}] {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    description,
    publishedAt,
    cover {
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

export const getBlogPostQuery = groq`
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    description,
    publishedAt,
    body[] {
      ...,
      _type == "image" => {
        "url": asset->url,
        "lqip": asset->metadata.lqip,
        "dimensions": asset->metadata.dimensions,
        ...
      }
    },
    "headings": body[length(style) == 2 && string::startsWith(style, "h")],
    cover {
      _ref,
      asset->{
        url,
        "lqip": metadata.lqip
      }
    },
    "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..2] {
      _id,
      title,
      "slug": slug.current,
      "categories": categories[]->title,
      publishedAt,
      readingTime,
      cover {
        _ref,
        asset->{
          url,
          "lqip": metadata.lqip,
          "dominant": metadata.palette.dominant
        }
      },
    }
  }`
export const getBlogPost = (slug: string) =>
  client.fetch<PostDetail | undefined, { slug: string }>(getBlogPostQuery, {
    slug,
  })

export const getAllCategoriesQuery = ({ }: {}) =>
  groq`
  *[_type == "category"]{
    title,
    "slug": slug.current,
  }
  `

export const getAllCategories = () =>
  client.fetch<string[]>(getAllCategoriesQuery({}))

export const getPostByCategoryQuery = (categorySlug) =>
  groq`*[_type == "post"  && !(_id in path("drafts.**")) && publishedAt <= "${getDate().toISOString()}"
   && defined(slug.current) ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug.current,
    publishedAt,
  }`

export const getPostByCategory = (categorySlug) =>
  client.fetch<Post[] | null>(getPostByCategoryQuery(categorySlug))