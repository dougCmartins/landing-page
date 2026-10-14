<template>
  <section id="about" class="page-section">
    <div v-reveal class="content-width about-grid reveal">
      <div>
        <div class="eyebrow">
          <span class="section-number">01</span>
          <span class="eyebrow-line" />
          {{ copy.about.label }}
        </div>
        <h2 class="section-title">
          <template v-for="(line, index) in copy.about.title" :key="line">
            <br v-if="index > 0">
            {{ line }}
          </template>
        </h2>
      </div>
      <div>
        <p v-for="paragraph in copy.about.paragraphs" :key="paragraph" class="body-copy">{{ paragraph }}</p>
        <div class="about-focus">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect width="8" height="8" x="3" y="3" rx="2" />
              <path d="M7 11v4a2 2 0 0 0 2 2h4" />
              <rect width="8" height="8" x="13" y="13" rx="2" />
            </svg>
            {{ copy.about.focus[0] }}
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14a9 3 0 0 0 18 0V5" />
              <path d="M3 12a9 3 0 0 0 18 0" />
            </svg>
            {{ copy.about.focus[1] }}
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            {{ copy.about.focus[2] }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" class="page-section">
    <div class="content-width">
      <div v-reveal class="section-head reveal">
        <div>
          <div class="eyebrow">
            <span class="section-number">02</span>
            <span class="eyebrow-line" />
            {{ copy.experience.label }}
          </div>
          <h2 class="section-title">{{ copy.experience.title }}</h2>
        </div>
        <p class="section-intro">
          <template v-for="(line, index) in copy.experience.intro" :key="line">
            <br v-if="index > 0">
            {{ line }}
          </template>
        </p>
      </div>
      <div class="experience-list">
        <article v-for="job in copy.experience.jobs" :key="job.id" v-reveal class="experience-card reveal">
          <div>
            <span class="experience-period">{{ job.period }}</span>
            <h3>
              <a class="company-link" :href="job.linkedin" target="_blank" rel="noreferrer" :aria-label="job.linkedinLabel">{{ job.company }}</a>
            </h3>
            <p class="experience-domain">{{ job.domain }}</p>
          </div>
          <div>
            <h4 class="experience-role">{{ job.role }}</h4>
            <ul>
              <li v-for="text in job.achievements" :key="text">{{ text }}</li>
            </ul>
            <div class="pills">
              <span v-for="item in job.stack" :key="item" class="stack-pill">{{ item }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="stack" class="page-section">
    <div class="content-width">
      <div v-reveal class="section-head reveal">
        <div>
          <div class="eyebrow">
            <span class="section-number">03</span>
            <span class="eyebrow-line" />
            {{ copy.stack.label }}
          </div>
          <h2 class="section-title">{{ copy.stack.title }}</h2>
        </div>
        <p class="section-intro">
          <template v-for="(line, index) in copy.stack.intro" :key="line">
            <br v-if="index > 0">
            {{ line }}
          </template>
        </p>
      </div>
      <div class="stack-groups">
        <div v-for="group in stackGroups" :key="group.name" v-reveal class="stack-group reveal">
          <h3>{{ group.name }}</h3>
          <div class="pills">
            <span v-for="item in group.items" :key="item" class="stack-pill">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="education" class="page-section">
    <div class="content-width">
      <div v-reveal class="section-head reveal">
        <div>
          <div class="eyebrow">
            <span class="section-number">04</span>
            <span class="eyebrow-line" />
            {{ copy.education.label }}
          </div>
          <h2 class="section-title">{{ copy.education.title }}</h2>
        </div>
      </div>
      <div v-reveal class="education-grid reveal">
        <div>
          <p class="education-label">{{ copy.education.academicLabel }}</p>
          <div v-for="item in copy.education.academic" :key="item.id" class="education-row">
            <h3>{{ item.title }}</h3>
            <p>
              <template v-for="(line, index) in item.lines" :key="line">
                <br v-if="index > 0">
                {{ line }}
              </template>
            </p>
          </div>
        </div>
        <div>
          <p class="education-label">{{ copy.education.continuingLabel }}</p>
          <div v-for="item in copy.education.continuing" :key="item.id" class="education-row">
            <h3>{{ item.title }}</h3>
            <p>
              <template v-for="(line, index) in item.lines" :key="line">
                <br v-if="index > 0">
                {{ line }}
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="page-section contact-section">
    <div v-reveal class="content-width reveal">
      <div class="eyebrow">
        <span class="section-number">05</span>
        <span class="eyebrow-line" />
        {{ copy.contactSection.label }}
      </div>
      <h2 class="section-title">
        <template v-for="(line, index) in copy.contactSection.title" :key="line">
          <br v-if="index > 0">
          {{ line }}
        </template>
      </h2>
      <p class="body-copy">{{ copy.contactSection.summary }}</p>
      <a class="portfolio-button portfolio-button-primary" :href="`mailto:${contact.email}`">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        {{ copy.contactSection.action }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </a>
      <div class="contact-links">
        <a :href="`mailto:${contact.email}`">
          {{ contact.email }}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
        <a :href="`tel:${contact.phone}`">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {{ contact.phoneLabel }}
        </a>
        <a :href="contact.github" target="_blank" rel="noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          GitHub
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
        <a :href="contact.linkedin" target="_blank" rel="noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="content-width footer-inner">
      <a class="footer-brand" href="#top">DCMARTINS.CO</a>
      <span>{{ copy.footer.rights }}</span>
      <a class="back-top" href="#top">
        {{ copy.footer.backToTop }}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { contact, stackGroupItems } from '~/utils/portfolio'

const { copy } = usePortfolioLocale()

const stackGroups = computed(() => copy.value.stack.groups.map((name, index) => ({
  name,
  items: stackGroupItems[index] ?? [],
})))

const revealObservers = new Set<IntersectionObserver>()

const vReveal = {
  mounted(element: HTMLElement) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue
        }
        element.classList.add('is-visible')
        observer.unobserve(element)
      }
    }, { threshold: 0.08 })
    observer.observe(element)
    revealObservers.add(observer)
  },
}

