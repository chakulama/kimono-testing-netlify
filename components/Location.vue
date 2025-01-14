<template>
  <div class="container flex justify-center my-8 px-4">
    <div class="flex items-center gap-8 flex-col md:flex-row">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7048346839088!2d2.213672776768759!3d41.408249171297285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a35af62e35bd%3A0xa94463a8a06ddddf!2sRistorante%20Mediterrani!5e1!3m2!1sen!2ses!4v1732905446974!5m2!1sen!2ses"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full md:w-[500px]"
      ></iframe>
      <div class="mt-4 text-center">
        <h2 class="text-4xl font-bold mb-4">{{ schedule?.title }}</h2>
        <ul class="space-y-2">
          <li
            v-for="(info, index) in schedule?.dateInfo"
            :key="index"
            class="text-lg flex flex-col"
          >
            <span class="font-semibold">{{ info.day }}:</span>
            <span class="">{{ info.hours }}</span>
          </li>
        </ul>
        <a :href="contact?.phone" class="mt-4 text-xl font-bold flex gap-2 justify-center hover:scale-110 transition-transform duration-300">
          <img class="rounded-xl h-[28px]" src="/phone2.png" alt="" />
          <span>{{ contact?.title }}</span></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  schedule: Object,
  contact: Object,
});
</script>

<style scoped></style>
