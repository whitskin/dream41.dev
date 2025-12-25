// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@vueuse/motion/nuxt'
  ],

  // Sitenin canlıdaki adresi (Burası önemli, yoksa resim çıkmaz)
  site: {
    url: 'https://dream41.dev', 
    name: 'Dream41 Portfolio',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'dream-theme-stable'
  },

  app: {
    head: {
      title: 'Dream41 | Full-Stack Developer Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional Portfolio' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  },

ogImage: {
    // Satori motorunu kullanmasını zorluyoruz (En stabili bu)
    defaults: {
      renderer: 'satori',
    },
    // Google Fontlarını otomatik indirmesini sağla
    fonts: [
      'Inter:400', 
      'Inter:700',
      'Inter:900'
    ]
  },
  devtools: { enabled: true }
})