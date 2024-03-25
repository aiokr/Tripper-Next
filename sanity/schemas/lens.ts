import { defineField, defineType } from 'sanity'
import { z } from 'zod'

export const Lens = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
})

export type Lens = z.infer<typeof Lens>

export default defineType(
  {
    name: 'lens',
    title: '镜头',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: '名称',
        type: 'string',
      }),
      defineField({
        name: 'brand',
        title: '品牌',
        type: 'string',
      }),
      defineField({
        name: 'model',
        title: '型号',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: '链接标识符',
        type: 'slug',
        options: {
          source: 'title',
        },
      }),
    ]
  }
)