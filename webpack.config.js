const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //  -> ADDED IN THIS STEP

const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

module.exports = {
  entry: [path.join(paths.JS, "app.js")],
  output: {
    path: paths.DIST,
    filename: "bundle.js"
  },
  plugins: [new ExtractTextPlugin("style.bundle.css")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: paths.SRC
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
