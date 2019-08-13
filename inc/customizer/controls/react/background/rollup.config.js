import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/background.js',
			format: 'iife',
			sourceMap: 'inline'
		},
		plugins: [
			resolve(),
			babel( {
				exclude: 'node_modules/**', // transpile without .node_modules
			} ),
			commonjs(),
			uglify()
		]
	}];
