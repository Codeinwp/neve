// jshint ignore: start
// https://github.com/gruntjs/grunt-contrib-sass

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
			'assets/css/customizer-preview.css': 'assets/scss/customizer-preview.scss',
			'assets/css/mega-menu.css': 'assets/scss/mega-menu.scss',
			'assets/css/woocommerce.css': 'assets/scss/woocommerce.scss',
			'assets/css/lifter.css': 'assets/scss/lifter.scss',
			'assets/css/gutenberg-editor-style.css': 'assets/scss/gutenberg-editor-style.scss',
		} ]
	},
};
