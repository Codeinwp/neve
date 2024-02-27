import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import multi from '@rollup/plugin-multi-entry';

const ROLLUP_LEGACY = {
	exclude: 'node_modules/**',
	babelrc: false,
	presets: [
		[
			'@babel/env',
			{
				targets: {
					browsers: [
						'last 2 Chrome versions',
						'last 2 Firefox versions',
						'last 2 Safari versions',
					],
				},
				useBuiltIns: 'usage',
				corejs: 3,
				exclude: ['es.regexp.exec', 'es.string.split'],
			},
		],
	],
};
const ROLLUP_MODERN = {
	exclude: 'node_modules/**',
	babelrc: false,
	presets: [
		[
			'@babel/env',
			{
				targets: ['defaults', 'not ie >= 0'],
				debug: true,
				useBuiltIns: 'usage',
				corejs: 3,
				exclude: [
					'es.string.split',
					'web.dom-collections.iterator',
					'@babel/plugin-transform-parameters',
				],
			},
		],
	],
	babelHelpers: 'bundled',
};
const all_coverage = {
		'assets/js/build/all/metabox.js': 'assets/js/src/metabox.js',
		'assets/js/build/all/gutenberg.js': 'assets/js/src/gutenberg.js',
		'assets/js/build/all/customizer-preview.js': [
			'assets/js/src/customizer-preview/app.js',
		],
		'assets/js/build/all/customizer-controls.js': [
			'./assets/customizer/js/*.js',
		],
	},
	__export = [],
	modern = {
		'assets/js/build/modern/shop.js': 'assets/js/src/shop/app.js',
		'assets/js/build/modern/frontend.js': 'assets/js/src/frontend/app.js',
	};

Object.keys(all_coverage).forEach(function (item) {
	__export.push({
		input: all_coverage[item],
		output: {
			file: item,
			format: 'iife',
			sourcemap: process.env.ROLLUP_WATCH ? 'inline' : false,
		},
		plugins: [
			multi(),
			resolve(),
			commonjs(),
			babel(ROLLUP_LEGACY),
			terser(),
		],
	});
});
Object.keys(modern).forEach(function (item) {
	__export.push({
		input: modern[item],
		output: {
			file: item,
			format: 'iife',
			sourcemap: process.env.ROLLUP_WATCH ? 'inline' : false,
		},
		plugins: [
			multi(),
			resolve(),
			commonjs(),
			babel(ROLLUP_MODERN),
			terser({
				compress: {
					passes: 2,
				},
				mangle: {
					reserved: [ '__', '_n', '_nx', '_x' ],
					properties: true
				},
			}),
		],
	});
});

export default __export;
