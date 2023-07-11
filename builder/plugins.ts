import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { DefinePlugin, ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import chalk from 'chalk';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { publicDir, templateDir } from './paths';
import type { Target } from '@/types/builder';
import type { Compiler, WebpackPluginInstance } from 'webpack';

export function getPlugins(target: Target): Plugins {
  const plugins: Plugins = [
    new HtmlWebpackPlugin({
      template: templateDir,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
      },
    }),
  ];

  plugins.push(new VueLoaderPlugin());

  if (target.bundleAnalyze) plugins.push(new BundleAnalyzerPlugin());

  if (target.mode === 'production') {
    plugins.push(
      new MiniCssExtractPlugin(
        {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
          // флаг для решения бага
          // https://stackoverflow.com/questions/51971857/mini-css-extract-plugin-warning-in-chunk-chunkname-mini-css-extract-plugin-con
          ignoreOrder: true,
        },
      ),
    );
  }

  const envVariables = Object.entries(target.env).reduce((acc, [key, value]) => {
    acc[key] = JSON.stringify(value);
    return acc;
  }, {} as Record<string, string>);

  plugins.push(
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      ...envVariables,
    }),
  );

  plugins.push(
    new ProgressPlugin({
      handler(percentage, message, ...args) {
        const perc = chalk.hex('#23d18b')(`${Math.round(+percentage * 100)}%`);

        // eslint-disable-next-line no-console
        console.info(`${perc} -->`, message, ...args);
      },
    }),
  );

  plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicDir,
          globOptions: {
            ignore: [
              '**/*.DS_Store',
              '**/index.html',
            ],
          },
        },
      ],
    }),
  );

  return plugins;
}

type Plugins = (
  | ((this: Compiler, compiler: Compiler) => void)
  | WebpackPluginInstance
)[];
