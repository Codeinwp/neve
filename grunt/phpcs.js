/* jshint node:true */
// https://github.com/SaschaGalley/grunt-phpcs
module.exports = {
	options: {
		standard: 'phpcs.xml',
		showSniffCodes: true,
		reportFile: '<%= paths.logs %>phpcs.log',
		extensions: 'php'
	},
	theme: {

		src: [
			'*.php',
		]
	},
	inc: {
		src: [
			'inc/**/*.php',
			'!inc/customizer/**/*.php',
		]
	},
	inc_customizer: {
		src: [
			'inc/customizer/**/*.php']
	},
	rest_of_them: {
		src: [
			'<%= files.php %>',
			'!inc/**/*.php',
			'!*.php',
		]
	}
};