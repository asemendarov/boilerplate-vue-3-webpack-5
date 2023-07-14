import path from 'path';

export const webpackConfigDir = path.resolve(__dirname, '../webpack.config.ts');

export const srcDir = path.resolve(__dirname, '../src');
export const distDir = path.resolve(__dirname, '../dist');
export const publicDir = path.resolve(__dirname, '../public');

export const templateDir = path.join(publicDir, 'index.html');
export const appDir = path.join(srcDir, 'main.ts');
export const uiDir = path.join(srcDir, 'components', '_ui');
