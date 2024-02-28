import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
   {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Code', value: 'code' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        },
        {
          name: 'label',
          type: 'string',
          title: 'Label'
        }
      ]
    },
    // defineArrayMember({
    //   type: 'object',
    //   name: 'tweet',
    //   title: 'Tweet',
    //   fields: [
    //     {
    //       name: 'id',
    //       type: 'string',
    //       title: 'Tweet ID',
    //     },
    //   ],
    //   components: {
    //     preview: Tweet as any,
    //   },
    //   preview: {
    //     select: {
    //       id: 'id',
    //     },
    //   },
    // }),
    defineArrayMember({
      type: 'code',
      name: 'codeBlock',
      title: 'Code Block',
      options: {
        withFilename: true
      }
    })
  ]
})
