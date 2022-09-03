import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import {terser} from 'rollup-plugin-terser';
import multi from '@rollup/plugin-multi-entry';

const ROLLUP_LEGACY = {
	exclude: 'node_modules/**',
	babelrc: false,
	presets: [
		[
			"@babel/env",
			{
				"targets": {
					"browsers": [
						"> 0.5%, last 2 versions, Firefox ESR, not dead"
					]
				},
				"useBuiltIns": "usage",
				"corejs": 3,
				"exclude": [
					'es.regexp.exec',
					'es.string.split',
				]
			}
		],
	],
};
const ROLLUP_MODERN = {
	exclude: 'node_modules/**',
	babelrc: false,
	presets:
		[
			[
				"@babel/env",
				{
					"targets": ["defaults",
						"not ie >= 0"],
					"debug": true,
					"useBuiltIns": "usage",
					"corejs": 3,
					"exclude": [
						"es.string.split",
						'web.dom-collections.iterator'
					]
				}
			]

	],
};
let all_coverage = {
		'assets/js/build/all/metabox.js': 'assets/js/src/metabox.js',
		'assets/js/build/all/gutenberg.js': 'assets/js/src/gutenberg.js',
		'assets/js/build/all/customizer-preview.js': ['assets/js/src/customizer-preview/app.js'],
		'assets/js/build/all/customizer-controls.js': ['./assets/customizer/js/*.js']
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
			sourceMap: 'inline'
		},
		plugins: [
			multi(),
			resolve(),
			commonjs(),
			babel(ROLLUP_LEGACY),
			uglify()
		]
	});
});
Object.keys(modern).forEach(function (item) {
	__export.push({
		input: modern[item],
		output: {
			file: item,
			format: 'iife',
			sourceMap: 'inline'
		},
		plugins: [
			multi(),
			resolve(),
			commonjs(),
			babel(ROLLUP_MODERN),
			terser()
		]
	});
});

export default __export;
