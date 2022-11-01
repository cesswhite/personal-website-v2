<template>
  <div class="flex flex-col py-42 gap-4 justify-center items-center">
    <h1 class="font-sans font-semibold text-7xl text-dark-900 lg:text-9xl dark:text-light-50">
      About
    </h1>
    <p class="font-sans font-medium text-left text-3xl text-dark-900 w-1/2 dark:text-light-50">
      Hi!
      My name is César, on the internet world I use the nickname of
      <span class="underline italic">
        cesswhite
      </span>
      (abbreviation of my name and my favorite color)
      <br>
      <br>
      I'm a Front End Developer with 4+ years of experience in this area, but, in the last two years, I have been
      studying and training as a UI Designer, creating projects from scratch to
      production.
      <br>
      <br>
      I have always liked the combination of technology and art. That's why I love to keep discovering new
      technologies,
      trends and breaking the mold of everything.
      <br>
      <br>
      I currently aim to learn as much as I can in a work environment and to further my own abilities in a
      professional and
      personal setting.
      <br>
      <br>
      Join me on this journey.
      <br>
      <br>
      Long? Maybe
      <br>
      Funny? Absolutely sure!
    </p>
    <img src="/me.webp" width="200" height="200"
      class="h-full object-cover object-top mt-24 w-1/4 hover:mix-blend-difference" loading="lazy"
      alt="profile photo of cess white developer">
  </div>
</template>

<script setup>
useHead({
  title: 'Céss White | About',
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