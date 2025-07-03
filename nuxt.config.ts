export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Enable static site generation
  ssr: false,
  
  // GitHub Pages configuration
  app: {
    baseURL: '/my-nuxt3-portfolio/',
    buildAssetsDir: 'assets/'
  },
  
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})