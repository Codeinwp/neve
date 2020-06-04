/* jshint node:true */
// https://github.com/kswedberg/grunt-version
module.exports = {
	packageJson: {
		options: {
			prefix: '"version"\\:\\s+"'
		},
		src: 'package.json'
	},
	stylesheet: {
		options: {
			prefix: 'Version\\:\\s+'
		},
		src: 'style.css'
	},
	scssStylesheet: {
		options: {
			prefix: 'Version\\:\\s+'
		},
		src: 'assets/scss/style.scss'
	},
	functions: {
		options: {
			prefix: 'NEVE_VERSION\', \''
		},
		src: 'functions.php'
	},
	packageVersion: {
		options: {
			pkg: 'vendor/codeinwp/themeisle-sdk/composer.json',
			release: 'patch',
			prefix: '\\.*\\$themeisle_sdk_version\.*\\s=\.*\\s\''
		},
		src: 'vendor/codeinwp/themeisle-sdk/load.php'
	}
};
