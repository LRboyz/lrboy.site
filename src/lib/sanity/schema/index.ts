import { SchemaTypeDefinition } from 'sanity'
import post from './post'
import blockContent from './blockContent'
import { readingTimeType } from '../components/ReadingTimeInput'
import tag from './tag'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, readingTimeType, tag, category]
}
