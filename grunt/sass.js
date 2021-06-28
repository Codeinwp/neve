// jshint ignore: start
// https://github.com/gruntjs/grunt-contrib-sass

const sass = require('node-sass');

const components = {
	'menu-icon': ['arrow', 'donner', 'dots', 'minus', 'squeeze', 'vortex'],
};

const mapPhpFiles = {};
for (const component in components) {
	for (const style in components[component]) {
		const key = `header-footer-grid/assets/components/${component}/${components[component][style]}.css.min.php`;
		mapPhpFiles[
			key
		] = `header-footer-grid/assets/scss/frontend/components/${component}/${components[component][style]}.scss`;
	}
}

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
				'assets/css/customizer-preview.css':
					'assets/scss/customizer-preview.scss',
				'assets/css/mega-menu.css': 'assets/scss/mega-menu.scss',
				'assets/css/woocommerce.css': 'assets/scss/woocommerce.scss',
				'assets/css/lifter.css': 'assets/scss/lifter.scss',
				'assets/css/gutenberg-editor-style.css':
					'assets/scss/gutenberg-editor-style.scss',
			},
		],
	},
	phpStyle: {
		options: {
			implementation: sass,
			noCache: true,
			outputStyle: 'compressed',
			sourceMap: false,
		},
		files: [mapPhpFiles],
	},
};
