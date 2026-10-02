<template>
  <main class="hero">
    <div class="hero-grid">
      <div class="hero-copy">
        <h1 class="reveal reveal--up reveal--headline">Mid-level <span class="nowrap">Full-Stack</span> Developer building scalable digital products with Laravel, PHP, and <span class="nowrap">Vue 3.</span></h1>
        <p class="lede reveal reveal--up reveal--lede">More than 6 years of experience in <span class="nowrap">E-commerce</span> and Fintech. Specialist in clean architecture (DDD), performance optimization, and AI integration in the development workflow.</p>
        <div class="ctas reveal reveal--up reveal--ctas">
          <a class="btn btn-primary" href="https://github.com/dougCmartins">View projects</a>
          <a class="btn btn-ghost" href="mailto:martinsdouglas087@gmail.com">Contact</a>
        </div>
      </div>

      <aside class="id-card reveal reveal--card" id="about" aria-label="Doug Martins">
        <div class="id-head">
          <span class="avatar" aria-hidden="true">DM</span>
          <div>
            <p class="id-name">Doug Martins</p>
            <p class="id-role">Full-Stack Developer</p>
            <p class="id-focus">AI-assisted engineering</p>
          </div>
        </div>
        <ul class="pills" aria-label="Stack">
          <li>Laravel</li>
          <li>Vue</li>
          <li>Nuxt</li>
          <li>MySQL</li>
          <li>Docker</li>
          <li>Node.js</li>
          <li>AI</li>
        </ul>
      </aside>
    </div>
  </main>

  <div class="trust reveal reveal--fade reveal--trust">
    <p class="trust-label">Currently working with:</p>
    <ul class="pills" aria-label="Technologies">
      <li>Laravel</li>
      <li>PHP</li>
      <li>Vue 3</li>
      <li>Nuxt</li>
      <li>MySQL</li>
      <li>Docker</li>
      <li>Node.js</li>
      <li>AI</li>
    </ul>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex: 1;
  align-items: center;
  padding: 48px var(--pad-x) 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 24px;
  align-items: center;
  width: 100%;
}

.hero-copy {
  grid-column: 1 / span 6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 640px;
}

.hero h1 {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.nowrap {
  white-space: nowrap;
}

.lede {
  margin: 24px 0 0;
  max-width: 36em;
  color: var(--body);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  transition: background-color 150ms var(--ease-enter), border-color 150ms var(--ease-enter), color 150ms var(--ease-enter);
}

.btn-primary {
  border: 1px solid #181919;
  background: #112829;
  color: #ffffff;
}

.btn-ghost {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
}

.id-card {
  grid-column: 8 / span 5;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px;
  background: var(--surface-1);
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
}

.id-head {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: var(--surface-3);
  color: var(--ink);
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.id-name {
  margin: 0;
  color: var(--ink);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.id-role {
  margin: 4px 0 0;
  color: var(--body);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.id-focus {
  display: inline-block;
  margin: 12px 0 0;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--surface-3);
  color: #b0b0b0;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pills li {
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--surface-3);
  color: var(--body);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
}

.trust {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  padding: 8px var(--pad-x) 40px;
}

.trust-label {
  margin: 0;
  color: var(--body);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

@property --float-y {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}

.trust .pills li {
  --float-y: 0px;
  border: 1px solid transparent;
  cursor: default;
  transition:
    transform 200ms var(--ease-enter),
    border-color 200ms var(--ease-enter),
    color 200ms var(--ease-enter);
}

@keyframes float {
  0%,
  100% {
    --float-y: 0px;
  }
  50% {
    --float-y: -4px;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .trust .pills li {
    transform: translateY(var(--float-y));
    animation-name: float;
    animation-duration: 3.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .trust .pills li:nth-child(1) { animation-delay: 0ms; }
  .trust .pills li:nth-child(2) { animation-delay: 300ms; }
  .trust .pills li:nth-child(3) { animation-delay: 600ms; }
  .trust .pills li:nth-child(4) { animation-delay: 900ms; }
  .trust .pills li:nth-child(5) { animation-delay: 1200ms; }
  .trust .pills li:nth-child(6) { animation-delay: 1500ms; }
  .trust .pills li:nth-child(7) { animation-delay: 1800ms; }
  .trust .pills li:nth-child(8) { animation-delay: 2100ms; }
}

@media (hover: hover) {
  .trust .pills li:hover {
    animation-play-state: paused;
    transform: translateY(-3px);
    border-color: #b0b0b0;
    color: #b0b0b0;
  }
}

a:focus-visible,
.btn:focus-visible {
  outline: 2px solid #b0b0b0;
  outline-offset: 3px;
}

@media (hover: hover) {
  .btn-primary:hover {
    background: #0d181a;
    border-color: #0d181a;
  }

  .btn-ghost:hover {
    border-color: var(--body);
  }
}

.btn:active {
  transform: translateY(1px);
}

@media (prefers-reduced-motion: no-preference) {
  .reveal {
    animation-fill-mode: both;
    animation-timing-function: var(--ease-enter);
  }

  .reveal--fade {
    animation-name: fade-in;
  }

  .reveal--up {
    animation-name: fade-up;
  }

  .reveal--card {
    animation-name: fade-slide-right;
  }

  .reveal--headline {
    animation-duration: 600ms;
    animation-delay: 0ms;
  }

  .reveal--lede {
    animation-duration: 600ms;
    animation-delay: 150ms;
  }

  .reveal--ctas {
    animation-duration: 600ms;
    animation-delay: 300ms;
  }

  .reveal--card {
    animation-duration: 700ms;
    animation-delay: 400ms;
  }

  .reveal--trust {
    animation-duration: 600ms;
    animation-delay: 700ms;
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fade-slide-right {
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .btn {
    animation: none;
    transition: none;
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 1023px) {
  .hero {
    align-items: flex-start;
    padding-top: 40px;
  }

  .hero-grid {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }

  .hero-copy,
  .id-card {
    grid-column: auto;
    max-width: none;
  }

  .id-card {
    width: min(100%, 440px);
    margin-inline: auto;
  }

  .hero h1 {
    font-size: 48px;
    line-height: 56px;
  }
}

@media (max-width: 639px) {
  .hero h1 {
    font-size: 40px;
    line-height: 48px;
  }

  .ctas {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .id-head {
    align-items: flex-start;
  }
}
</style>
