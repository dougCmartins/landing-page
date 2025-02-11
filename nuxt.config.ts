export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  devtools: { enabled: false },
  alias: { css: '/<rootDir>/assets/css' },
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: 'Example site',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { name: 'description', content: 'Soluções em desenvolvimento web e design para o seu negócio.' },
        { name: 'keywords', content: 'desenvolvimento web, design, soluscon, nuxt, tailwind' },
        { name: 'author', content: 'Soluscon Codes' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Soluscon Codes' },
        { property: 'og:description', content: 'Soluções em desenvolvimento web e design para o seu negócio.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        { property: 'og:image', content: 'https://i.ibb.co/zVKCBgdr/iphone.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Soluscon Codes' },
        { name: 'twitter:description', content: 'Soluções em desenvolvimento web e design para o seu negócio.' },
        { name: 'twitter:image', content: 'https://i.ibb.co/zVKCBgdr/iphone.webp' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700',
          media: 'print',
          onload: "this.media='all'"
        }
      ],
      style: [
        {
          children: `
           html{scroll-behavior:smooth;}
            body {
              font-family: 'Inter', sans-serif !important;
              margin: 0 auto !important;
              max-width: 1440px !important;
              box-sizing: border-box !important;
            }
            @media (max-width: 768px) {
              body {
                max-width: 100% !important;
              }
            }
            h1,h2,h3,h4 {
              color: var(--h-color) !important;
              font-weight: 800 !important;
            }`
        },
      ],
    },
  },
  compatibilityDate: '2025-02-03',
  modules: ['@nuxt/ui', '@nuxt/image'],
  image: {
    domains: ['i.ibb.co'],
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
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      brotliSize: true,
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
      routeRules: process.env.NODE_ENV === 'production'
      ? {
          '/': { static: true, cache: { swr: true, maxAge: 3600 } },
          '/_ipx/**': {
            headers: {
              'Cache-Control': 'public, max-age=31536000, immutable',
              'X-Cache-Status': 'HIT'
            },
            cache: { swr: true, maxAge: 31536000 }
          },
          '/_nuxt/**': {
            headers: {
              'Cache-Control': 'public, max-age=31536000, immutable'
            }
          }
        }
      : {
          '/': { cache: true },
          '/_ipx/**': { cache: true },
          '/_nuxt/**': { cache: true },
        }
  },
  postcss: {
    plugins: {
      cssnano: process.env.NODE_ENV === 'production' ? { preset: 'default' } : false,
    },
  },
  render: {
    resourceHints: false,
  },
});