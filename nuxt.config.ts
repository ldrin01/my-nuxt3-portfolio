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
    baseURL: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
    buildAssetsDir: 'assets/'
  },
  
  // Enable static site generation
  ssr: false,
  target: 'static'
})