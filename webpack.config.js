const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  resolve: {
    // Duplicate alias in babelrc & tsconfig
    // https://stackoverflow.com/a/51979881
    // http://typescript-lang.ru/docs/Module%20Resolution.html
    alias: {
      BusinessComponents: path.resolve(__dirname, 'src/scripts/BusinessUI/Components'),
      BusinessPages: path.resolve(__dirname, 'src/scripts/BusinessUI/Pages'),
      Components: path.resolve(__dirname, 'src/scripts/Components'),
      Models: path.resolve(__dirname, '/src/scripts/Models'),
      Modules: path.resolve(__dirname, '/src/scripts/Modules'),
      Pages: path.resolve(__dirname, 'src/scripts/Pages'),
    },
    extensions: ['', '.js', '.jsx', 'ts', 'tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader','ts-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'font/[name].[ext]'}  
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "stylus-loader",
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 3000,
  },
};
