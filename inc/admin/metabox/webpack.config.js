const config = {
	entry: ['./src/index.js'],
	devtool: 'inline-source-map',
	output: {
		path: __dirname + '/bundle',
		publicPath: '/',
		filename: 'meta-sidebar.js'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
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

