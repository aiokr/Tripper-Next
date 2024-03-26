// ./sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { googleMapsInput } from "@sanity/google-maps-input";
import { visionTool } from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

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
    visionTool(),
    media(),
    googleMapsInput({
      apiKey: googleMapsApiKey,
    })
  ],
  schema: {
    types: schemaTypes,
  },
})



export const getSanityImageConfig = () => ({
  projectId,
  dataset,
  apiVersion: '2023-05-03',
  useCdn: true,
})