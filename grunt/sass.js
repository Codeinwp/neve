// jshint ignore: start
// https://github.com/gruntjs/grunt-sass

const sass = require('node-sass');

module.exports = {
	style: {
		options: {
			implementation: sass,
			outputStyle: 'expanded',
			sourceMap: true,
		},
		files: [ {
			'style.css': 'assets/scss/style.scss',
			'assets/css/woocommerce.css': 'assets/scss/woocommerce.scss',
			'assets/css/gutenberg-editor-style.css': 'assets/scss/gutenberg-editor-style.scss',
		} ]
	},

	min: {
		options: {
			implementation: sass,
			outputStyle: 'compressed',
			sourceMap: false,
		},
		files: [ {
			'style.min.css': 'assets/scss/style.scss',
			'style-rtl.min.css': 'style-rtl.css',
			'assets/css/woocommerce.min.css': 'assets/scss/woocommerce.scss',
			'assets/css/woocommerce-rtl.min.css': 'assets/css/woocommerce-rtl.css',
			'assets/css/gutenberg-editor-style.min.css': 'assets/scss/gutenberg-editor-style.scss',
		} ]
	},
};
