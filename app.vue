<template>
  <div id="__app" class="h-auto w-full relative">
    <main role="main" class="font-serif h-auto bg-zinc-200/20 dark:bg-dark-800">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Céss White | Front End Developer & UI Designer",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
  meta: [
    {
      name: "site_name",
      content: "Céss White | Front End Developer & UI Designer",
    },
    {
      name: "og:site_name",
      content: "Céss White | Front End Developer & UI Designer",
    },
    {
      name: "description",
      content:
        "Minimalist Front End Developer and UI Designer, I can help you to bring your ideas to reality.",
    },
    {
      name: "og:description",
      content:
        "Minimalist Front End Developer and UI Designer, I can help you to bring your ideas to reality.",
    },
    {
      name: "og:site_description",
      content:
        "Minimalist Front End Developer and UI Designer, I can help you to bring your ideas to reality.",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      hid: "twitter:site",
      content: "@cesswhite_",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "og:image",
      content: "/og-image.webp",
    },
    {
      property: "og:image:secure_url",
      content: "/og-image.webp",
    },
    {
      property: "og:image:alt",
      content: "Cover photo of Cess white",
    },
    {
      name: "twitter:image",
      content: "/og-image.webp",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
