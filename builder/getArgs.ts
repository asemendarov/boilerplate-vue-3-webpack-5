import minimist from 'minimist';
import type { BuildArgs } from '@/types/builder';
import type { Opts } from 'minimist';

const config: Opts = {
  alias: {
    mode: 'm',
    analyze: 'a',
  },
  default: {
    mode: 'production',
    analyze: false,
  },
};

export default function getArgs(): BuildArgs {
  return minimist(process.argv.slice(2), config) as BuildArgs;
}
