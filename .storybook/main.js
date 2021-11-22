const path = require('path');
const modulesDir = path.join( __dirname, '../node_modules' );
const componentsFile = path.join(__dirname, '../assets/apps/components/src/components.js')
const stories = [
	"../stories/**/*.stories.mdx",
	"../stories/**/*.stories.@(js|jsx|ts|tsx)"
];
const customEnvVariables = {};

// Workaround for Emotion 11
// https://github.com/storybookjs/storybook/pull/13300#issuecomment-783268111
const updateEmotionAliases = ( config ) => ( {
	...config,
	resolve: {
		...config.resolve,
		alias: {
			...config.resolve.alias,
			'@neve-wp/components': componentsFile,
			'@emotion/core': path.join( modulesDir, '@emotion/react' ),
			'@emotion/styled': path.join( modulesDir, '@emotion/styled' ),
			'@emotion/styled-base': path.join( modulesDir, '@emotion/styled' ),
			'emotion-theming': path.join( modulesDir, '@emotion/react' ),
		},
	},
} );


module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories,
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-scss",
		'@storybook/addon-a11y',
	],
	managerWebpack: updateEmotionAliases,
	// Workaround:
	// https://github.com/storybookjs/storybook/issues/12270
	webpackFinal: async ( config ) => {
		// Find the DefinePlugin
		const plugin = config.plugins.find( ( p ) => {
			return p.definitions && p.definitions[ 'process.env' ];
		} );
		// Add custom env variables
		Object.keys( customEnvVariables ).forEach( ( key ) => {
			plugin.definitions[ 'process.env' ][ key ] = JSON.stringify(
				customEnvVariables[ key ]
			);
		} );

		return updateEmotionAliases( config );
	},
}
