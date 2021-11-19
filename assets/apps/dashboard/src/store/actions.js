export default {
	setTab(tab) {
		return {
			type: 'SET_TAB',
			payload: { tab },
		};
	},
	setSettings(object) {
		return {
			type: 'SET_SETTINGS',
			payload: { object },
		};
	},
	setPluginState(pluginSlug, pluginState) {
		return {
			type: 'SET_PLUGIN_STATE',
			payload: { pluginSlug, pluginState },
		};
	},
	changeModuleStatus(moduleSlug, value) {
		return {
			type: 'TOGGLE_MODULE',
			payload: { moduleSlug: 'nv_pro_' + moduleSlug + '_status', value },
		};
	},
	changeModuleOption(optionSlug, optionValue, pro = true) {
		return {
			type: 'CHANGE_MODULE_OPTION',
			payload: {
				optionStatus: (pro ? 'nv_pro_' : '') + optionSlug,
				optionValue,
			},
		};
	},
	changeLicense(licenseData) {
		return {
			type: 'UPDATE_LICENSE',
			payload: { licenseData },
		};
	},
	setToast(message) {
		return {
			type: 'UPDATE_TOAST_MESSAGE',
			payload: message,
		};
	},
	setLogger(loggerStatus) {
		return {
			type: 'SET_LOGGER_STATUS',
			payload: loggerStatus,
		};
	},
};
