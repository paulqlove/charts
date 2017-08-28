/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '../public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ['./index.js'],
  output: {
      filename: "bundle.js",
      path: path.resolve( "dist"),
      publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: resolve(__dirname, "src"),
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ ,query: { presets: ['es2015', 'react']}},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,query: { presets: ['es2015', 'react']}},
      { test: /\.scss$/, use: [ "style-loader", "css-loader"]}
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
