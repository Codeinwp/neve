export default {
	getModuleStatus: (state, slug) =>
		state.settings['nv_pro_' + slug + '_status'],
	getOption: (state, slug) => state.settings[slug],
	getPlugins: (state) => state.plugins,
	getProOption: (state, slug) => state.settings['nv_pro_' + slug],
	getLicenseTier: (state) => (state.license ? state.license.tier : 1),
	getLicense: (state) => state.license,
	getToast: (state) => state.toast,
	getTab: (state) => state.currentTab,
	getNotifications: (state) => {
		const shownNotifications = { ...state.notifications };

		Object.entries(state.notifications).forEach(([slug, data]) => {
			if (!data.dependentModule) {
				return;
			}

			const option = `nv_pro_${data.dependentModule}_status`;

			if (!state.settings[option]) {
				delete shownNotifications[slug];
			}
		});

		return shownNotifications;
	},
};
