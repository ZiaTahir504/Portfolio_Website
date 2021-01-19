const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const distPath = path.join(__dirname, './client/dist');
const srcPath = path.join(__dirname, './client/src/Index.jsx');

module.exports = {
    mode: 'production',
    entry: srcPath,
    output: {
      path: distPath,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: ['file-loader'],
        }
      ],
    },
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.jsx', '.js'],
      fallback: {
        path: require.resolve('path-browserify'),
        fs: false,
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed),
      }),
    ],
  };
  