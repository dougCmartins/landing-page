<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Header",
  computed: {
    links():any[] {
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
    }
  }
})
</script>

<template>
  <header class="grid grid-cols-12 h-32 items-start bg-[#f5f9ff]" id="header">
    <div class="col-start-2 col-span-10 pt-4">
      <div class="flex items-center gap-4">
        <div class="flex justify-center overflow-hidden">
          <a href="https://nuxt.com/" class="w-full leading-normal">
            <nuxt-picture
              class="object-cover"
              src="https://i.ibb.co/fV77TcZx/nuxt-svgrepo-com.webp"
              width="128"
              height="32"
              loading="lazy"
              :img-attrs="{
                'decoding': 'async',
               }"
              format="webp"
              quality="80"
              densities="x1"
              alt="nuxt-svgrepo-com"
              sizes="sm:100vw md:50vw lg:128px"
            />
          </a>
        </div>
        <UHorizontalNavigation class="hidden sm:flex" :links="links">
          <template #default="{ link }">
            <span class="group-hover:none relative font-semibold">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>