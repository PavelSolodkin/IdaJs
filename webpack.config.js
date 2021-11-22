const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
    overlay: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node-modules/,
      },
      {
        test: /\.(png|jpeg|gif|ttf|woff|woff2)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
