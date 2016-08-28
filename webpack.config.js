var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-maps',
  entry: {
    main: './example/main.jsx'
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    })
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: 'node_modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
