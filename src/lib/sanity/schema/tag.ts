import { defineType } from 'sanity'

export type Tag = {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  publishedAt: string
  article_count?: number
  attributes: Array<{
    name: string
    value: string
  }>
}

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  // icon: ScriptIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'attributes',
      title: 'Attributes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string'
            }
            // 可根据需要添加更多属性字段
          ]
        }
      ]
    }
  ]
})
