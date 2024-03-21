import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import category from './category'
import photo from './photo'

export const schemaTypes = [post, category, photo, blockContent]