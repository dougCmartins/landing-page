<script setup lang="ts">
const items = [
  {
    icon: 'i-heroicons-document',
    title: 'Robust workflow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    icon: 'i-heroicons-square-3-stack-3d',
    title: 'Better components',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    icon: 'i-heroicons-squares-2x2',
    title: 'Flexibility',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    icon: 'i-heroicons-table-cells',
    title: 'Multiple layouts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    icon: 'i-heroicons-view-columns',
    title: 'User friendly',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    icon: 'i-heroicons-wallet',
    title: 'Well organised',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
];
</script>

<template>
  <section class="col-span-10 col-start-2 justify-center" id="feature">
    <article class="flex flex-col justify-center items-center text-center gap-8">
      <div class="flex flex-col gap-4 md:w-4/5 w-full">
        <h2 class="text-[28px] md:text-4xl">Tailor-made features</h2>
        <p class="text-lg text-subtitle">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div v-for="(item, index) in items" :key="index" class="max-w-96 min-h-36" :data-feature="index">
          <UIcon :name="item.icon" class="w-8 h-8 bg-[var(--bg-violet)]" loading="lazy"/>
          <h3 class="text-2xl">{{ item.title }}</h3>
          <p class="text-base">{{ item.description }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
</style>