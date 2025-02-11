<script setup lang="ts">
</script>

<template>
  <section class="col-span-10 col-start-2">
    <article class="flex flex-col lg:flex-row inset-shadow-xs pt-8 sm:pt-16" id="integration">
      <div class="flex flex-col lg:justify-between w-full gap-3 lg:gap-0">
        <UDivider />
        <div class="flex lg:flex-row flex-col lg:justify-between justify-start gap-6">
          <div class="flex flex-col gap-3 lg:pt-10 max-w-md">
            <h2 class="text-[28px] md:text-4xl">Easy integrations with 170+ tools</h2>
            <p class="text-lg text-subtitle">Connect Landify with your favourite tools that you use daily and keep things on track.</p>
          </div>
          <div class="flex lg:justify-end justify-center overflow-hidden w-full">
            <nuxt-picture
            class="object-cover w-full md:max-w-lg"
            src="https://i.ibb.co/84L1CrLp/Logos.webp"
            alt="Logos"
            width="696"
            height="270"
            loading="lazy"
            :img-attrs="{
                'decoding': 'async',
              }"
            format="webp"
            quality="80"
            densities="x1"
            sizes="sm:100vw md:50vw lg:696px"
            />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>