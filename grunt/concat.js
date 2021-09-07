/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
	customizerStyle: {
		options: {
			separator: ''
		},
		src: [
			'./assets/customizer/css/*.css'
		],
		dest: './assets/css/customizer-style.css'
	},
};
