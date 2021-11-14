const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const dotenv = require('dotenv');
// const env = dotenv.config().parsed;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

module.exports = (env = 'development') => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
},
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                "@babel/preset-env",
              ["@babel/preset-react", {"runtime": "automatic"}]
            ],
            plugins: [
              // 'react-html-attrs',
              'transform-class-properties',
            ]
          }
        }
      },{
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },{
          test: /\.(jpg|jpeg|png|gif|webp)$/,
          exclude: /node_modules/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
              },
          }],
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv({
      path: './.env' // Path to .env file (this is the default)
    }),
    // new CopyWebpackPlugin([{ from: 'public', to: 'public' }]),
    // new webpack.DefinePlugin({
    //   'process.env.URL_API': JSON.stringify(process.env.URL_API)
    // }),
  ]
});