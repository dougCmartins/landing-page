<template>
  <div class="stage">
    <Header />
    <HeroPortfolio />
  </div>
</template>

<style scoped>
.stage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--surface-0);
  background-image:
    radial-gradient(circle at 30% 50%, rgba(36, 251, 238, 0.15), transparent 60%),
    linear-gradient(180deg, rgba(14, 15, 15, 0.6) 0%, rgba(14, 15, 15, 0.95) 100%),
    url("/images/hero-bg.webp");
  background-position: center, center, center;
  background-size: auto, auto, cover;
  background-repeat: no-repeat;
}
</style>
