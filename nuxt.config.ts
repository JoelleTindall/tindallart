// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', "nuxt-swiper"],
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
        "TindallArt: fine art by two fine artists",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
     
    },
   
  }
})