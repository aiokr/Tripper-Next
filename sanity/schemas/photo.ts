import { defineField, defineType } from 'sanity'
import { z } from 'zod'

export const Photo = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  photo: z.object({
    _ref: z.string(),
    asset: z.object({
      url: z.string(),
      lqip: z.string().optional(),
      dominant: z
        .object({
          background: z.string(),
          foreground: z.string(),
        })
        .optional(),
    }),
  }),
  alttext: z.string(),
  takenAt: z.string(),
})

export type Photo = z.infer<typeof Photo>

export default defineType(
  {
    title: '照片',
    name: 'photo',
    type: 'document',
    fields: [
      defineField({
        name: 'photo',
        title: '图片',
        type: 'image',
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
          metadata: ['exif', 'location', 'lqip', 'palette'],
        },
      }),
      defineField({
        name: 'title',
        title: '标题',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'alttext',
        title: '替换文本',
        type: 'string',
      }),
      defineField({
        name: 'takenAt',
        title: '拍摄时间',
        type: 'datetime',
      }),
      defineField({
        name: 'slug',
        title: '链接标识符',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'rate',
        title: '评级',
        type: 'number',
        options: {
          list: [
            { title: '1', value: 1 },
            { title: '2', value: 2 },
            { title: '3', value: 3 },
            { title: '4', value: 4 },
            { title: '5', value: 5 },
          ],
        }
      }),
      defineField({
        name: 'eExposureTime',
        title: '快门速度（无 exif 信息时读取）',
        type: 'number',
      }),
      defineField({
        name: 'eFNumber',
        title: '光圈值（无 exif 信息时读取）',
        type: 'number',
      }),
      defineField({
        name: 'eISO',
        title: 'ISO 值（无 exif 信息时读取）',
        type: 'number',
      }),
      defineField({
        name: 'location',
        title: '拍摄地点（无 exif 信息时读取）',
        type: 'geopoint',
        initialValue: () => ({ lng: 109.42, lat: 24.33 }),
      }),
      defineField({
        name: 'eCamera',
        title: '相机',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'camera' } }],
      }), defineField({
        name: 'eLens',
        title: '镜头',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'lens' } }],
      }),
    ],

    initialValue: () => ({
      takenAt: new Date().toISOString(),
    }),

    preview: {
      select: {
        title: 'title',
        author: 'slug',
        media: 'photo',
      },
    },
  })