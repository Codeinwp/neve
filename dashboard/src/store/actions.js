 export default {
	setTab(tab) {
		return {
			type: 'SET_TAB',
			payload: {tab}
		};
	},
	setSettings(object) {
		return {
			type: 'SET_SETTINGS',
			payload: {object}
		};
	},
	changeModuleStatus(moduleSlug, value) {
		return {
			type: 'TOGGLE_MODULE',
			payload: {moduleSlug: 'nv_pro_' + moduleSlug + '_status', value}
		};
	},
	changeModuleOption(optionSlug, optionValue, pro = true) {
		return {
			type: 'CHANGE_MODULE_OPTION',
			payload: {optionStatus: (pro ? 'nv_pro_' : '') + optionSlug, optionValue}
		};
	},
	changeLicenseTier(tier) {
		return {
			type: 'UPDATE_LICENSE_TIER',
			payload: {tier}
		};
	},
	setToast(message) {
		return {
			type: 'UPDATE_TOAST_MESSAGE',
			payload: message
		};
	}
};
