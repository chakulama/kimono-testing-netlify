<template>
  <div class="text-white py-2 md:py-4 px-4 md:px-8 flex justify-between items-center">
    <img src="/logo.png" alt="" class="w-16 h-16 md:h-24 md:w-24 rounded-full bg-white" />
    <div class="relative">
      <Button
        class="text-white font-semibold hover:text-gray-200 transition-colors uppercase text-lg"
        @click="showLanguageSelector = !showLanguageSelector"
        size="sm"
      >
        {{ currentLanguage }}
      </Button>
      <div
        v-if="showLanguageSelector"
        class="absolute top-full mt-2 bg-white rounded-md shadow-lg p-2"
      >
        <ul>
          <li
            v-for="language in languages"
            :key="language"
            class="py-1 px-4 hover:bg-gray-200"
          >
            <a href="#" @click.prevent="changeLanguage(language)">{{
              language
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentLanguage: String;
}>();

const emit = defineEmits(["languageChanged"]);

const languages = ["en", "es"];
const showLanguageSelector = ref(false);

const changeLanguage = (language: string) => {
  emit("languageChanged", language);
  showLanguageSelector.value = false;
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
}

a {
  text-decoration: none;
  color: #333;
  &:hover {
    color: #555;
  }
}
</style>
