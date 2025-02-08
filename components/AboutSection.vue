<template>
  <section class="px-8 md:px-16 md:mt-36 gap-4 mb-16">
    <div class="flex justify-between items-center">
      <div class="about-text max-w-5xl">
        <h2 class="about-title">{{ title }}</h2>
        <p class="about-description">{{ description }}</p>
      </div>
      <div class="about-image hidden md:block">
        <img :src="image" :alt="title" class="w-56 rounded-md" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<style scoped>
.about-section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text {
  padding-right: 2rem;
}

.about-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: white;
}


@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text {
    padding-right: 0;
  }
}
</style>
