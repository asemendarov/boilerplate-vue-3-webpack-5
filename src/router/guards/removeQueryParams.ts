import type { NavigationGuardWithThis } from 'vue-router';

export const removeQueryParams: NavigationGuardWithThis<undefined> = (to) => {
  if (Object.keys(to.query).length) {
    return {
      path: to.path,
      query: {},
      hash: to.hash,
    };
  }

  return to;
};

export default removeQueryParams;
