<template>
  <div class="category-section w-full p-4 md:p-8 mb-24">
    <Swiper
      ref="mySwiper"
      :slides-per-view="1.5"
      :height="500"
      :navigation="true"
      :modules="[SwiperGrid, SwiperNavigation]"
      :spaceBetween="10"
      :speed="1000"
      :breakpoints="breakpoints"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          alt="image gallery"
          loading="lazy"
          class="w-full rounded-md shadow-lg h-[200px] md:h-[300px] object-cover cursor-pointer"
          @click="openModal(image)"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Image Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      @click="closeModal"
    >
      <div class="relative max-w-[90vw] max-h-[90vh]">
        <img
          :src="selectedImage"
          alt="full size image"
          class="max-w-full max-h-[90vh] object-contain"
        />
        <button @click="closeModal" class="absolute top-4 right-4 text-white text-2xl">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: Array
});

const domainUrl = "http://localhost:8090";
const mySwiper = ref(null);

const breakpoints = {
  430: {
    slidesPerView: 1.5,
    spaceBetween: 10
  },
  768: {
    slidesPerView: 3.5,
    spaceBetween: 10
  },
  1025: {
    slidesPerView: 4.5,
    spaceBetween: 10
  },
  1340: {
    slidesPerView: 4.5,
    spaceBetween: 10
  }
};

const showModal = ref(false);
const selectedImage = ref("");

const openModal = (image) => {
  selectedImage.value = image;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = "";
};
</script>

<style lang="scss">
.category-section {
  &__title {
    font-size: 2.8rem;
    font-weight: bold;
    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
}
.swiper-button-next,
.swiper-button-prev {
  padding: 20px;
  width: 20px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  background-color: black;
  border-radius: 50%;
  color: white !important;
  fill: white !important;
  transition: padding 0.3s cubic-bezier(0.38, 0.41, 0.27, 1);
  &::after {
    font-size: 16px;
  }
  &:hover {
    padding: 22px;
  }
}
.swiper-slide {
  height: auto;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
