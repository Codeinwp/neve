/*jshint esversion: 6 */
const env = process.env.NODE_ENV;
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Files path
let config = {
	mode: env || 'development',
	entry: {
		'assets/js/gutenberg-preview-manager': path.resolve(__dirname, 'assets/js/gutenberg-preview/app.js'),
		'assets/js/frontend': path.resolve(__dirname, 'assets/js/frontend/app.js'),
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

if( env === 'production' ) {
	config.optimization = { minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					mangle: true,
					output: {
						comments: false,
					},
					toplevel: false,
					keep_fnames: false,
				},
		})
		] };
}

module.exports = config;
