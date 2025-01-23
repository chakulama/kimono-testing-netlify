<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto prose prose-lg">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
        <p>By accessing and using Kimono Kitchen's website, you accept and agree to be bound by these Terms of Service.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">2. Use License</h2>
        <p>Permission is granted to temporarily access the materials on Kimono Kitchen's website for personal, non-commercial use only.</p>
        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Kimono Kitchen at any time.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">3. Disclaimer</h2>
        <p>The materials on Kimono Kitchen's website are provided on an 'as is' basis. Kimono Kitchen makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      </section>

      <section class="mb-8">
        <p class="text-sm text-gray-600">Last updated: {{ currentDate }}</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
</script> 