import { client } from '@/lib/sanity/client'
import { Post, PostDetail } from '@/lib/sanity/schema/post'
import { groq } from 'next-sanity'

export type PostQueryParams = {
  offset?: number
  limit?: number
  category?: string
  id?: string
}

export async function getPosts({ offset = 0, limit = 20 }: PostQueryParams) {
  return client.fetch<Post[]>(
    groq`
      *[_type == "post"][$offset...$limit] | order(publishedAt asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "categories": categories[]->{
        _id,
        title,
        slug
      },
      publishedAt,
      readingTime,
      mainImage {
        _ref,
        asset->{
          url,
          "lqip":metadata.lqip,
          "dominant":metadata.palette.dominant
        }
      },
    }
    `,
    { offset, limit }
  )
}

export async function getPostsByCategorySlug({ category, offset = 0, limit = 20 }: PostQueryParams) {
  return client.fetch<Post[]>(
    groq`
      *[_type == "post" && $category in categories[]->slug.current][$offset...$limit] | order(publishedAt asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "categories": categories[]->{
        _id,
        title,
        slug
      },
      publishedAt,
      readingTime,
      mainImage {
        _ref,
        asset->{
          url,
          "lqip":metadata.lqip,
          "dominant":metadata.palette.dominant
        }
      },
    }
    `,
    { category, offset, limit }
  )
}

export async function getPostsCount() {
  return client.fetch<number>(groq`count(*[_type == "post"])`)
}

export async function getPostById(id: string) {
  return client.fetch<PostDetail>(
    groq`*[_type == "post" && _id == $id] {
    ...,
    mainImage {
        _ref,
        asset->{
          url,
          "lqip":metadata.lqip,
          "dominant":metadata.palette.dominant
        }
      },
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
  }[0]`,
    {
      id
    }
  )
}
