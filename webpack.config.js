
import path from 'path';
import zlib from 'zlib';

import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

var distFolder = process.cwd()+"/dist";

const options = {
  extensions: [`js`, `jsx`,`cjs`],
  exclude: [
    `/node_modules/`,
    `/bower_components/`
  ]
}

export default {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: distFolder,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
              },
            },
          ]
        },
      {
        test: /\.(js|jsx|cjs)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./index.html'),
        }),
        new ESLintPlugin(options),
        new CompressionPlugin({
          filename: "[path][base].br",
          algorithm: "brotliCompress",
          test: /\.(js|css|html|svg)$/,
          compressionOptions: {
            params: {
              [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            },
          },
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: true,
        }),

        new CompressionPlugin({
          deleteOriginalAssets: true,
          test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
          compressionOptions: {
            numiterations: 15,
          },
          algorithm(input, compressionOptions, callback) {
            return zopfli.gzip(input, compressionOptions, callback);
          },
        })
    ]
};