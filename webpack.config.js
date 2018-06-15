const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/web/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "web", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),
      helpers: {
        projectHelpers: path.join(process.cwd(), "src", "helpers", "*.helper.js")
      }
    })
  ]
};
