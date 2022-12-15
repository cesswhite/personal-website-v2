<template>
  <div class="flex h-screen w-full  items-center justify-center">
    <div
      class="flex h-screen transition-all ease-in-out duration-500 absolute items-center justify-center overflow-hidden lg:h-auto">
      <AppBlur />
    </div>
    <div class="flex flex-col z-1 gap-4 relative justify-center items-center">
      <h1
        class="font-sans font-semibold text-center transition-all ease-in-out text-5xl text-dark-900 duration-300 lg:text-7xl lg:text-9xl dark:text-light-50">
        Céss White
      </h1>
      <h2
        class="font-sans font-medium text-center  text-xl w-full transition-all  ease-in-out text-dark-900 duration-300 lg:text-3xl lg:w-3/4 dark:text-light-50/80">
        Front End Developer & UI Designer specialised in websites & progressive web apps
      </h2>
      <div class="flex gap-4">
        <NuxtLink to="https://github.com/cesswhite" target="blank"
          class="transition-all ease-in-out text-5xl text-dark-900/60 duration-300 i-carbon-logo-github dark:text-light-50/60 hover:text-dark-900 hover:dark:text-light-50/80" />
        <NuxtLink to="https://twitter.com/cesswhite_" target="blank"
          class="transition-all ease-in-out text-5xl text-dark-900/60 duration-300 i-carbon-logo-twitter dark:text-light-50/60 hover:text-dark-900 hover:dark:text-light-50/80" />
        <NuxtLink to="https://www.instagram.com/cess_armando/" target="blank"
          class="transition-all ease-in-out text-5xl text-dark-900/60 duration-300 i-carbon-logo-instagram dark:text-light-50/60 hover:text-dark-900 hover:dark:text-light-50/80" />
        <NuxtLink to="https://www.linkedin.com/in/cesswhite/" target="blank"
          class="transition-all ease-in-out text-5xl text-dark-900/60 duration-300 i-carbon-logo-linkedin dark:text-light-50/60 hover:text-dark-900 hover:dark:text-light-50/80" />
      </div>
    </div>
  </div>
</template>