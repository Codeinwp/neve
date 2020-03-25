export default {
	getModuleStatus: (state, slug) => 'enabled' === state.modulesStatus[slug],
	getLicenseTier: (state) => state.tier
};
