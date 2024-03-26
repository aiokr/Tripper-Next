import { de } from 'date-fns/locale'
import { defineField, defineType } from 'sanity'
import { z } from 'zod'

export const Camera = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
})

export type Camera = z.infer<typeof Camera>

export default defineType(
  {
    name: 'camera',
    title: '相机',
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
        name: 'swapLans',
        title: '可换镜头',
        type: 'boolean',
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