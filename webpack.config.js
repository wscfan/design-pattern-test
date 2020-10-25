const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index11.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "./release/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, './release'),
    open: true,
    port: 9000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8880'
      }
    }
  }
}