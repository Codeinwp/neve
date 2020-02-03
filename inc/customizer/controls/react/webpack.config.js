const config = {
  entry: ['./src/index.js', './src/style.scss'],
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/bundle',
    publicPath: '/',
    filename: 'controls.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
          // 'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'controls.css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}

module.exports = (env, argv) => {
  if ( argv.mode === 'production' ) {
    config.devtool = 'none'
  }
  return config
}

