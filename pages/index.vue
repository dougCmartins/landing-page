<script setup>
</script>

<template>
    <Header></Header>
    <main class="grid grid-cols-12 gap-6 lg:gap-20">
      <hero />
      <div class="col-span-10 col-start-2 my-10">
        <UDivider icon="i-simple-icons-github" />
      </div>
      <feature/>
      <story />
      <achievement />
      <integration />
      <project />
    </main>
    <Footer ></Footer>
</template>

<style>
</style>