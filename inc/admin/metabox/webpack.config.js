const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...defaultConfig,
	entry: ['./src/index.js'],
	output: {
		path: __dirname + '/bundle',
		publicPath: '/',
		filename: 'meta-sidebar.js'
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules
		],
	},
};
