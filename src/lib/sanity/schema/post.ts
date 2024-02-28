import { defineType } from 'sanity'
import { readingTimeType } from '../components/ReadingTimeInput'
// import { PenIcon } from 'lucide-react'

export type Post = {
  _id: string
  title: string
  slug: string
  mainImage: {
    _ref: string
    asset: {
      url: string
      lqip?: string
      dominant?: {
        background: string
        foreground: string
      }
    }
  }
  publishedAt: string
  description: string
  categories: Array<{ title: string; slug: { current: string } }>
  tags: string[]
  body: any
  readingTime: number
}

export type PostDetail = Post & {
  headings?: any[]
  related?: Post[]
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  // icon: PenIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'This image will be used for the preview (1200 x 675px)',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'readingTime',
      type: readingTimeType.name,
      options: {
        source: 'body'
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'slug',
      media: 'mainImage'
    }
  }
})
