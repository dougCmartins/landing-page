<script setup lang="ts">

</script>

<template>
  <section class="col-span-12 bg-[#f5f9ff] hero" id="hero">
    <article class="grid grid-cols-12 justify-center">
      <div class="col-span-10 col-start-2">
        <div class="flex xl:flex-row flex-col justify-between hero--items">
          <div class="flex flex-col gap-6 xl:w-1/2 lg:w-4/5 w-full items-start">
            <div class="flex flex-col border-0 gap-4 mt-0 xl:mt-32">
              <h2 class="xl:text-6xl lg:text-5xl text-4xl break-words leading-tight">
                The easiest way to manage projects
              </h2>
              <p class="xl:text-lg text-regal-blue text-wrap">From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.</p>
              <UButton color="purple" variant="outline" class="text-center block max-w-32" size="xl">Get Started</UButton>
            </div>
          </div>
          <div class="flex xl:justify-end justify-center overflow-hidden mt-20 xl:mt-0">
            <nuxt-picture
             class="object-cover"
              src="https://i.ibb.co/zVKCBgdr/iphone.webp"
              :img-attrs="{
                'data-priority': 'high',
                'decoding': 'async',
              }"
              width="320"
              height="640"
              loading="eager"
              format="webp"
              quality="80"
              densities="x1"
              alt="iphone"
              sizes="sm:100vw md:50vw lg:320px"
            />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped lang="css">
.hero {
  background: linear-gradient(to bottom, #f5f9ff, transparent);
}
</style>