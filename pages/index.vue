<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="inset-0 absolute">
      <AppBlur />
    </div>
    <div class="flex flex-col z-1 gap-4 relative justify-center items-center">
      <h1 class="font-sans font-semibold text-7xl text-dark-900 lg:text-9xl dark:text-light-50">
        Céss White
      </h1>
      <h2 class="font-sans font-medium text-center text-3xl text-dark-900 w-3/4 dark:text-light-50">
        Front End Developer & UI Designer specialised in websites & progressive web apps
      </h2>
      <div class="flex gap-4">
        <NuxtLink to="https://github.com/cesswhite" target="blank"
          class="text-5xl text-dark-900/60 i-carbon-logo-github dark:text-light-50/60 hover:dark:text-light-50/80" />
        <NuxtLink to="https://twitter.com/cesswhite_" target="blank"
          class="text-5xl text-dark-900/60 i-carbon-logo-twitter dark:text-light-50/60 hover:dark:text-light-50/80" />
        <NuxtLink to="https://www.instagram.com/cess_armando/" target="blank"
          class="text-5xl text-dark-900/60 i-carbon-logo-instagram dark:text-light-50/60 hover:dark:text-light-50/80" />
        <NuxtLink to="https://www.linkedin.com/in/cesswhite/" target="blank"
          class="text-5xl text-dark-900/60 i-carbon-logo-linkedin dark:text-light-50/60 hover:dark:text-light-50/80" />
      </div>
    </div>
  </div>
</template>