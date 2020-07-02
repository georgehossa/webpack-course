const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack =require('webpack');
const path = require('path');

// Use Common JS
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Dev Server',
      template: './index.html',
    }),
    // esta forma de cargar los estilos se usa para el modo producción, en dev es mejor usar el style-loader
    /* new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    }), */
  ],

}