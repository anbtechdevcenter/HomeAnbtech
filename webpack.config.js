// webpack.config.js
module.exports = {
  devtool : 'eval-source-map',
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },

  devServer : {
    contentBase : "./public"
  }

};
