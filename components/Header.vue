<template>
  <header class="site-header reveal reveal--fade reveal--header">
    <a class="brand" href="#top" id="top">
      <img src="/images/nuxt-logo.webp" width="310" height="70" alt="DCMARTINS.CO">
    </a>
    <nav aria-label="Main">
      <ul class="nav-links">
        <li><a href="https://github.com/dougCmartins" target="_blank">Projects</a></li>
        <li><a href="https://www.linkedin.com/in/douglas-martins-089167187" target="_blank">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 16px var(--pad-x);
}

.brand {
  display: block;
  flex: 0 0 auto;
  line-height: 0;
}

.brand img {
  display: block;
  width: 155px;
  height: 35px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-links a {
  color: var(--ink);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}

.nav-links a:hover {
  color: #b0b0b0;
}

a:focus-visible {
  outline: 2px solid #b0b0b0;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: no-preference) {
  .reveal {
    animation-fill-mode: both;
    animation-timing-function: var(--ease-enter);
  }

  .reveal--fade {
    animation-name: fade-in;
  }

  .reveal--header {
    animation-duration: 400ms;
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .nav-links a {
    animation: none;
    transition: none;
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 639px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    gap: 20px;
  }
}
</style>
