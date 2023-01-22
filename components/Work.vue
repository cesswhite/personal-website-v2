<template>
  <div class="w-full">
    <div class="border-t-1 border-dark-900 pt-12 items-center justify-between lg:px-0 dark:border-light-50">
      <h1 class="font-sans w-full text-dark-900 text-4xl lg:text-6xl dark:text-light-50">
        {{ name }}

      </h1>
      <span class="text-lg text-dark-900/60 italic inline-block dark:text-light-50/60">
        {{ type }}
      </span>
      <p class="font-sans mt-4 w-full text-dark-900/60 text-2xl lg:text-3xl dark:text-light-50/60">
        {{ description }}
      </p>
      <NuxtLink :to="link" target="blank" class="mt-4 text-dark-900 inline-block underline dark:text-light-50/60">
        Go to website
      </NuxtLink>
    </div>
    <div class="mt-4">
      <NuxtLink :to="link" target="blank">
        <img :src="image" width="400" height="400" class="h-full object-center object-cover w-full"
          alt="image-of-project">
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
  type: String
})
</script>