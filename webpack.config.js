const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    "member-signup": "./src/index.js",
    login: "./src/login.js",
    user: "./src/user.js",
    admin: "./src/admin.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // Add this line if not already present
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://cts-backend-red.vercel.app",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./components/member-signup.html",
      filename: "member-signup.html",
      chunks: ["member-signup"],
    }),
    new HtmlWebpackPlugin({
      template: "./components/login.html",
      filename: "login.html",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      template: "./components/user.html",
      filename: "user.html",
      chunks: ["user"],
    }),
    new HtmlWebpackPlugin({
      template: "./components/admin.html",
      filename: "admin.html",
      chunks: ["admin"],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true, // This helps with client-side routing
  },
};
