<template>
  <div
    class="text-white py-2 md:py-4 px-4 md:px-8 flex justify-between items-center fixed"
  >
    <img src="/logo.png" alt="" class="w-16 h-16 md:h-18 md:w-18 rounded-full bg-white" />
    <div class="relative">
      <Button
        class="text-black bg-white font-semibold hover:text-gray-200 hover:bg-red-500 transition-colors uppercase"
        @click="showLanguageSelector = !showLanguageSelector"
        size="sm"
      >
        {{ fullLanguage }}
      </Button>
      <div
        v-if="showLanguageSelector"
        class="absolute top-full mt-2 r-0 bg-white rounded-md shadow-lg p-2"
      >
        <ul class="flex gap-4 flex-col">
          <li
            v-for="language in languages"
            :key="language"
            class="pr-6 hover:bg-gray-200 flex gap-4 items-center cursor-pointer border-0"
            @click.prevent="changeLanguage(language)"
          >
            <div href="#" class="text-lg text-black flex gap-3">
              <span>
                {{ language }}
              </span>
              <img
                class="w-6"
                :src="`/country-flag/${language}.svg`"
                alt="languange country flag"
              />
            </div>
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

const fullLanguage = computed(() => {
  return props.currentLanguage === "en" ? "English" : "Español";
});

const changeLanguage = (language: string) => {
  console.log(language);
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

a {
  text-decoration: none;
  color: #333;
  &:hover {
    color: #555;
  }
}
</style>
