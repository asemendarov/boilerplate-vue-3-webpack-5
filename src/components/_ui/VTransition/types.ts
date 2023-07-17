import type { TransitionProps, TransitionGroupProps } from 'vue';

export type VTransitionName = 'expand' | 'fade-anim';

type VTransitionDefaultProps = Omit<TransitionProps, 'name'> & {
  name: Exclude<VTransitionName, 'expand'>;
};

type VTransitionGroupDefaultProps = Omit<TransitionGroupProps, 'name'> & {
  name: Exclude<VTransitionName, 'expand'>;
};

type VTransitionExpandProps = {
  name: Extract<VTransitionName, 'expand'>;
};

type VTransitionGroupExpandProps = Pick<TransitionGroupProps, 'tag'> & {
  name: Extract<VTransitionName, 'expand'>;
};

export type VTransitionProps = VTransitionDefaultProps | VTransitionExpandProps;
export type VTransitionGroupProps = VTransitionGroupDefaultProps | VTransitionGroupExpandProps;

export type VTransitionMixin = TransitionProps | TransitionGroupProps;
export type VTransitionMixinMatcher = Partial<Record<VTransitionName, VTransitionMixin>>;

export type VTransitionPropsForMixing = VTransitionProps | VTransitionGroupProps;
