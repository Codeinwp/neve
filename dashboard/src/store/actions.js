export default {
	setSettings(object) {
		return {
			type: 'SET_SETTINGS',
			payload: {object}
		};
	},
	changeModuleStatus(slug, value) {
		return {
			type: 'TOGGLE_MODULE',
			payload: {slug, value}
		};
	},
	changeLicenseTier(tier) {
		return {
			type: 'UPDATE_LICENSE_TIER',
			payload: {tier}
		};
	}
};
