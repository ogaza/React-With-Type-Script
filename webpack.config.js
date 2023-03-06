var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

module.exports = {
  mode: 'development',
  // a string here because there is one file as an entry point
  // if there is more than one, then use an array
  entry: './src/app.tsx',
  //  tell webpack to extract source maps and into our final bundle
  devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  // },
  // the path and name of the file that will be generated, and to be referenced in the html file
  output: {
    // path: __dirname + '/dist',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      _src: path.resolve(__dirname, '/src')
    },
    //   // by default Webpack does no load .ts and .tsx files so it needs to be told
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.png', '.svg', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true
    })
  ],
  module: {
    rules: [
      {
        // a regular expression that tests what kind of files to run through this loader
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /dist/
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
