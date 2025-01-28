<template>
  <div class="flex justify-between flex-col-reverse md:flex-row px-8">
    <div
      class="text-container z-20 flex flex-col px-2 md:px-8 md:mt-36 gap-4 mb-16 animate-fadeIn text-white"
    >
      <h1 class="text-4xl md:text-8xl font-bold mt-4 animate-pulse">
        {{ heroSectionInfo?.title }}
      </h1>
      <span class="text-lg md:text-2xl leading-5 tracking-wide animate-pulse">
        {{ heroSectionInfo?.description }}</span
      >
      <slot></slot>
    </div>
    <img
      v-if="heroSectionInfo?.imagePath"
      class="rounded-md md:w-3/4 max-h-[500px] md:max-h-[600px] object-cover"
      loading="lazy"
      :src="heroSectionInfo.imagePath"
    />
    <Skeleton v-else class="h-[720px] w-[880px]" />
  </div>
</template>

<script setup>
const props = defineProps({
  heroSectionInfo: Object
});
</script>

<style lang="scss" scoped>
.hero-section {
  height: 85vh;
  @apply flex flex-col justify-center relative;
  img {
    height: 100%;
    object-fit: cover;
  }
}
.text-container {
  animation: moveTop 2s ease-out;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #1010108c;
  top: 0;
  left: 0;
  z-index: 1;
  bottom: 0;
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}
@keyframes hero-image {
  25% {
    opacity: 1;
    scale: 1;
  }
  100% {
    opacity: 0;
    scale: 1.4;
  }
}
@keyframes over-lay {
  25% {
    opacity: 1;
    scale: 1;
  }
  60%,
  100% {
    opacity: 0;
    scale: 1.2;
  }
}
@keyframes moveTop {
  0% {
    opacity: 0.2;
    transform: translateY(50px);
  }

  80% {
    opacity: 0.7;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0px);
  }
}
</style>
