/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	js: {
		files: [
			'assets/js/src/**.js',
		],
		tasks: [ 'uglify:scripts' ]
	},
	customizerJs: {
		files: [
			'inc/customizer/controls/**/script.js',
		],
		tasks: [ 'uglify:customizerControls' ]
	},
	sass: {
		files: [ 'assets/sass/**/*.scss' ],
		tasks: [ 'sass:style' ]
	},
	customizerSass: {
		files: [
			'inc/customizer/controls/**/style.css',
			'inc/addons/customizer/controls/**/style.css',
		],
		tasks: [ 'sass:customizerStyle', 'concat:customizerStyle' ]
	},
};
