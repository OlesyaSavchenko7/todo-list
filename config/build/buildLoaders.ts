import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.css$/i,
    use: [
      'style-loader',
      'css-loader'
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    cssLoader,
    typescriptLoader,
  ]
}
