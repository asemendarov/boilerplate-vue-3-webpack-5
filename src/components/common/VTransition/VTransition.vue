<template>
  <Transition v-bind="transitionParams">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import './styles.scss';
import { computed } from 'vue';
import { expandParams } from './mixins';
import type { VTransitionProps, VTransitionName } from './types';

const props = withDefaults(defineProps<VTransitionProps>(), {
  persisted: undefined,
  appear: undefined,
  css: undefined,
});

defineOptions({ inheritAttrs: false });

const transitionParams = computed(() => {
  const mixin = mixinParams(props.name);

  return {
    ...props,
    ...mixin,
  };
});

function mixinParams(name: VTransitionName) {
  if (name === 'expand') {
    return expandParams;
  }

  return {};
}
</script>
