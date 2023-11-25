<template>
  <div class="w-full h-screen relative">
    <div class="absolute top-4 right-4">
      <AppSwitchMode />
    </div>
    <div
      class="absolute bottom-24 w-full px-2 lg:bottom-24 lg:left-24 flex flex-col gap-2"
    >
      <h1 class="text-2xl lg:text-3xl text-zinc-800 dark:text-zinc-50">
        Céss White
      </h1>
      <p
        class="text-base lg:text-xl text-zinc-800/50 w-full dark:text-zinc-50/50"
      >
        Front End Developer & UI Designer specialised in
        <br class="hidden lg:flex" />
        websites & progressive web apps, focus on minimalism
      </p>
      <div class="flex gap-4 w-full flex-wrap items-center justify-start">
        <NuxtLink
          to="https://www.ecostudios.dev/"
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          My Studio
        </NuxtLink>
        <NuxtLink
          to="https://www.youtube.com/channel/UCrLXsqIkrCsRawK2R3HEmbQ"
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          YouTube
        </NuxtLink>
        <NuxtLink
          to="https://github.com/cesswhite"
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          GitHub
        </NuxtLink>
        <NuxtLink
          to="https://twitter.com/cesswhite_"
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          X
        </NuxtLink>
        <NuxtLink
          to="https://www.instagram.com/cess_armando/"
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          Instagram
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/cesswhite/"
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          LinkedIn
        </NuxtLink>
        <NuxtLink
          to="mailto:acessloop@gmail.com?subject = More info about "
          target="blank"
          class="inline-block text-sm text-zinc-800/70 hover:text-zinc-900 dark:text-zinc-50/70 dark:hover:text-zinc-50"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
