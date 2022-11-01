<template>
  <header
    class="bg-light-50/60 border-b-1 border-dark-900 w-full grid px-1 top-0 z-1 grid-cols-12 backdrop-blur-lg fixed items-center justify-between lg:px-4 dark:bg-dark-900/80 dark:border-light-50">
    <div class="border-r-1 border-dark-900 col-span-2 dark:border-light-50">
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </div>
    <div class="flex h-full border-r-1 border-dark-900 px-4 col-span-9 items-center dark:border-light-50">
      <nav class="flex w-full text-dark-900 gap-2 items-center justify-start overflow-x-scroll dark:text-light-50">
        <NuxtLink to="/about">
          About
        </NuxtLink>
        <NuxtLink to="/works">
          Works
        </NuxtLink>
        <NuxtLink to="/templates">
          Templates
        </NuxtLink>
        <NuxtLink to="mailto:acessloop@gmail.com?subject = More info about ">
          Contact
        </NuxtLink>
      </nav>
    </div>
    <div class="flex col-span-1 items-center justify-center">
      <AppSwitchMode />
    </div>
  </header>
</template>