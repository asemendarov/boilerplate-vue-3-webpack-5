import type { RouterLinkProps } from 'vue-router';

export type VLinkProps = RouterLinkProps & {
  inactiveClass?: string;
};
