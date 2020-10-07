/* global neveDash */
const { onboarding } = neveDash;
import { send } from './rest';

export const importWidgets = ( data ) => {
	return send( onboarding.root + '/import_widgets', data );
};

export const importMods = ( data ) => {
	return send( onboarding.root + '/import_theme_mods', data );
};

export const installPlugins = ( pluginArray ) => {
	return send( onboarding.root + '/install_plugins', pluginArray );
};

export const importContent = ( data ) => {
	return send( onboarding.root + '/import_content', data );
};
