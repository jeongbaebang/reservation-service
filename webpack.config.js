const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/static/js/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      publicPath: 'dist/',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './src/static/dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
