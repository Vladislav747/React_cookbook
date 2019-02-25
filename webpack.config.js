<<<<<<< HEAD
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
=======
module.exports = {
   module: {
>>>>>>> development
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }}]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
            ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};