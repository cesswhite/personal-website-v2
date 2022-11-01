<template>
  <div id="__app" class="h-auto w-full relative">
    <AppHeader />
    <main role="main" class="h-auto bg-gray-100 dark:bg-dark-900">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Céss White | Front End Developer & UI Designer',
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
  ],
  script: [
    {
      src: "https://eco-studios.herokuapp.com/umami.js",
      defer: true,
      async: true,
      "data-website-id": "b901d336-938b-4d30-9c8c-637015046cac",
    },
  ],
  link: [
    {
      rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg',
    },
  ],
  htmlAttrs: {
    lang: 'en'
  },
})

</script>
