const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.ts$/, use: "awesome-typescript-loader" },
      { test: /\.html$/, use: "html-loader" },
      { test: /\.styl$/, use: ["style-loader", "css-loader", "stylus-loader"] },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".html"],
    alias: {
      vue: "vue/dist/vue.min.js"
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "img/favicon/*", to: "" }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./index.template.html"
    })
  ],
};
