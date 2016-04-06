const webpack = require('webpack')
const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
  entry: [path.join(__dirname, '/src/index.js')],
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ['', '.js', '.jsx', '.sass', '.css'],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  devtool: 'source-map',
  //output config
  output: {
    path: buildPath,    //Path of output file
    filename: 'bundle.js',  //Name of output file
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('bundle.css'),

    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname,"src")),
  ],
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: path.join(__dirname, 'node_modules') },

        { test: /\.png$/,
          loader: 'file' },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  },
  postcss: function () {
    return [precss, autoprefixer]
  }
}

module.exports = config
