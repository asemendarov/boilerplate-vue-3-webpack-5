<template>
  <Transition v-bind="params">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import './styles.scss';
import { useTransitionMixedParams } from './composables';
import type { VTransitionProps } from './types';

const props = withDefaults(defineProps<VTransitionProps>(), {
  persisted: undefined,
  appear: undefined,
  css: undefined,
});

defineOptions({ inheritAttrs: false });

const params = useTransitionMixedParams(props);
</script>
