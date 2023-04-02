const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const mode = production ? 'production' : 'development';

module.exports = {
  mode,
/*
  stats: {
    all: false, // disable all the stats
    hash: true, // compilation hash
    entrypoints: true, // entrypoints
    chunks: true, // chunks
    chunkModules: true, // modules
    reasons: true, // modules reasons
    ids: true, // IDs of modules and chunks (webpack 5)
    dependentModules: true, // dependent modules of chunks (webpack 5)
    chunkRelations: true, // chunk parents, children and siblings (webpack 5)
    cachedAssets: true, // information about the cached assets (webpack 5)

    nestedModules: true, // concatenated modules
    usedExports: true, // used exports
    providedExports: true, // provided imports
    assets: true, // assets
    chunkOrigins: true, // chunks origins stats (to find out which modules require a chunk)
    version: true, // webpack version
    builtAt: true, // build at time
    timings: true, // modules timing information
    performance: true, // info about oversized assets
  },
  */

  devtool: production ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  externals: true
    ? {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    : {},
  entry: './src/preview.tsx',
  output: {
    crossOriginLoading: 'anonymous',
    // path: path.join(__dirname, 'dist/web'),
    path: path.join(process.cwd(), 'dist/web'),
    filename: production
      ? 'scripts/[name]-[chunkhash].js'
      : 'scripts/[name].js',
    chunkFilename: production
      ? 'scripts/[name]-[chunkhash].js'
      : 'scripts/[name].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 'auto',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // production !== 'production'
          // ? 'style-loader'
          // : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
        // exclude: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.template.html',
      inject: true,
    }),
  ],
};
