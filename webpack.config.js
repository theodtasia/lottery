// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = "style-loader";
const { HotModuleReplacementPlugin } = require("webpack");

const config = 
{
  entry: ["babel-polyfill", join(__dirname, "/src/index.js")],
  output: {
  path: join(__dirname, "build"),
  filename: "[name].js",
},
  devServer: {
    open: true,
    host: "localhost"
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "index.css" }),
    new VueLoaderPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(
      {
      showErrors: true,
      cache: true,
      title: "Casino",
      template: join("./public/index.html"),
      
    }),
  ],
  performance: 
  {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
 
  
  module: 
  {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset"
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        
        vendor: {  
         chunks: 'initial',
         name: 'vendor',
         test: 'vendor',
         enforce: true
        },
      },
    },
  },
};
 
module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};