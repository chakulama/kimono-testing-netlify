<template>
  <NuxtPage />
</template>

<script setup>
useHead({
  title: "Kimono Kitchen",
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
        "Kimono Kitchen Ibiza",
    },
    {
      name: "keywords",
      content:
        "restaurante sushi ibiza, sushi ibiza, japonés ibiza, mejor sushi ibiza",
    },
  ]
});
</script>

<style lang="scss" scoped></style>
