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
        category: {
            type: 'string',
            description: 'The category of the post',
        },
        tags: {
            type: 'string',
            description: 'The tags of the post',
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