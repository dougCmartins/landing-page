<script setup lang="ts">
</script>

<template>
  <section class="col-span-12 bg-blue-semilight">
    <article class="grid grid-cols-12">
      <div class="col-span-10 col-start-2">
        <div class="flex flex-col xl:flex-row lg-my-16 my-8" id="project">
          <div class="flex flex-col xl:flex-row md:justify-between justify-start gap-6">
            <div class="flex flex-col justify-evenly md:gap-0 gap-3 max-w-lg">
              <div class="flex flex-col gap-3">
                <h2 class="text-[28px] md:text-4xl">Manage all projects from your mobile</h2>
                <p class="text-lg text-subtitle">Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
              </div>
              <div class="md:flex hidden flex-col gap-3">
                <p class="text-lg text-subtitle">Get the App</p>
                <nuxt-picture
                  class="object-cover w-2/4"
                  src="https://i.ibb.co/RGLsvFjx/Badges.webp" 
                  width="282"
                  height="40"
                  loading="lazy"
                  :img-attrs="{
                    'decoding': 'async',
                    }"
                  format="webp"
                  quality="80"
                  densities="x1"
                  alt="Badges"
                  sizes="sm:100vw md:50vw lg:282px"
                />
              </div>
            </div>
            <div class="flex justify-center xl:justify-start overflow-hidden">
              <nuxt-picture
                class="object-cover md:w-3/4 xl:w-auto w-auto"
                src="https://i.ibb.co/kWRFV9h/Macbook-Pro.webp" 
                alt="Macbook-Pro"
                :img-attrs="{
                'decoding': 'async',
              }"
                width="768"
                height="452"
                loading="lazy"
                format="webp"
                densities="x1"
                sizes="sm:100vw md:50vw lg:768px"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped lang="css">
.bg-blue-semilight {
   background-color: var(--bg-blue-semilight);
}
</style>