<script setup lang="ts">
import {computed} from "vue";

const date = new Date();

const links = computed((): any[] => {
  return [{
    label: 'Feature',
    to: '#feature'
  }, {
    label: 'Story',
    to: '#story'
  },
    {
      label: 'Achievement',
      to: '#achievement'
    },
    {
      label: 'Integration',
      to: '#integration'
    },
    {
      label: 'Project',
      to: '#project'
    }]
});
</script>

<template>
  <footer class="col-span-12 bg-neutral-950 min-h-72 h-full justify-center content-center" id="footer">
    <div class="grid grid-cols-12 gap-6 w-full justify-center">
      <div class="col-span-10 col-start-2 items-center">
        <div class="flex flex-col justify-center gap-3 items-center">
          <div class="flex flex-col justify-center items-center">
            <div class="flex justify-center">
              <nuxt-picture
                class="object-cover"
                src="https://i.ibb.co/fV77TcZx/nuxt-svgrepo-com.webp"
                width="128"
                height="32"
                loading="lazy"
                :img-attrs="{
                  'decoding': 'async'
                  }"
                format="webp"
                quality="80"
                alt="Nuxt Logo"
                sizes="sm:100vw md:50vw lg:128px"
                densities="x1"
              />
            </div>
            <div class="sm:flex hidden">
              <UHorizontalNavigation  class="group-hover:text-transparent gap-3 flex flex-wrap" :links="links">
                <template #default="{ link }">
                  <span class="group-hover:text-black relative text-white font-light text-base">{{ link.label }}</span>
                </template>
              </UHorizontalNavigation>
            </div>
          </div>
          <UDivider />
          <div class="flex justify-center sm:justify-start">
            <p>&copy; {{ date.getFullYear() }} Site desenvolvido por <a href="https://github.com/dougCmartins" target="_blank">DougCMartins</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>