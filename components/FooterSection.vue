<template>
  <div class="flex justify-center py-8">
    <div class="flex gap-4 flex-col items-center">
      <a
        href="https://www.instagram.com/restaurantemediterraneobcn/"
        target="_blank"
        class="transform transition-transform duration-300 hover:scale-110 font-bold"
      >
        <svg
          class="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <div class="flex items-center gap-4">
        <span class="text-white font-bold"> {{ copyRightText }} </span>
        <a
          class=" text-white hover:underline hover:text-gray-500 hidden"
          color="white"
          href="mailto:untitledev.np@gmail.com"
        >
          Developed by untitledev.np
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const copyRightText = computed(() => `© ${currentYear} Restaurante Mediterraneo`);
</script>

<style scoped></style>
