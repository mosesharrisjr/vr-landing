const { resolve } = require('path');
let webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/lib',
    filename: 'bundle.js',
    publicPath: '/lib',
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //         warnings: false
  //     }
  //   })
  // ],
  resolve: {
    modules: [
      'node_modules',
      resolve(__dirname, 'custom_modules'),
      resolve(__dirname, 'src'),
      resolve(__dirname, 'config'),
    ],
    alias: {
      Modules: resolve(__dirname, 'src'),
      Config: resolve(__dirname, 'config'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader?modules&localIdentName=[name]--[local]__[hash:base64:5]', 'postcss-loader', 'sass-loader'],
      },
      {
        // can add filetypes here
        test: /\.(jpe?g|gif|png|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader'
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
