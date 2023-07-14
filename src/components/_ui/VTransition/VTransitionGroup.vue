<template>
  <TransitionGroup v-bind="transitionGroupParams">
    <slot />
  </TransitionGroup>
</template>

<script lang="ts" setup>
import './styles.scss';
import { computed } from 'vue';
import { expandParams } from './mixins';
import type { VTransitionGroupProps, VTransitionName } from './types';

const props = withDefaults(defineProps<VTransitionGroupProps>(), {
  persisted: undefined,
  appear: undefined,
  css: undefined,
});

defineOptions({ inheritAttrs: false });

const transitionGroupParams = computed(() => {
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
