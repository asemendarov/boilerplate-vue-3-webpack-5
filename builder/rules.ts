import { loader as MiniCssExtractLoader } from 'mini-css-extract-plugin';
import type { Target } from '@/types/builder';
import type { RuleSetRule, RuleSetUseItem } from 'webpack';

function getCssLoaders(isDev: boolean): RuleSetUseItem[] {
  return [
    ...[isDev ? 'vue-style-loader' : MiniCssExtractLoader],
    'css-loader',
    'postcss-loader',
  ];
}

export function getRules(target: Target): Rules {
  const isDev = target.mode === 'development';

  const rules: Rules = [{
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
  }];

  rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });

  rules.push({
    test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'img/[name].[hash:8].[ext]',
    },
  });

  rules.push({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[hash:8].[ext]',
    },
  });

  rules.push({
    test: /\.css$/,
    use: getCssLoaders(isDev),
  });

  rules.push({
    test: /\.s[ac]ss$/,
    use: [
      ...getCssLoaders(isDev),
      'sass-loader',
    ],
  });

  return rules;
}

type Rules = (RuleSetRule | '...')[];
