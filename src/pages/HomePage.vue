<template>
  <div class="home-page">
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
    <div>
      <div>Test Transition Expand</div>
      <VTransition name="expand">
        <pre v-if="state.isShowExpandItem">
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        </pre>
      </VTransition>
      <button @click="onTestTransitionExpandBtnClick">
        Click Me
      </button>
    </div>
    <div>
      <div>Test Transition Group Expand</div>
      <VTransitionGroup name="expand">
        <li
          v-for="item in state.expandList"
          :key="item"
        >
          {{ item }}
        </li>
      </VTransitionGroup>
      <button @click="onTestTransitionGroupExpandBtnClick">
        Click Me
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useExampleStore } from '@/store/examples';
import { changeLanguage, LanguageCode, useI18n, currentLanguageIs } from '@/i18n';
import { VTransition, VTransitionGroup } from '@ui/VTransition';

type State = {
  isShowExpandItem: boolean;
  expandList: string[];
};

const exampleStore = useExampleStore();
const route = useRoute();
const i18n = useI18n();

const state = reactive<State>({
  isShowExpandItem: false,
  expandList: [],
});

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

function onTestTransitionExpandBtnClick() {
  state.isShowExpandItem = !state.isShowExpandItem;
}

function onTestTransitionGroupExpandBtnClick() {
  state.expandList.push(`item ${state.expandList.length}`);
}
</script>

<style lang="scss">
.home-page {
  & > div {
    margin-bottom: 24px;
  }
}
</style>
