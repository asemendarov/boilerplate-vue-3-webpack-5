import { spawn } from 'child_process';
import { webpackConfigDir } from './paths';
import type { SpawnOptions } from 'child_process';

const CONFIG = `--config ${webpackConfigDir}`;
const ENV = '--env';

const opts: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
};

const [,, param, ...args] = process.argv;

function throwEnvs() {
  // eslint-disable-next-line sonarjs/no-nested-template-literals
  return args[0] ? `${ENV} ${args.join(` ${ENV} `)}` : '';
}

function getCommand() {
  const isDev = param === 'serve';
  return isDev
    ? `webpack serve ${CONFIG} --mode=development ${throwEnvs()}`
    : `webpack ${CONFIG} --mode=production ${throwEnvs()}`;
}

spawn(getCommand(), [], opts);
