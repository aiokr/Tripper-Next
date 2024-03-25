import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import category from './category'
import photo from './photo'
import camera from './camera'
import lens from './lens'

export const schemaTypes = [post, category, photo, camera, lens, blockContent]