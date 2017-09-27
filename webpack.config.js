const path = require("path");
const webpack = require("webpack");
const glob = require("glob");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// Options for plugins
let cleanPaths = ["./src/*"];
let cleanOptions = {
  verbose: true,
  watch: true
};

// Config
const config = {
  context: path.resolve(__dirname),
  target: "web",
  entry: {
    linkify: "./linkify.js"
  },
  output: {
    path: path.resolve(__dirname),
    filename: "./src/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", { modules: false }]]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Simple progress bar
    new ProgressBarPlugin(),
    // Delete all old stuff on compile
    new CleanWebpackPlugin(cleanPaths, cleanOptions),
    // Something something scope hoisting webpack 3
    new webpack.optimize.ModuleConcatenationPlugin(),
    //new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      global: {}, // bizarre lodash(?) webpack workaround
      "global.GENTLY": false // superagent client fix
    })
  ]
};

process.noDeprecation = true;
module.exports = config;
