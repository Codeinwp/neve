import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
	{
		input: 'assets/js/customizer/builder.js',
		output: {
			file: 'assets/js/customizer/builder.min.js',
			format: 'iife',
			sourcemap: 'inline',
		},
		plugins: [
			nodeResolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // only transpile our source code
			} ),
			terser(),
		],
	},
	{
		input: 'assets/js/customizer/customizer.js',
		output: {
			file: 'assets/js/customizer/customizer.min.js',
			format: 'iife',
			sourcemap: 'inline',
		},
		plugins: [
			nodeResolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // only transpile our source code
			} ),
			terser(),
		],
	},
	{
		input: 'assets/js/theme.js',
		output: {
			file: 'assets/js/theme.min.js',
			format: 'iife',
			sourcemap: 'inline',
		},
		plugins: [
			nodeResolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // only transpile our source code
			} ),
			terser(),
		],
	},
];