'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//获取当前文件的相对路劲
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    // 不符合ESLint的规则时,只警告不会编译不通过
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

// const loading = {
//   html: fs.readFileSync(path.join(__dirname, './loading.html')),
//   css: '<style>' + fs.readFileSync(path.join(__dirname, './loading.css'))
// };
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    // 这里引入了一个chunk的概念，chunk表示一个文件，默认情况下webpack的输入是一个入口文件，
    // 输出也是一个文件，这个文件就是一个chunk，chunkId就是产出时给每个文件一个唯一标识id，
    // chunkhash就是文件内容的md5值，name就是在entry中指定的key值。
    app: ['babel-polyfill', './src/main.js'],
    // vendor: ['element-ui']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    // filename: '[name].[chunkHash:5].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'demo',
    //   template: 'index.html' // 模板路径
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest']
    // }),
  ],
  // 取别名
  resolve: {
    //自动解析确定的拓展名,使导入模块时不带拓展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('../src/assets/'),
      'components': resolve('../src/components/'),
      'views': resolve('../src/views/')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          vueLoaderConfig,
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
          fallback: 'style-loader'
        }),
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
