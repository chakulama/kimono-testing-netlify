<template>
  <NuxtPage />
</template>

<script setup>
useHead({
  title: "Restaurante Mediterraneo",
  htmlAttrs: {
    lang: "es",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "restaurante mediterraneo bcn",
    },
    {
      name: "keywords",
      content:
        "restaurante mediterraneo bcn, good pizza, good paella, best pizza in bcn, best paella in bcn",
    },
  ],
  // script: [
  //   {
  //     src: "https://www.googletagmanager.com/gtag/js?id=G-5Z4QF52JJ5",
  //     async: true,
  //     crossorigin: "anonymous",
  //   },
  //   {
  //     src: "/js/analytics.js",
  //   },
  // ],
});
</script>

<style lang="scss" scoped></style>
