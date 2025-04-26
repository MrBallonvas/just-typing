const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /sw.ts/],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/static", to: "static" },
        { from: "./src/sw.js", to: "sw.js" },
        { from: "./manifest.json", to: "manifest.json" },
      ],
    }),
  ],
  devServer: {
    headers: {
      "Cache-Control": "no-store",
    },
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/",
    },
    port: 9000,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};
