<template>
  <div id="top" class="portfolio">
    <Header />
    <main>
      <div class="hero-stage">
        <img class="hero-background" src="/images/hero-bg.webp" alt="" fetchpriority="high">
        <HeroPortfolio />
      </div>
      <PortfolioSections />
    </main>
  </div>
</template>

<script setup lang="ts">
const { copy, locale } = usePortfolioLocale()
const siteUrl = useRuntimeConfig().public.siteUrl
const shareImage = `${siteUrl}/images/hero-bg.webp`

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: copy.value.meta.title,
  meta: [
    { key: 'description', name: 'description', content: copy.value.meta.description },
    { key: 'author', name: 'author', content: copy.value.hero.name },
    { key: 'og:site_name', property: 'og:site_name', content: copy.value.hero.name },
    { key: 'og:locale', property: 'og:locale', content: copy.value.meta.openGraphLocale },
    { key: 'og:title', property: 'og:title', content: copy.value.meta.title },
    { key: 'og:description', property: 'og:description', content: copy.value.meta.description },
    { key: 'og:image:alt', property: 'og:image:alt', content: copy.value.meta.shareImageAlt },
    { key: 'twitter:title', name: 'twitter:title', content: copy.value.meta.title },
    { key: 'twitter:description', name: 'twitter:description', content: copy.value.meta.description },
    { key: 'twitter:image:alt', name: 'twitter:image:alt', content: copy.value.meta.shareImageAlt },
  ],
  script: [
    {
      key: 'website-ld',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: copy.value.hero.name,
        url: siteUrl,
        description: copy.value.meta.description,
        inLanguage: locale.value,
      }),
    },
  ],
  link: [
    { key: 'canonical', rel: 'canonical', href: siteUrl },
  ],
}))

useHead({
  meta: [
    { property: 'og:image', content: shareImage },
    { name: 'twitter:image', content: shareImage },
  ],
})
</script>
