/* eslint-disable no-param-reassign */
import { computed } from 'vue';

import type { ComputedRef } from 'vue';

import type {
  VTransitionMixin,
  VTransitionMixinMatcher,
  VTransitionPropsForMixing,
} from './types';

function isHtmlElement(element: Element | HTMLElement): element is HTMLElement {
  return element instanceof HTMLElement;
}

/**
 * @see https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
 */
const expandParams: VTransitionMixin = {
  onAfterEnter(element) {
    if (!isHtmlElement(element)) return;

    element.style.height = 'auto';
  },

  onEnter(element) {
    if (!isHtmlElement(element)) return;

    const { width } = getComputedStyle(element);

    element.style.width = width;
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.height = 'auto';

    const { height } = getComputedStyle(element);

    element.style.width = 'initial';
    element.style.position = 'initial';
    element.style.visibility = 'initial';
    element.style.height = '0';

    // eslint-disable-next-line no-unused-expressions
    getComputedStyle(element).height;
    requestAnimationFrame(() => {
      element.style.height = height;
    });
  },

  onLeave(element) {
    if (!isHtmlElement(element)) return;

    const { height } = getComputedStyle(element);

    element.style.height = height;

    // eslint-disable-next-line no-unused-expressions
    getComputedStyle(element).height;
    requestAnimationFrame(() => {
      element.style.height = '0';
    });
  },
};

const mixinMatcher: VTransitionMixinMatcher = {
  expand: expandParams,
};

export const useTransitionMixedParams = <T extends VTransitionPropsForMixing>(props: T): ComputedRef<T> => {
  return computed(() => {
    const mixin = mixinMatcher[props.name] ?? {};

    return {
      ...props,
      ...mixin,
    };
  });
};
