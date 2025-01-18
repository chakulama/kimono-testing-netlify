// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-swiper", "nuxt-gtag"],
  gtag: process.env.NODE_ENV === 'production' ? {
    id: 'G-987B67WF31', // Replace with your Google Analytics ID
    config: {
      send_page_view: true, // Automatically track page views
    },
  } : undefined,
  compatibilityDate: "2024-11-18",
  app: 
    process.env.NODE_ENV === 'production' ? {
      buildAssetsDir: 'assets'
    } : undefined
})