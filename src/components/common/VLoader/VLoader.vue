<template>
  <div class="v-loader">
    <div
      class="circle"
      :style="circleStyle"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { StyleValue } from 'vue';
import type { VLoaderProps } from './types';

const props = defineProps<VLoaderProps>();

const circleStyle = computed<StyleValue>(() => {
  return {
    height: props.size && `${props.size}px`,
    width: props.size && `${props.size}px`,
    color: props.color,
    animationDuration: props.duration ? `${props.duration}ms` : undefined,
  };
});
</script>

<style lang="scss">
$loader: #000;

.v-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > .circle {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: $loader;
    animation: v-loader-animation 1s linear infinite;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: conic-gradient(from 180deg at 50% 50%, #0000 0deg, currentColor 360deg);
      mask: radial-gradient(farthest-side, #0000 71%, #000 0);
    }
  }
}

@keyframes v-loader-animation {
  100% {
    transform: rotate(360deg);
  }
}
</style>
