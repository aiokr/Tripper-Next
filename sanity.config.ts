// ./sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from
  auth: {
    redirectOnSingle: false,
    mode: 'replace',
    providers: [
      {
        name: 'github',
        title: 'GitHub',
        url: 'https://api.sanity.io/v1/auth/login/github'
      },
    ],
    loginMethod: 'dual',
  },
  projectId,
  dataset,
  plugins: [
    deskTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})