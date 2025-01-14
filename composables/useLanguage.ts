import { ref } from 'vue'

export default function useLanguage() {
  const languageData = ref<Record<string, string>>({})
  const currentLanguage = ref('')

  const loadLanguage = async (lang: string) => {
    try {
      currentLanguage.value = lang
      // Dynamically import the language JSON based on the selected language
      const data = await import(`../assets/data/data-${lang}.json`)
      console.log('data', data)
      languageData.value = data.default
    } catch (error) {
      console.error(`Failed to load language: ${lang}`, error)
      languageData.value = {}
    }
  }

  return {
    languageData,
    currentLanguage,
    loadLanguage
  }
}
