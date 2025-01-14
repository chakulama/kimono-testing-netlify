<template>
  <div class="bg-black text-white">
    <div class="gap-4 justify-end hidden">
      <Button @click="changeLanguage('en')">English</Button>
      <Button @click="changeLanguage('es')">Español</Button>
    </div>
    <HeroSection :heroSectionInfo="heroSectionInfo" />
    <!-- <AboutSection></AboutSection> -->
    <GallerySection :images="gallerySection"></GallerySection>
    <menu-section/>
    <Location :schedule="location" :contact="contact"/>
    <footer-section/>
  </div>
</template>

<script setup lang="ts">
import useLanguage from "@/composables/useLanguage";
const { languageData, loadLanguage, currentLanguage } = useLanguage();
const heroSectionInfo = ref()
const gallerySection = ref()
const location = ref()
const contact = ref()

gallerySection.value = [
  "/images/gallery/6.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/1.jpg",
]

const changeLanguage = async(lang: string) => {
  await loadLanguage(lang)
  heroSectionInfo.value = languageData.value?.hero
  location.value = languageData.value?.schedule
  contact.value = languageData.value?.contact
};
onMounted( async () => {
  await loadLanguage("en")
  heroSectionInfo.value = languageData.value?.hero
  location.value = languageData.value?.schedule
  contact.value = languageData.value?.contact
});
</script>

<style scoped></style>
