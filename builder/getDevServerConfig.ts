import openInEditor from 'launch-editor-middleware';
import { distDir } from './paths';
import type { Configuration } from 'webpack-dev-server';
import type { Target } from '@/types/builder';

export default function getDevServerConfig(target: Target): Configuration {
  const config: Configuration = {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
    historyApiFallback: true,

    compress: true,
    hot: true,
    static: {
      directory: distDir,
      publicPath: target.env.BASE_URL,
    },

    client: {
      webSocketURL: 'auto://0.0.0.0/ws',
      progress: true,
    },

    setupMiddlewares(middlewares) {
      middlewares.unshift({
        path: '/__open-in-editor',
        middleware: openInEditor(),
      });

      return middlewares;
    },
  };

  return config;
}
