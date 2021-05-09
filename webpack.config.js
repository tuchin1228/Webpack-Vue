const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {

  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Webpack-Vue/'
      : '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      // {
      //   test: /\.pug$/,
      //   use: ['html-loader', 'pug-html-loader'],
      //   exclude: path.resolve('./node_modules'),
      // },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-html-loader',
      },

      {
        test: /\.(vue)$/,
        use: ['vue-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: "postcss-loader",
      //     }
      //   ]
      // },

      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // MiniCssExtractPlugin.extract(
          // {
          //   loader: 'style-loader',
          //   options: {
          //     injectType: 'linkTag'
          //   }
          // },
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: './css/[name].css'
          //   }
          // },
          'css-loader',
          'postcss-loader',
          {
            loader:'sass-loader',
          }
          // )
        ]
      },

      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        ]
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: path.resolve('./node_modules'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
              publicPath: '../assets/image',
            },
          },
        ]
      },

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
 
 
    new HtmlWebpackPlugin({
      title: '網頁title',
      filename: 'index.html',
      template: 'html/template.html',
      description: '網頁描述',
      chunks: ['vendor', 'index'],
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "assets", to: "assets" },
      ],
    }),

  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
}