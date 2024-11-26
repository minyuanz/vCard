import { defineStore } from 'pinia'
import { ref } from 'vue'
import { default_language } from '@/constant/language.js'

const useLanguageStore = defineStore('useLanguageStore', () => {
  const localed_language = ref(default_language)

  return { localed_language }
})

export default useLanguageStore
