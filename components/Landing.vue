<template>
  <div
    class="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
  >
    <Header
      class="relative z-50"
      :currentLanguage="currentLanguage"
      @languageChanged="changeLanguage"
    />
    <HeroSection :heroSectionInfo="heroSectionInfo">
      <div class="flex gap-4">
        <a
          :href="menu?.pdf"
          target="_blank"
          class="px-4 py-3 bg-red-500 hover:bg-red-700 transition-all duration-300 rounded-full text-white font-semibold overflow-hidden"
        >
          <span class="relative z-10">{{ menu?.title }}</span>
        </a>
        <a
          :href="menu?.mediodia"
          target="_blank"
          class="px-4 py-3 bg-red-500 hover:bg-red-700 transition-all duration-300 rounded-full text-white font-semibold overflow-hidden"
        >
          <span class="relative z-10">{{ menu?.subtitle }}</span>
        </a>
      </div>
    </HeroSection>
    <AboutSection
      :title="aboutSection?.title"
      :description="aboutSection?.description"
      :image="aboutSection?.imagePath"
    />
    <GallerySection :images="gallerySection" class="relative z-50"></GallerySection>
    <Location :contact="contact" :schedule="schedule" class="relative z-40" />
    <footer-section class="relative z-50" />
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div
        v-for="n in 20"
        :key="n"
        class="floating-sushi"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }"
      >
        🍣
      </div>
      <div
        v-for="n in 20"
        :key="`ramen-${n}`"
        class="floating-ramen"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }"
      >
        🍜
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLanguage from "@/composables/useLanguage";
const { languageData, loadLanguage, currentLanguage } = useLanguage();
const heroSectionInfo = ref();
const gallerySection = ref();
const location = ref();
const contact = ref();
const menu = ref();
const aboutSection = ref();
const schedule = ref();

gallerySection.value = [
  "/images/gallery/6.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/1.jpg"
];

const changeLanguage = async (lang: string) => {
  await loadLanguage(lang);
  heroSectionInfo.value = languageData.value?.hero;
  location.value = languageData.value?.schedule;
  contact.value = languageData.value?.contact;
  menu.value = languageData.value?.menu;
  aboutSection.value = languageData.value?.aboutSection;
  schedule.value = languageData.value?.schedule;
};
onMounted(async () => {
  await loadLanguage("en");
  heroSectionInfo.value = languageData.value?.hero;
  location.value = languageData.value?.schedule;
  contact.value = languageData.value?.contact;
  menu.value = languageData.value?.menu;
  aboutSection.value = languageData.value?.aboutSection;
  schedule.value = languageData.value?.schedule;
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");

.font-japanese {
  font-family: "Noto Sans JP", sans-serif;
}

.floating-sushi,
.floating-ramen {
  position: absolute;
  font-size: 2rem;
  animation: float linear infinite;
  opacity: .8;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

/* Add subtle hover effect to the logo */
img:hover {
  filter: drop-shadow(0 0 0.75rem rgba(239, 68, 68, 0.5));
}

/* Add a subtle text shadow to the main heading */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Custom animation for the coming soon text */
p {
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>
