import type { NavigationGuardWithThis } from 'vue-router';

export const removeHash: NavigationGuardWithThis<undefined> = (to) => {
  if (to.hash) {
    return {
      path: to.path,
      query: to.query,
      hash: '',
    };
  }

  return to;
};

export default removeHash;
