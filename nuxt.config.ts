export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // GitHub Pages configuration
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
  // Set base URL for GitHub Pages (replace 'your-repo-name' with actual repo name)
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/my-nuxt3-portfolio/' : '/',
    buildAssetsDir: 'assets/'
  },
  
  // Enable static site generation
  ssr: false,
  target: 'static'
})