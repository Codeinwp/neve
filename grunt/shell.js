/* jshint node:true */
// https://github.com/sindresorhus/grunt-shell
module.exports = {
	options: {},
	phpcs: {
		command: 'composer run-script phpcs'
	},
	phpcbf: {
		command: 'composer run-script format',
	}
};
