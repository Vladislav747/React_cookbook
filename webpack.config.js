module.exports = {
  entry:"./src/index.js",
  output: {
    path: __dirname + '/public',
    publicPath: '/public/',
    filename: 'bundle.js'
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
    ]
  }
};