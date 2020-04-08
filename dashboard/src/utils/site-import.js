/* global neveDash */
import {send} from './rest';

export const importWidgets = (data) => {
	return send(neveDash.onboarding.root + '/import_widgets', data);
};

export const importMods = (data) => {
	return send(neveDash.onboarding.root + '/import_theme_mods', data);
};

export const installPlugins = (pluginArray) => {
	return send(neveDash.onboarding.root + '/install_plugins', pluginArray);
};

export const importContent = (data) => {
	return send(neveDash.onboarding.root + '/import_content', data);
};
