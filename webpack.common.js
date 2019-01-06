const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    inline: true,
    contentBase: './public',
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },
};
