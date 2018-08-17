/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	options: {
		mergeIntoShorthands: false,
		roundingPrecision: -1
	},
	customizerStyle: {
		files: {
			'assets/css/customizer-style.min.css': [ 'assets/css/customizer-style.css' ]
		}
	}
};
