<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <button @click="changeHandler">change</button>
    <h1>{{ $t('message.hello') }}</h1>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

function changeHandler() {
  locale.value = locale.value === 'zh-tw' ? 'en' : 'zh-tw'
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
