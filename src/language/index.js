import { createI18n } from 'vue-i18n'
import { default_language } from '@/constant/language.js'

const i18n = createI18n({
  legacy: false,
  locale: default_language,
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world',
      },
    },
    ja: {
      message: {
        hello: 'こんにちは、世界',
      },
    },
    'zh-tw': {
      message: {
        hello: '你好、世界',
      },
    },
  },
})

export default i18n
