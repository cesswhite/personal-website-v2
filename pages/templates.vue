<template>
  <div class="flex flex-col py-42 gap-4 justify-center items-center">
    <h1 class="font-sans font-semibold text-7xl text-dark-900 lg:text-9xl dark:text-light-50">
      Templates
    </h1>
    <h2 class="font-sans font-medium text-center text-3xl text-dark-900 dark:text-light-50">
      Minimalist and lovingly handcrafted
    </h2>
    <div class="mt-28 w-full grid gap-12 grid-cols-1 lg:mt-42 lg:grid-cols-2">
      <template v-for="__w in templates.templates">
        <Template :name="__w.name" :description="__w.description" :image="__w.image" :link="__w.link" />
      </template>
    </div>
  </div>
</template>

<script setup>
import templates from '../assets/data/templates.json'
useHead({
  title: 'Céss White | Templates',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    {
      name: 'site_name',
      content: 'Céss White | Front End Developer & UI Designer'
    },
    {
      name: 'og:site_name',
      content: 'Céss White | Front End Developer & UI Designer'
    },
    {
      name: 'description',
      content: 'Minimalist Front End Developer and UI Designer, I can help you to bring your ideas to reality.'
    },
    {
      name: 'og:description',
      content: 'Minimalist Front End Developer and UI Designer, I can help you to bring your ideas to reality.'
    },
    {
      name: 'og:site_description',
      content: 'Minimalist Front End Developer and UI Designer, I can help you to bring your ideas to reality.'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'twitter:site',
      content: '@cesswhite_'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'og:image',
      content: '/og-image.webp'
    },
    {
      property: 'og:image:secure_url',
      content: '/og-image.webp'
    },
    {
      property: 'og:image:alt',
      content: 'Cover photo of Cess white'
    },
    {
      name: 'twitter:image',
      content: '/og-image.webp'
    },
  ]
})
</script>