<template>
  <div class="flex-col flex w-full px-1 gap-2">
    <div>
      <NuxtLink :to="link" target="blank">
        <img :src="image" width="400" height="400" class="h-full object-center object-cover shadow-xl w-full"
          loading="lazy" alt="image for template cover">
      </NuxtLink>
    </div>
    <h1 class="font-sans font-medium text-lg w-full text-dark-900  dark:text-light-50">
      {{ name }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  image: String,
  link: String,
})
</script>