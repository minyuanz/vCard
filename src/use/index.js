import pinia from '@/stores'
import router from '@/router'
import i18n from '@/language'

function appUse(app) {
  app.use(pinia)
  app.use(router)
  app.use(i18n)
}

export default appUse
