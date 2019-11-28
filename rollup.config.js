import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

let scripts = {
			'assets/js/src/frontend/app.js': 'assets/js/frontend.js',
			'assets/js/src/shop/app.js': 'assets/js/shop.js',
			'assets/js/src/customizer-preview/app.js': 'assets/js/customizer-preview.js',
		},
		__export = [];

Object.keys( scripts ).forEach( function(item) {
	__export.push( {
		input: item,
		output: {
			file: scripts[item],
			format: 'iife',
			sourceMap: 'inline'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel( {
				exclude: 'node_modules/**' // transpile without .node_modules
			} ),
			uglify()
		]
	} );
} );

export default __export;
