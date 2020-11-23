/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	options: {
		mergeIntoShorthands: false,
		roundingPrecision: -1,
		sourceMap: false,
		keepSpecialComments: 0,
		level: {
			1: {
				specialComments: 0
			}
		}
	},
	customizerStyle: {
		files: {
			'assets/css/customizer-style.min.css': ['assets/css/customizer-style.css'],
			'assets/css/customizer-style-rtl.min.css': ['assets/css/customizer-style-rtl.css'],
			'assets/css/mega-menu.min.css': ['assets/css/mega-menu.css'],
			'assets/css/mega-menu-rtl.min.css': ['assets/css/mega-menu-rtl.css'],
			'style-rtl.min.css': ['style-rtl.css'],
			'header-footer-grid/assets/css/style-rtl.min.css': ['header-footer-grid/assets/css/style-rtl.css'],
			'header-footer-grid/assets/css/style.min.css': ['header-footer-grid/assets/css/style.css'],
			'style.min.css': ['style.css'],
			'assets/css/customizer-preview.min.css': ['assets/css/customizer-preview.css'],
			'assets/css/woocommerce.min.css': ['assets/css/woocommerce.css'],
			'assets/css/woocommerce-rtl.min.css': ['assets/css/woocommerce-rtl.css'],
			'assets/css/lifter.min.css': ['assets/css/lifter.css'],
			'assets/css/gutenberg-editor-style.min.css': ['assets/css/gutenberg-editor-style.css'],
		}
	}
};
