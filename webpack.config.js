const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const config = require('@wordpress/scripts/config/webpack.config');

let entry = config.entry;

const plugins = [
	...config.plugins.filter(
		(plugin) =>
			plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
	),
	new DependencyExtractionWebpackPlugin({
		injectPolyfill: false,
		requestToExternal(request) {
			if (request === '@neve-wp/components') {
				return ['wp', 'neve', 'components'];
			}
		},
		requestToHandle(request) {
			if (request === '@neve-wp/components') {
				return 'neve-components';
			}
		},
	}),
];

const componentsEntry = {
	import: `./assets/apps/components/src/components.js`,
	library: {
		type: 'window',
		name: ['wp', 'neve', 'components'],
		export: undefined,
	},
};

module.exports = (env) => {
	if (env.nevePackage) {
		entry = { components: componentsEntry };
	}

	return {
		...config,
		entry,
		plugins,
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
		optimization: {
			...config.optimization,
			splitChunks: {
				...config.optimization.splitChunks,
				automaticNameDelimiter: '-',
			},
		},
	};
};
