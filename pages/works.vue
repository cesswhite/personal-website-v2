<template>
  <div class="flex flex-col py-42 gap-4 justify-center items-center">
    <h1 class="font-sans font-semibold text-7xl text-dark-900 lg:text-9xl dark:text-light-50">
      Works
    </h1>
    <h2 class="font-sans font-medium text-center text-3xl text-dark-900 dark:text-light-50">
      We build your ideas
    </h2>
    <div class="w-full">
      <template v-for="__w in work.works">
        <Work :name="__w.name" :description="__w.description" :image="__w.image" :link="__w.link" />
      </template>
    </div>
  </div>
</template>

<script setup>
import work from '../assets/data/works.json'
</script>