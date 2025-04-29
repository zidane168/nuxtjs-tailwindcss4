import { resolvePath } from "nuxt/kit";

// import { resolve } from 'path';

import tailwindcss from "@tailwindcss/vite"  

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
 
  // alias: {
  //   "@": resolvePath(__dirname, "/"),
  // },

  css: [
    "~/assets/css/main.css",
    "@/assets/css/tailwind.css", // Path to your Tailwind CSS file 
  ],

  // router: {
  //   // disable Nuxt pages

  //   pages: false,
  // },
 
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
   // '@nuxt/ui' 
  ], 
  vite:  {
    plugins: [
      tailwindcss(),
    ],  
  } 
})