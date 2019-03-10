module.exports = {
   module: {
    rules: [
      {
        test: /.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }}]
      },
    ]
  }
};