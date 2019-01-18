/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	style: {
		options: {
			noCache: true,
			style: 'expanded',
			sourcemap: 'auto',
		},
		files: [ {
			'style.css': 'assets/scss/style.scss',
			'assets/css/woocommerce.css': 'assets/scss/woocommerce.scss',
			'assets/css/gutenberg-editor-style.css': 'assets/scss/gutenberg-editor-style.scss',
		} ]
	},

	min: {
		options: {
			noCache: true,
			style: 'compressed',
			sourcemap: 'none',
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
