module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    host: '0.0.0.0',
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
