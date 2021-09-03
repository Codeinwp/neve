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
};
