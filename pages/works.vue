<template>
  <div class="w-full py-40">
    <div class="flex flex-col mx-auto w-full justify-center items-center 2xl:w-screen-2xl">
      <h1 class="font-sans font-semibold text-7xl text-dark-900 lg:text-9xl dark:text-light-50">
        Works
      </h1>
      <h2 class="font-sans font-medium text-center text-3xl text-dark-900/60 italic dark:text-light-50/60">
        From nothing to everything
      </h2>
      <div class="mt-24 w-full grid gap-x-8 gap-y-14 grid-cols-1 md:px-8 md:grid-cols-2 xl:px-0 2xl:grid-cols-3">
        <template v-for="__w in _work">
          <Work :name="__w.name" :description="__w.description" :image="__w.image" :link="__w.link" :type="__w.type" />
        </template>
      </div>
    </div>
  </div>

</template>

<script setup>
import work from '../assets/data/works.json'

const _work = ref(work.works)
useHead({
  title: 'Céss White | Works',
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