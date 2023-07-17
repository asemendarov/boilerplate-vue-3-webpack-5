<template>
  <TransitionGroup v-bind="params">
    <slot />
  </TransitionGroup>
</template>

<script lang="ts" setup>
import './styles.scss';
import { useTransitionMixedParams } from './composables';
import type { VTransitionGroupProps } from './types';

const props = withDefaults(defineProps<VTransitionGroupProps>(), {
  persisted: undefined,
  appear: undefined,
  css: undefined,
});

defineOptions({ inheritAttrs: false });

const params = useTransitionMixedParams(props);
</script>
