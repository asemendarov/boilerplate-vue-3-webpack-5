import { resolve } from 'path';
import { spawn } from 'child_process';
import type { SpawnOptions } from 'child_process';

const configPath = resolve(__dirname, 'builder/webpack.config.ts');
const CONFIG = `--config ${configPath}`;
const ENV = '--env';

const opts: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
};

const [,, param, ...args] = process.argv;

function throwEnvs() {
  return args[0] ? `${ENV} ${args.join(` ${ENV} `)}` : '';
}

function getCommand() {
  const isDev = param === 'serve';
  return isDev
    ? `webpack serve ${CONFIG} --mode=development ${throwEnvs()}`
    : `webpack ${CONFIG} --mode=production ${throwEnvs()}`;
}

spawn(getCommand(), [], opts);
