const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const config = require('@wordpress/scripts/config/webpack.config');

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

module.exports = (env) => {
	let entry = config.entry;

	if (env && env.nevePackage) {
		entry = {
			components: {
				import: `./assets/apps/components/src/components.js`,
				library: {
					type: 'window',
					name: ['wp', 'neve', 'components'],
					export: undefined,
				},
			},
		};
	}

	return {
		...config,
		entry,
		plugins,
		output: {
			...config.output,
			chunkFilename: (pathData) => {
				// Use content hash.
				return `${pathData.chunk.contentHash.javascript}.js`;
			},
		},
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
