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
			'style-main.css': 'assets/scss/style.scss',
			'assets/css/customizer-preview.css': 'assets/scss/customizer-preview.scss',
			'assets/css/mega-menu.css': 'assets/scss/mega-menu.scss',
			'assets/css/woocommerce.css': 'assets/scss/woocommerce.scss',
			'assets/css/lifter.css': 'assets/scss/lifter.scss',
			'assets/css/gutenberg-editor-style.css': 'assets/scss/gutenberg-editor-style.scss',
			'header-footer-grid/assets/components/menu-icon/arrow.php': 'header-footer-grid/assets/scss/frontend/components/menu-icon/arrow.scss',
			'header-footer-grid/assets/components/menu-icon/minus.php': 'header-footer-grid/assets/scss/frontend/components/menu-icon/minus.scss',
			'header-footer-grid/assets/components/menu-icon/squeeze.php': 'header-footer-grid/assets/scss/frontend/components/menu-icon/squeeze.scss',
			'header-footer-grid/assets/components/menu-icon/vortex.php': 'header-footer-grid/assets/scss/frontend/components/menu-icon/vortex.scss',
		} ]
	},
};
