import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default [
	{
		input: 'assets/js/customizer/builder.js',
		output: {
			file: 'assets/js/customizer/builder.min.js',
			format: 'iife',
			sourceMap: 'inline',
		},
		plugins: [
			resolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // only transpile our source code
			} ),
			uglify(),
		],
	},
	{
		input: 'assets/js/customizer/customizer.js',
		output: {
			file: 'assets/js/customizer/customizer.min.js',
			format: 'iife',
			sourceMap: 'inline',
		},
		plugins: [
			resolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // only transpile our source code
			} ),
			uglify(),
		],
	},
	{
		input: 'assets/js/theme.js',
		output: {
			file: 'assets/js/theme.min.js',
			format: 'iife',
			sourceMap: 'inline',
		},
		plugins: [
			resolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // only transpile our source code
			} ),
			uglify(),
		],
	},
];