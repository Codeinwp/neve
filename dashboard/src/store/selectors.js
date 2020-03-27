export default {
	getModuleStatus: (state, slug) => state.settings['nv_pro_' + slug + '_status'],
	getLicenseTier: (state) => state.tier
};
