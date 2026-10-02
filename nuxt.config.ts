const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const siteName = 'Doug Martins'
const siteTitle = 'Doug Martins | Full-Stack Developer'
const siteDescription = 'Mid-level Full-Stack Developer building scalable digital products with Laravel, PHP, and Vue 3.'
const shareImage = `${siteUrl}/images/hero-bg.webp`
const shareImageAlt = 'Abstract background of the Doug Martins portfolio'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
  typescript: {
    strict: true,
  },
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: siteTitle,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: siteDescription },
        { name: 'author', content: siteName },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: 'en' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: shareImage },
        { property: 'og:image:alt', content: shareImageAlt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: shareImage },
        { name: 'twitter:image:alt', content: shareImageAlt },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://api.fontshare.com' },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            url: siteUrl,
            description: siteDescription,
            inLanguage: 'en',
          }),
        },
      ],
      style: [
        {
          children: `
           html{scroll-behavior:smooth;}
            body {
              font-family: 'DM Sans', sans-serif;
              margin: 0 !important;
              box-sizing: border-box !important;
              background: #0e0f0f;
              color: #ffffff;
            }
            h1,h2,h3,h4 {
              color: var(--h-color);
            }`
        },
      ],
    },
  },
  compatibilityDate: '2025-02-03',
  modules: ['@nuxt/ui', '@nuxt/image', '@vueuse/motion/nuxt'],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    provider: 'ipx',
    presets: {
      custom: {
        modifiers: {
          format: 'webp',
          quality: '80',
          fit: 'cover'
        }
      }
    },
    ipx: {
      maxAge: 31536000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
      sharp: {
        failOnError: false
      }
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      reportCompressedSize: true,
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    routeRules: {
      '/_ipx/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/_nuxt/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      ...(process.env.NODE_ENV === 'production' ? { '/': { swr: 3600 } } : {}),
    },
  },
  postcss: {
    plugins: {
      cssnano: process.env.NODE_ENV === 'production' ? { preset: 'default' } : false,
    },
  },
});