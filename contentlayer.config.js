import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        author: {
            type: 'string',
            description: 'The author of the post',
            default: 'aiokr'
        },
        category: {
            type: 'string',
            description: 'The category of the post',
            default: '未分类'
        },
        tags: {
            type: 'list',
            of: { type: 'string' }
        },
        excerpt: {
            type: 'string',
            description: 'The excerpt of the post',
        },
        cover: {
            type: 'string',
            description: 'The cover of the post',
        },
        url: {
            type: 'string',
            description: 'The url of the post',
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `${post.url}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
})