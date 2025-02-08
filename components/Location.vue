<template>
  <div class="container flex justify-center my-12 px-4 text-white">
    <div class="flex items-center gap-12 flex-col md:flex-row">
      <div class="relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4017923278343!2d1.5343677999999998!3d38.9855748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129915f5ef148979%3A0x51b844944ba0476e!2sKimono%20Kitchen%20In%20Ibiza!5e1!3m2!1sen!2ses!4v1739037791866!5m2!1sen!2ses"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="relative w-[600px] rounded-lg shadow-xl transform transition duration-500 hover:scale-[1.02]"
        ></iframe>
      </div>

      <!-- Contact Information -->
      <div class="mt-4 text-center space-y-6">
        <h2
          class="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          {{ contact?.title }}
        </h2>

        <!-- Phone Number -->
        <a
          :href="`tel:${contact?.phone}`"
          class="group flex items-center justify-center gap-3 text-xl font-semibold hover:text-red-500 transition-all duration-300 ease-in-out"
        >
          <PhoneIcon class="h-6 w-6 group-hover:animate-bounce" />
          <span class="group-hover:translate-x-1 transition-transform duration-300">
            {{ contact?.phone }}
          </span>
        </a>

        <!-- Email -->
        <a
          :href="`mailto:${contact?.email}`"
          class="group flex items-center justify-center gap-3 text-xl font-semibold hover:text-red-500 transition-all duration-300 ease-in-out"
        >
          <EnvelopeIcon class="h-6 w-6 group-hover:animate-bounce" />
          <span class="group-hover:translate-x-1 transition-transform duration-300">
            {{ contact?.email }}
          </span>
        </a>

        <!-- Schedule Section (Uncommented and Styled) -->
        <div class="mt-8 p-6 backdrop-blur-sm bg-white/10 rounded-lg transform transition duration-500 hover:scale-105">
          <h3 class="text-2xl font-bold mb-4">{{ schedule?.title }}</h3>
          <ul class="space-y-3">
            <li
              v-for="(info, index) in schedule?.dateInfo"
              :key="index"
              class="text-lg flex flex-col"
            >
              <span class="font-semibold text-red-500">{{ info.day }}</span>
              <span class="text-white">{{ info.hours }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";

interface ContactInfo {
  phone: string;
  email: string;
  title: string;
}
interface Schedule {
  title: string;
  dateInfo: Array<{ day: string; hours: string }>;
}

const props = defineProps<{
  contact: ContactInfo;
  schedule: Schedule;
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
