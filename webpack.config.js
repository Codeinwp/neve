const config = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...config,
	module: {
		...config.module,
		rules: [
			{
				test: /\.(tsx|ts|d.ts)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			...config.module.rules,
		],
	},
	resolve: {
		...config.resolve,
		extensions: ['.js', '.tsx', '.ts', 'js', 'jsx'],
	},
};
