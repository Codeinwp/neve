/* jshint esversion: 6 */
const setAjaxState = ( state, data ) => {
	state.ajaxLoader = data;
};
const setImportingState = ( state, data ) => {
	state.importing = data;
};
const saveSitesData = ( state, data ) => {
	state.sitesData = data;
};
const showPreview = ( state, data ) => {
	state.previewOpen = data;
};
const showImportModal = ( state, data ) => {
	state.importModalState = data;
};
const populatePreview = ( state, data ) => {
	state.previewData = data;
};
const updateSteps = ( state, data ) => {
	state.currentStep = data;
};
const updatePlugins= ( state, data ) => {
	state.importOptions.installablePlugins = data;
};

const updateImportOptions= ( state, data ) => {
	state.importOptions = data;
};

const resetStates = ( state ) => {
	state.previewOpen = false;
	state.importModalState = false;
	state.previewData = {};
	state.currentStep = 'inactive';
	state.importOptions =  {
		content: true,
		customizer: true,
		widgets: true,
	};
};

export default {
	setAjaxState,
	saveSitesData,
	showPreview,
	showImportModal,
	populatePreview,
	setImportingState,
	updateSteps,
	updatePlugins,
	updateImportOptions,
	resetStates
};