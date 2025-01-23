<template>
  <footer class="bg-gray-900 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center gap-8">
        <!-- Social Media Section -->
        <div class="flex gap-6">
          <a
            href="https://www.instagram.com/kimonokitchenibiza/"
            target="_blank"
            class="transform transition-transform duration-300 hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <svg
              class="h-8 w-8 text-red-500 hover:text-red-400"
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
        </div>

        <!-- Legal Links -->
        <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors">
            Terms of Service
          </NuxtLink>
          <NuxtLink to="/cookie-policy" class="hover:text-white transition-colors">
            Cookie Policy
          </NuxtLink>
        </div>

        <!-- Copyright Section -->
        <div class="flex items-center gap-4 text-sm">
          <span class="text-gray-400"> {{ copyRightText }} </span>
          <a
            class="text-gray-400 hover:text-white transition-colors hidden"
            href="mailto:untitledev.np@gmail.com"
          >
            Developed by untitledev.np
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const copyRightText = computed(() => `© ${currentYear} Kimono Kitchen`);
</script>

<style scoped></style>
