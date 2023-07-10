<template>
  <div>
    <div>Page: "{{ route.name }}"</div>
    <div>
      <div>Test i18n. Msg: {{ lz.t('hello') }}</div>
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
import { changeLanguage, LanguageCode, useLocalization, currentLanguageIs } from '@/localization';

const route = useRoute();
const lz = useLocalization();

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
