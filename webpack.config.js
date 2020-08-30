module.exports = {
  entry:"./src/index.js",
  output: {
    path: __dirname + '/public',
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
   
    alias: {
      ["~"]: __dirname + '/src',
      'react-native': 'react-native-web',
    },
  devtool: '#sourcemap',
   module: {
    rules: [
      {
        test: /.js?$/,
        use: {
          loader:'babel-loader'
        },
       
        exclude: /node_modules/
      },
      { 
        test: /\.css|.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
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