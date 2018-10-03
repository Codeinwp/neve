/* jshint node:true */
// https://github.com/nDmitry/grunt-postcss
module.exports = {
	options: {
		processors: [
			require('autoprefixer')({browsers: ['last 2 versions', 'ie >= 11']}),
		],
		failOnError:true
	},
	build: {
		src: '<%= files.css %>',
	},
};