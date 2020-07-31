const {
	addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
	addMatchImageSnapshotPlugin(on, config);

	on( 'before:browser:launch', ( browser, launchOptions ) => {
		if ( browser.family === 'chromium' && browser.name !== 'electron' && browser.isHeadless ) {
			launchOptions.args.push( '--window-size=1366,768' );
			launchOptions.args.push( '--force-device-scale-factor=1' );
			return launchOptions;
		}
	} );
};
