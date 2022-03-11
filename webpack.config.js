
import path from 'path';

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
      new ESLintPlugin(options), 
        new HtmlWebpackPlugin({
          template: path.resolve('./index.html'),
        }),
        
    ]
};