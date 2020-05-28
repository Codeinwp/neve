export default {
	getSites: (state) => state.sites,
	getMigrationData: (state) => state.migrationData,
	getCurrentEditor: (state) => state.editor,
	getCurrentSite: (state) => state.currentSite,
	getPreviewStatus: (state) => state.previewStatus,
	getImportModalStatus: (state) => state.importModalStatus,
	getOnboardingStatus: (state) => state.isOnboarding
};
