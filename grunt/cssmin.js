/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	options: {
		mergeIntoShorthands: false,
		roundingPrecision: -1,
		sourceMap: false
	},
	customizerStyle: {
		files: {
			'assets/css/customizer-style.min.css': [ 'assets/css/customizer-style.css' ],
			'assets/css/customizer-style-rtl.min.css': [ 'assets/css/customizer-style-rtl.css' ],
			'style-rtl.min.css': [ 'style-rtl.css' ]
		}
	}
};
