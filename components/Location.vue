<template>
  <div class="container flex justify-center my-12 px-4 text-white">
    <div class="flex items-center gap-12 flex-col md:flex-row">
      <!-- Map with hover effect and border -->
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7048346839088!2d2.213672776768759!3d41.408249171297285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a35af62e35bd%3A0xa94463a8a06ddddf!2sRistorante%20Mediterrani!5e1!3m2!1sen!2ses!4v1732905446974!5m2!1sen!2ses"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="relative w-[600px] rounded-lg shadow-xl transform transition duration-500 hover:scale-[1.02]"
        ></iframe>
      </div>

      <!-- Contact Information -->
      <div class="mt-4 text-center space-y-6">
        <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
         {{contact?.title}}
        </h2>

        <!-- Phone Number -->
        <a 
          :href="`tel:${contact?.phone}`" 
          class="group flex items-center justify-center gap-3 text-xl font-semibold hover:text-pink-400 transition-all duration-300 ease-in-out"
        >
          <PhoneIcon class="h-6 w-6 group-hover:animate-bounce" />
          <span class="group-hover:translate-x-1 transition-transform duration-300">
            {{ contact?.phone }}
          </span>
        </a>

        <!-- Email -->
        <a 
          :href="`mailto:${contact?.email}`" 
          class="group flex items-center justify-center gap-3 text-xl font-semibold hover:text-purple-400 transition-all duration-300 ease-in-out"
        >
          <EnvelopeIcon class="h-6 w-6 group-hover:animate-bounce" />
          <span class="group-hover:translate-x-1 transition-transform duration-300">
            {{ contact?.email }}
          </span>
        </a>

        <!-- Schedule Section (Uncommented and Styled) -->
        <!-- <div class="mt-8 p-6 backdrop-blur-sm bg-white/10 rounded-lg transform transition duration-500 hover:scale-105">
          <h3 class="text-2xl font-bold mb-4">{{ schedule?.title }}</h3>
          <ul class="space-y-3">
            <li
              v-for="(info, index) in schedule?.dateInfo"
              :key="index"
              class="text-lg flex flex-col"
            >
              <span class="font-semibold text-pink-300">{{ info.day }}</span>
              <span class="text-purple-200">{{ info.hours }}</span>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'

interface ContactInfo {
  phone: string;
  email: string;
  title: string;
}

const props = defineProps<{
  contact: ContactInfo;
}>();
</script>

<style scoped>
.container {
  perspective: 1000px;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
