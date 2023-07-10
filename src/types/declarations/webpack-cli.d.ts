import 'webpack-cli';
import type { Mode } from '../builder';

declare module 'webpack-cli' {
  interface Argv {
    mode: Mode;
  }
}
