/*jshint esversion: 6 */

// Files path
const path = require('path');

module.exports = {
  entry: {
    'assets/js/gutenberg-preview-manager': path.resolve(__dirname, 'assets/js/gutenberg-preview/app.js'),

  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: '/assets/js/',
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
};
