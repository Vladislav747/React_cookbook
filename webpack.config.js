module.exports = {
  entry:"./src/index.js",
  output: {
    path: __dirname+ "/public/", 
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
   module: {
    rules: [
      {
        test: /.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
};