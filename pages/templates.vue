<template>
  <div class="flex flex-col py-42 gap-4 justify-center items-center">
    <h1 class="font-sans font-semibold text-7xl text-dark-900 lg:text-9xl dark:text-light-50">
      Templates
    </h1>
    <h2 class="font-sans font-medium text-center text-3xl text-dark-900 dark:text-light-50">
      Minimalist and lovingly handcrafted
    </h2>
    <div class="mt-42 w-full grid gap-12 grid-cols-1 lg:grid-cols-2">
      <template v-for="__w in templates.templates">
        <Template :name="__w.name" :description="__w.description" :image="__w.image" :link="__w.link" />
      </template>
    </div>
  </div>
</template>

<script setup>
import templates from '../assets/data/templates.json'
</script>