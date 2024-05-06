import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, appName }: BuildOptions): webpack.WebpackPluginInstance[] {

  return [
    new HTMLWebpackPlugin({
      title: appName,
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ]
}
