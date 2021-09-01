/* eslint-disable @typescript-eslint/no-var-requires */
// const {
// 	addMatchImageSnapshotPlugin,
// } = require('cypress-image-snapshot/plugin');
const htmlvalidate = require('cypress-html-validate/dist/plugin');

module.exports = (on) => {
	//	addMatchImageSnapshotPlugin(on, config);

	on('before:browser:launch', (browser, launchOptions) => {
		if (browser.name === 'chrome' && browser.isHeadless) {
			launchOptions.args.push('--window-size=1366,768');
			launchOptions.args.push('--force-device-scale-factor=1');
			return launchOptions;
		}
	});
};

// eslint-disable-next-line  @typescript-eslint/no-var-requires
const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on) => {
	const config = {
		extends: ['html-validate:document', 'html-validate:standard'],
		rules: { 'require-sri': 'off' },
	};

	const options = {
		include: ['.header', '.site-footer', '.blog-sidebar'],
	};

	on('task', percyHealthCheck);
	htmlvalidate.install(on, config, options);
};
