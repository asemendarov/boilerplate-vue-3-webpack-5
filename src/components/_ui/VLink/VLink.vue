<template>
  <a
    v-if="isExternalLink"
    target="_blank"
    rel="noopener noreferrer"
    :href="(props.to as string)"
    v-bind="attrs"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    v-bind="props"
  >
    <slot />
  </RouterLink>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import type { VLinkProps } from './types';

const props = defineProps<VLinkProps>();
const attrs = useAttrs();

defineOptions({ inheritAttrs: false });

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>