onBeforeUnmount(() => {
  for (const observer of revealObservers) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.page-section {
  position: relative;
  z-index: 3;
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 38px;
}

.section-title {
  margin: 15px 0 0;
  font-family: var(--font-display);
  font-size: 48px;
  line-height: 56px;
  font-weight: 500;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 80px;
  align-items: start;
}

.about-grid .section-title {
  max-width: 470px;
}

.body-copy {
  color: var(--p-color);
  font-size: 20px;
  line-height: 30px;
  margin: 0 0 20px;
}

.about-focus {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  margin-top: 30px;
  font-size: 12px;
  color: var(--muted-foreground);
}

.about-focus span {
  display: flex;
  align-items: center;
  gap: 7px;
}

.section-intro {
  color: var(--p-color);
  font-size: 14px;
  line-height: 24px;
  max-width: 370px;
  margin: 0;
}

.experience-list {
  display: grid;
  gap: 18px;
}

.experience-card {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 48px;
  padding: 32px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.experience-period {
  font-size: 12px;
  color: var(--muted-foreground);
}

.experience-card h3 {
  font-family: var(--font-display);
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  margin: 14px 0 6px;
}

.company-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 4px;
  transition: text-decoration-color 200ms;
}

.company-link:hover {
  text-decoration-color: currentColor;
}

.company-link:focus-visible {
  outline: 1px solid var(--body-ink);
  outline-offset: 3px;
}

.experience-domain {
  font-size: 13px;
  color: var(--muted-foreground);
  margin: 0;
}

.experience-role {
  font-size: 15px;
  margin: 0 0 14px;
  font-weight: 500;
  color: var(--p-color);
}

.experience-card ul {
  margin: 0 0 22px;
  padding-left: 16px;
  color: var(--p-color);
  font-size: 14px;
  line-height: 24px;
}

.experience-card li {
  padding-left: 4px;
  margin-bottom: 9px;
}

.experience-card li::marker {
  color: var(--muted-foreground);
}

.stack-groups {
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 1.2fr;
  gap: 44px;
}

.stack-group {
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.stack-group h3 {
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 22px;
}

.stack-group .stack-pill {
  font-size: 13px;
  padding: 7px 14px;
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.education-row {
  padding: 22px 0;
  border-top: 1px solid var(--border);
}

.education-row h3 {
  font-size: 17px;
  line-height: 26px;
  font-weight: 500;
  margin: 0 0 6px;
}

.education-row p {
  font-size: 13px;
  line-height: 22px;
  color: var(--muted-foreground);
  margin: 0;
}

.education-label {
  font-size: 13px;
  margin: 0 0 24px;
  color: var(--p-color);
}

.contact-section {
  padding: 90px 0 76px;
  text-align: center;
}

.contact-section .eyebrow {
  justify-content: center;
}

.contact-section .section-title {
  margin: 18px 0;
}

.contact-section .body-copy {
  font-size: 16px;
  line-height: 26px;
}

.contact-section .portfolio-button {
  margin-top: 8px;
}

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 28px;
  font-size: 13px;
  color: var(--p-color);
}

.contact-links a {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 200ms;
}

.contact-links a:hover {
  color: var(--foreground);
}

.contact-links a:focus-visible,
.back-top:focus-visible,
.footer-brand:focus-visible {
  outline: 1px solid var(--body-ink);
  outline-offset: 3px;
}

.site-footer {
  position: relative;
  z-index: 3;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 0;
  border-top: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: 11px;
}

.footer-brand {
  font-size: 13px;
  font-weight: 600;
  color: var(--p-color);
}

.back-top {
  display: flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 1199px) {
  .about-grid {
    gap: 48px;
  }
}

@media (max-width: 1023px) {
  .page-section {
    padding: 56px 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .section-title {
    font-size: 40px;
    line-height: 48px;
  }

  .about-grid .section-title {
    max-width: 650px;
  }

  .experience-card {
    gap: 28px;
    padding: 28px;
    grid-template-columns: 0.8fr 1.2fr;
  }

  .stack-groups {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .stack-group:last-child {
    grid-column: 1 / -1;
  }

  .education-grid {
    gap: 36px;
  }

  .contact-section {
    padding: 64px 0;
  }
}

@media (max-width: 639px) {
  .page-section {
    padding: 48px 0;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 28px;
  }

  .section-title {
    font-size: 34px;
    line-height: 42px;
  }

  .body-copy {
    font-size: 18px;
    line-height: 29px;
  }

  .experience-card {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 24px;
  }

  .experience-card h3 {
    font-size: 28px;
    line-height: 36px;
  }

  .stack-groups,
  .education-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .stack-group:last-child {
    grid-column: auto;
  }

  .contact-section .section-title {
    font-size: 36px;
    line-height: 44px;
  }

  .contact-links {
    gap: 18px;
    font-size: 12px;
  }

  .footer-inner {
    flex-wrap: wrap;
    font-size: 10px;
  }

  .footer-brand {
    width: 100%;
  }
}
</style>
