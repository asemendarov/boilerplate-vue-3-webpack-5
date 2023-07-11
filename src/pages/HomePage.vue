<template>
  <div>
    <div>Page: "{{ route.name }}"</div>
    <div>
      <div>Test i18n. Msg: {{ i18n.t('hello') }}</div>
      <button @click="onTestChangeLanguageBtnClick">
        Click Me
      </button>
    </div>
    <div>
      <div>Test Api</div>
      <button @click="onTestApiBtnClick">
        Click Me
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useExampleStore } from '@/store/examples';
import { changeLanguage, LanguageCode, useI18n, currentLanguageIs } from '@/i18n';

const route = useRoute();
const i18n = useI18n();

const exampleStore = useExampleStore();

async function onTestChangeLanguageBtnClick() {
  if (currentLanguageIs(LanguageCode.RU)) {
    changeLanguage(LanguageCode.EN);
  } else {
    changeLanguage(LanguageCode.RU);
  }
}

async function onTestApiBtnClick() {
  await exampleStore.loadExampleList();
}
</script>
