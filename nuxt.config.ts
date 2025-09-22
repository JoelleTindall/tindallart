// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-09-22',
  devtools: { enabled: false },
  modules: ['@nuxt/image'],
  css: ['~/assets/css/main.css'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
    assetsInclude: ["**/*.heic"]
  },
    app: {
    head: {
      title:
        "TindallArt: Fine Art by Two Fine Artists",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
     
    },
   
  }
})