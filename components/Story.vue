<script setup lang="ts">
const items = [{
  content: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  name: 'Jane Cooper',
  work: 'Ceo, Airbnb',
}, {
  content: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  name: 'Jane Cooper',
  work: 'Ceo, Airbnb',
}, {
  content: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  name: 'Jane Cooper',
  work: 'Ceo, Airbnb',
}, {
  content: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  name: 'Jane Cooper',
  work: 'Ceo, Airbnb',
}];

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <section class="col-span-12  bg-blue-light" id="story">
    <article class="grid grid-cols-12">
      <div class="col-span-10 col-start-2">
        <section class="flex flex-col md:flex-row justify-center items-center bg-blue-light gap-6 inset-shadow-xs my-8 sm:my-16">
          <article class="flex flex-col justify-start w-full lg:w-2/5">
            <h2 class="text-[28px] md:text-4xl">Real Stories from Real Customers</h2>
            <p class="text-lg text-subtitle">Get inspired by these stories.</p>
          </article>
          <article class="flex items-center justify-center gap-4 w-full md:max-w-lg">
            <UCarousel ref="carouselRef" v-slot="{ item, index }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden">
              <UCard class="divide-none border-transparent fill-white w-full" :key="index">
                <div class="flex flex-col justify-center items-center border-none gap-3">
                  <div>
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1978_10015)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8597 4.06074C27.0878 6.31671 24.7019 8.96745 24.7019 12.013C26.7358 12.2386 28.4177 13.0376 29.7475 14.41C31.0774 15.7824 31.7423 17.3709 31.7423 19.1757C31.7423 21.0933 31.097 22.71 29.8062 24.026C28.5155 25.342 26.8923 26 24.9366 26C22.7462 26 20.8492 25.1446 19.2456 23.4338C17.6419 21.7231 16.8401 19.6457 16.8401 17.2017C16.8401 9.86981 21.1034 4.13596 29.6302 0L31.8597 4.06074ZM15.0196 4.06074C10.2086 6.31671 7.80313 8.96745 7.80313 12.013C9.87615 12.2386 11.5776 13.0376 12.9074 14.41C14.2373 15.7824 14.9022 17.3709 14.9022 19.1757C14.9022 21.0933 14.2471 22.71 12.9368 24.026C11.6265 25.342 9.99349 26 8.03781 26C5.84745 26 3.96024 25.1446 2.37614 23.4338C0.792039 21.7231 0 19.6457 0 17.2017C0 9.86981 4.24376 4.13596 12.7314 0L15.0196 4.06074Z" fill="#1DB5BE"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1978_10015">
                          <rect width="32" height="26" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p class="text-base text-subtitle">{{item.content}}</p>
                  </div>
                </div>
                <template #footer>
                  <div class="flex flex-col border-none">
                    <b class="text-subtitle">{{ item.name }}</b>
                    <small class="font-light">{{ item.work }}</small>
                  </div>
                </template>
              </UCard>
            </UCarousel>
          </article>
        </section>
      </div>
    </article>
  </section>
</template>

<style scoped lang="css">
 .bg-blue-light {
  background-color: var(--bg-blue-light);
}
</style>