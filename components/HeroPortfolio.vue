<template>
  <section class="hero content-width" aria-labelledby="hero-name">
    <div class="hero-grid">
      <div class="hero-copy">
        <div class="hero-status">
          <p class="availability-pill">
            <span class="status-dot" />
            {{ copy.hero.availability }}
          </p>
          <p class="hero-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {{ copy.hero.location }}
          </p>
        </div>
        <h1 id="hero-name">{{ copy.hero.name }}</h1>
        <p class="hero-role">{{ copy.hero.role }}</p>
        <p class="hero-summary">{{ copy.hero.summary }}</p>
        <div class="pills hero-stack">
          <span v-for="item in currentStack" :key="item" class="stack-pill">{{ item }}</span>
        </div>
        <div class="hero-actions">
          <a class="portfolio-button portfolio-button-primary" :href="contact.github" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            {{ copy.hero.viewProjects }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <a class="portfolio-button portfolio-button-outline" :href="`mailto:${contact.email}`">
            {{ copy.hero.contact }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <a class="portfolio-button portfolio-button-outline" href="/cv/Douglas_da_Cruz_Martins.pdf" download="Douglas_da_Cruz_Martins.pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            {{ copy.hero.downloadCv }}
          </a>
        </div>
        <div class="hero-social">
          <a :href="contact.linkedin" target="_blank" rel="noreferrer" :aria-label="copy.hero.linkedin" :title="copy.hero.linkedin">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a :href="`mailto:${contact.email}`" :aria-label="copy.hero.gmail" :title="copy.hero.gmail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a :href="contact.github" target="_blank" rel="noreferrer" :aria-label="copy.hero.github" :title="copy.hero.github">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
      </div>
      <img
        class="hero-portrait"
        src="/images/douglas-c-martins.jpg"
        width="824"
        height="1024"
        :alt="copy.hero.portraitAlt"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { contact, currentStack } from '~/utils/portfolio'

const { copy } = usePortfolioLocale()
</script>

<style scoped>
.hero {
  padding-top: 158px;
  padding-bottom: 62px;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: center;
  gap: 24px;
}

.hero-copy {
  grid-column: span 7;
  min-width: 0;
}

.hero-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 22px;
}

.availability-pill,
.hero-location {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: var(--p-color);
  font-size: 13px;
  line-height: 20px;
}

.availability-pill {
  border: 1px solid var(--border);
  border-radius: 500px;
  background: color-mix(in oklch, var(--card) 72%, transparent);
  padding: 6px 12px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--signal);
  flex-shrink: 0;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: 64px;
  line-height: 72px;
  font-weight: 500;
  margin: 22px 0 16px;
  animation: fade-up 600ms var(--ease-enter) both;
}

.hero-role {
  font-family: var(--font-display);
  font-size: 30px;
  line-height: 39px;
  font-weight: 400;
  max-width: 680px;
  margin: 0 0 18px;
  color: var(--p-color);
  animation: fade-up 600ms 80ms var(--ease-enter) both;
}

.hero-summary {
  font-size: 17px;
  line-height: 28px;
  color: var(--p-color);
  max-width: 620px;
  margin: 0;
  animation: fade-up 600ms 150ms var(--ease-enter) both;
}

.hero-stack {
  margin-top: 22px;
  max-width: 620px;
  animation: fade-up 600ms 220ms var(--ease-enter) both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
  animation: fade-up 600ms 300ms var(--ease-enter) both;
}

.hero-social {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
  animation: fade-up 600ms 360ms var(--ease-enter) both;
}

.hero-social a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--body-ink);
  transition: color 200ms, border-color 200ms, background 200ms;
}

.hero-social svg {
  width: 16px;
  height: 16px;
}

.hero-social a:hover {
  color: var(--foreground);
  border-color: var(--body-ink);
  background: var(--card);
}

.hero-social a:focus-visible {
  outline: 1px solid var(--body-ink);
  outline-offset: 3px;
}

.hero-portrait {
  grid-column: 9 / span 4;
  justify-self: center;
  width: min(100%, 320px);
  aspect-ratio: 1;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 18%;
  border: 1px solid var(--border);
  animation: fade-in 700ms 200ms both;
}

@media (min-width: 1600px) {
  .hero {
    padding-top: 178px;
    padding-bottom: 72px;
  }
}

@media (max-width: 1199px) {
  .hero-grid {
    gap: 18px;
  }

  .hero h1 {
    font-size: 56px;
    line-height: 64px;
  }

  .hero-role {
    font-size: 27px;
    line-height: 36px;
  }

  .hero-summary {
    font-size: 16px;
    line-height: 26px;
  }

  .hero-portrait {
    width: min(100%, 260px);
  }
}

@media (max-width: 1023px) {
  .hero {
    padding-top: 132px;
    padding-bottom: 48px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .hero-copy,
  .hero-portrait {
    grid-column: auto;
  }

  .hero h1 {
    font-size: 48px;
    line-height: 56px;
  }

  .hero-summary,
  .hero-stack {
    max-width: 680px;
  }

  .hero-portrait {
    width: min(100%, 240px);
  }
}

@media (max-width: 639px) {
  .hero {
    padding-top: 146px;
  }

  .hero h1 {
    font-size: 40px;
    line-height: 48px;
  }

  .hero-role {
    font-size: 25px;
    line-height: 34px;
  }

  .hero-summary {
    font-size: 16px;
    line-height: 26px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    margin-top: 24px;
    gap: 10px;
  }

  .hero-portrait {
    width: min(100%, 220px);
  }
}
</style>
