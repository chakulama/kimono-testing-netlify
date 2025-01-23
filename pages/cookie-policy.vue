<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto prose prose-lg">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">1. What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: To understand how visitors interact with our website</li>
          <li>Preference cookies: To remember your settings and preferences</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">3. Managing Cookies</h2>
        <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our website.</p>
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