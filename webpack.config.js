var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

// const parts = ['buttons'];
let entry = {
  index: './src/index.tsx',
  common: './common/index.ts',
  buttons: './common/buttons/index.tsx'
};
let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html'),
    chunks: ['index'],
    inject: true
  }),
  new HtmlWebpackPlugin({
    filename: 'common/index.html',
    template: path.resolve(__dirname, 'common/index.html'),
    chunks: ['common'],
    inject: true
  }),
  new HtmlWebpackPlugin({
    filename: 'common/buttons/index.html',
    template: path.resolve(__dirname, 'common/buttons/index.html'),
    chunks: ['buttons'],
    inject: true
  })
];
// createHtmlPluginsAndEntries(entry, parts);

// function createHtmlPluginsAndEntries(entry, parts) {
//   parts.forEach((part) => {
//     entry = { ...entry, [part]: `./common/${part}/index.tsx` };
//     plugins.push(
//       new HtmlWebpackPlugin({
//         filename: `common/${part}/index.html`,
//         // template: `common/${part}/index.html`,
//         template: path.resolve(__dirname, `common/${part}/index.html`),
//         chunks: [`${part}`],
//         inject: true
//       })
//     );
//   });
// }

module.exports = {
  mode: 'development',
  // a string here because there is one file as an entry point
  // if there is more than one, then use an array
  entry,
  //  tell webpack to extract source maps and into our final bundle
  devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  // },
  // the path and name of the file that will be generated, and to be referenced in the html file
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: (pathData) => {
      return '[name].js';
      // return pathData.chunk.name === 'index' || pathData.chunk.name === 'common'
      //   ? '[name].js'
      //   : '[name]/[name].js';
    }
  },
  resolve: {
    alias: {
      _src: path.resolve(__dirname, '/src')
    },
    //   // by default Webpack does no load .ts and .tsx files so it needs to be told
    extensions: [
      '*',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.css',
      '.less',
      '.png',
      '.svg',
      '.json'
    ]
  },
  plugins,
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
