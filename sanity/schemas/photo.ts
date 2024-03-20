import { defineField, defineType } from 'sanity'

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
        validation: (Rule) => Rule.required(),
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
        name: 'location',
        title: '拍摄地点（无 exif 信息时读取）',
        type: 'geopoint',
        initialValue: () => ({ lng: 109.42, lat: 24.33 }),
      }),
    ],

    preview: {
      select: {
        title: 'title',
        author: 'slug',
        media: 'photo',
      },
    },
  })