import type { ParsedArgs } from 'minimist';

export type Mode = 'development' | 'production';

export type BuildArgs = ParsedArgs & {
  mode: Mode;
  analyze: boolean;
};

export type Env = {
  APP_MODE: Mode;
  BASE_URL: string;
  VUE_APP_TITLE: string;
  VUE_APP_LANGUAGE: string;
};

export type Target = {
  mode: Mode;
  bundleAnalyze: boolean;
  env: Env;
};
