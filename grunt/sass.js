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
		files: [
			{
				'style-main.css': 'assets/scss/style.scss',
				'assets/css/style-legacy.css': 'assets/scss/style-legacy.scss',
				'assets/css/customizer-preview.css':
					'assets/scss/customizer-preview.scss',
				'assets/css/mega-menu.css': 'assets/scss/mega-menu.scss',
				'assets/css/mega-menu-legacy.css':
					'assets/scss/mega-menu-legacy.scss',
				'assets/css/woocommerce.css': 'assets/scss/woocommerce.scss',
				'assets/css/woocommerce-legacy.css':
					'assets/scss/woocommerce-legacy.scss',
				'assets/css/lifter.css': 'assets/scss/lifter.scss',
				'assets/css/lifter-legacy.css':
					'assets/scss/lifter-legacy.scss',
				'assets/css/gutenberg-editor-style.css':
					'assets/scss/gutenberg-editor-style.scss',
				'assets/css/gutenberg-editor-legacy-style.css':
					'assets/scss/gutenberg-editor-legacy-style.scss',
				'header-footer-grid/assets/css/admin/customizer/customizer.css':
					'header-footer-grid/assets/scss/admin/customizer/customizer.scss',
			},
		],
	},
};
