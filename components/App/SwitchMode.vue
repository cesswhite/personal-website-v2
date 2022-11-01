<template>
  <button class="flex h-12 p-1 w-12 items-center justify-center" @click="toggleDark">
    <div class="text-2xl text-dark-900 i-heroicons-moon dark:text-light-50 dark:i-heroicons-sun" />
  </button>
</template>

<script setup>
const color = useColorMode()
function toggleDark () {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>