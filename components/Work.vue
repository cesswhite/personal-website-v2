<template>
  <div class="mt-42 w-full">
    <div
      class="flex flex-col border-t-1 border-dark-900 px-4 pt-12 gap-4 items-center justify-between lg:flex-row lg:px-0 dark:border-light-50">
      <h1 class="font-sans w-full text-dark-900 text-4xl lg:pl-4 lg:text-6xl lg:w-1/2 dark:text-light-50">
        {{ name }}
      </h1>
      <p class="font-sans w-full text-dark-700 text-2xl lg:text-4xl lg:w-1/2 dark:text-light-50">
        {{ description }}
      </p>
    </div>
    <div class="mt-12">
      <NuxtLink :to="link" target="blank">
        <img :src="image" width="400" height="400" class="h-full object-center object-cover w-full" alt="">
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  description: String,
  image: String,
  link: String,
})
</script>