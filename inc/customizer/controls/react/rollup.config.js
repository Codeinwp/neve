import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'bundle/controls.js',
			format: 'iife',
			sourceMap: 'inline'
		},
		watch: {
			chokidar: {
				usePolling: true
			}
		},
		plugins: [
			replace( {
				'process.env.NODE_ENV': JSON.stringify( 'production' )
			} ),
			scss(),
			resolve(),
			babel( {
				exclude: 'node_modules/**' // transpile without .node_modules
			} ),
			commonjs(),
			uglify()
		]
	}];
