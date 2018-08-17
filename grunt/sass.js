/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	style: {
		options: {
			noCache: true,
			style: 'expanded',
		},
		files: [ {
			'style.css': 'assets/sass/style.scss',
			'assets/css/woocommerce.css': 'assets/sass/woocommerce.scss'
		} ]
	},

	min: {
		options: {
			noCache: true,
			style: 'compressed',
			sourcemap: 'none',
		},
		files: [ {
			'style.min.css': 'assets/sass/style.scss',
			'style-rtl.min.css': 'style-rtl.css',
			'assets/css/woocommerce.min.css': 'assets/sass/woocommerce.scss',
			'assets/css/woocommerce-rtl.min.css': 'assets/css/woocommerce-rtl.css',
		} ]
	},
};
