const {
	addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
	addMatchImageSnapshotPlugin(on, config);

	on( 'before:browser:launch', ( browser, launchOptions ) => {
		if ( browser.family === 'chromium' && browser.name !== 'electron' && browser.isHeadless ) {
			launchOptions.args.push( '--window-size=1440,1080' );
			return launchOptions;
		}
	} );
};
