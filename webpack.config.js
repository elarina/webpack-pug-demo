const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: './dist',
  },
  entry: {
    'index': './src/pages/index/index.pug',
    'blog': './src/pages/blog/blog.pug'
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'index.html',
    chunks: ['index'],
    template: './src/pages/index/index.pug'
    }),
    new HtmlWebpackPlugin({
    filename: 'blog.html',
    chunks: ['blog'],
    template: './src/pages/blog/blog.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        use: {
          loader: 'pug-loader',
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  }
};
