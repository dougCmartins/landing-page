<script setup lang="ts">
const items = ref([
  {
    icon: 'i-heroicons-document',
    title: '10,000+',
    subtitle: 'Downloads per day',
  },
  {
    icon: 'i-heroicons-square-3-stack-3d',
    title: '2 Million',
    subtitle: 'Users',
  },
  {
    icon: 'i-heroicons-squares-2x2',
    title: '500+',
    subtitle: 'Clients',
  },
  {
    icon: 'i-heroicons-view-columns',
    title: '140+',
    subtitle: 'Countries',
  }]
);
</script>

<template>
  <section class="col-span-10 col-start-2">
    <article class="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start inset-shadow-xs gap-6" id="achievement">
      <div class="flex flex-col gap-3 items-start max-w-lg">
        <h2 class="text-[28px] md:text-4xl"> Our 18 years of achievements</h2>
        <p class="text-lg text-subtitle">With our super powers we have reached this</p>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div class="flex justify-start items-center gap-3 min-h-16" v-for="item in items" :key="item.icon">
          <div>
            <UIcon :name="item.icon" class="w-8 h-8 bg-[var(--bg-violet)]" />
          </div>
          <div>
            <h3 class="sm:text-3xl text-2xl">{{ item.title }}</h3>
            <p class="text-base text-subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>