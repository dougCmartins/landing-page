<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="content-width header-inner">
      <a href="#top" :aria-label="copy.nav.backToTop">
        <img class="brand-image" src="/images/nuxt-logo.webp" width="155" height="35" alt="DCMARTINS.CO">
      </a>
      <div class="header-tools">
        <nav class="site-nav" :aria-label="copy.nav.main">
          <a href="#about">{{ copy.nav.about }}</a>
          <a :href="contact.github" target="_blank" rel="noreferrer">{{ copy.nav.projects }}</a>
          <a :href="`mailto:${contact.email}`">{{ copy.nav.contact }}</a>
        </nav>
        <div ref="languageRoot" class="language-switch">
          <button
            type="button"
            class="language-trigger"
            :aria-label="copy.nav.language"
            :title="copy.nav.language"
            aria-haspopup="listbox"
            :aria-expanded="open"
            @click="open = !open"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          <ul v-show="open" class="language-menu" role="listbox" :aria-label="copy.nav.language">
            <li v-for="code in locales" :key="code">
              <button
                type="button"
                role="option"
                :aria-selected="locale === code"
                :class="{ 'is-selected': locale === code }"
                @click="choose(code)"
              >
                {{ portfolioLocaleLabels[code] }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { contact } from '~/utils/portfolio'
import { portfolioLocaleLabels, type PortfolioLocale } from '~/utils/portfolio-copy'

const { copy, locale, locales, setLocale } = usePortfolioLocale()
const scrolled = ref(false)
const open = ref(false)
const languageRoot = ref<HTMLElement | null>(null)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function choose(code: PortfolioLocale) {
  setLocale(code)
  open.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (!languageRoot.value?.contains(event.target as Node)) {
    open.value = false
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    open.value = false
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 30;
  height: 84px;
  transition: background 200ms;
  animation: fade-in 400ms both;
}

.site-header.is-scrolled {
  background: color-mix(in oklch, var(--background) 95%, transparent);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.brand-image {
  display: block;
  width: 155px;
  height: 35px;
  object-fit: contain;
}

.header-tools {
  display: flex;
  align-items: center;
  gap: 28px;
  min-width: 0;
}

.site-nav {
  display: flex;
  gap: 34px;
  font-size: 14px;
  line-height: 24px;
}

.site-nav a {
  color: var(--p-color);
  transition: color 200ms;
}

.site-nav a:hover {
  color: var(--foreground);
}

.site-nav a:last-child {
  color: var(--foreground);
}

.site-nav a:focus-visible,
.site-header a:focus-visible,
.language-trigger:focus-visible,
.language-menu button:focus-visible {
  outline: 1px solid var(--body-ink);
  outline-offset: 3px;
}

.language-switch {
  position: relative;
}

.language-trigger {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: transparent;
  color: var(--foreground);
  cursor: pointer;
}

.language-trigger svg {
  width: 18px;
  height: 18px;
}

.language-trigger:hover,
.language-menu button:hover {
  background: var(--card);
}

.language-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 2;
  margin: 0;
  padding: 6px;
  list-style: none;
  min-width: 112px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--card);
  box-shadow: var(--shadow-card);
}

.language-menu button {
  width: 100%;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--p-color);
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
}

.language-menu button.is-selected {
  color: var(--foreground);
}

@media (max-width: 639px) {
  .site-header {
    height: 100px;
  }

  .header-inner {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }

  .brand-image {
    width: 142px;
    height: 29px;
  }

  .header-tools {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }

  .site-nav {
    gap: 20px;
    font-size: 13px;
  }
}
</style>
