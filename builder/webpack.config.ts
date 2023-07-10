import getDevServerConfig from './getDevServerConfig';
import getPlugins from './getPlugins';
import getRules from './getRules';
import { distDir, srcDir, appDir, uiDir } from './paths';
import getArgs from './getArgs';
import type { Configuration } from 'webpack';
import type { Target } from '@/types/builder';

const JS_FILE_NAME = '[name].[contenthash:8].js';
const BASE_URL = '/';

const { mode, analyze: bundleAnalyze } = getArgs();
const isDev = mode === 'development';

const target: Target = {
  mode,
  bundleAnalyze,
  env: {
    APP_MODE: mode,
    BASE_URL,
    VUE_APP_TITLE: 'Boilerplate (@asemendarov)',
    VUE_APP_LANGUAGE: 'ru',
  },
};

const alias = {
  '@': srcDir,
  '@ui': uiDir,
};

const output: Configuration['output'] = {
  path: distDir,
  filename: `js/${JS_FILE_NAME}`,
  publicPath: target.env.BASE_URL,
  chunkFilename: `js/${JS_FILE_NAME}`,
  clean: true,
};

const optimization: Configuration['optimization'] = {
  runtimeChunk: 'single',
  chunkIds: 'named',

  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        filename: `js/vendors/${JS_FILE_NAME}`,
      },
      store: {
        test: /[\\/]stores[\\/]/,
        filename: `js/stores/${JS_FILE_NAME}`,
        enforce: true,
      },
    },
  },
};

const config: Configuration = {
  mode,
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  entry: {
    app: appDir,
  },
  resolve: {
    alias,
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
  },
  output,
  module: {
    rules: getRules(target),
  },
  plugins: getPlugins(target),
  devServer: getDevServerConfig(target),
  optimization,
};

export default config;
