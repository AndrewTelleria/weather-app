const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
