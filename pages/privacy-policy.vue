<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto prose prose-lg">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
        <p>When you visit Kimono Kitchen, we may collect certain information about your device and your visit, including:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages you visit</li>
          <li>Time and date of your visit</li>
          <li>Contact information you provide through our forms</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Improve our website and services</li>
          <li>Communicate with you about reservations and inquiries</li>
          <li>Send you updates about our restaurant (with your consent)</li>
          <li>Comply with legal obligations</li>
        </ul>
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