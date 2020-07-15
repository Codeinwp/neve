const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: NODE_ENV,
	entry: ['./src/index.js', './src/editor.scss'],
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	output: {
		path: __dirname,
		filename: './build/index.js'
	},
	module: {
		rules: [
			{
				test: /.js?$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-transform-async-to-generator',
							'@babel/plugin-proposal-object-rest-spread',
							[
								'@babel/plugin-transform-react-jsx', {
								'pragma': 'wp.element.createElement'
							}
							]
						]
					}
				},
					'eslint-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				use: [{
					loader: MiniCssExtractPlugin.loader
				},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')
							]
						}
					},
					'sass-loader']
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
		new MiniCssExtractPlugin({
			filename: './build/editor.css'
		})
	]
};

if ('development' === NODE_ENV) {
	config.devtool = 'inline-source-map';
}

module.exports = config;
