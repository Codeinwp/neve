/* global wp, neveDash  */
const initialState = {
	sites: neveDash.onboarding.sites || {},
	editor: localStorage.getItem( 'neve-onboarding-editor') || 'gutenberg',
	category: 'all',
	previewStatus: false,
	importModalStatus: false,
	currentSite: null,
	importing: false,
	isOnboarding: neveDash.onboarding.onboarding || false,
	migrationData: null
};
export default (state = initialState, action) => {
	switch (action.type) {
		case 'REFRESH_SITES':
			const {sites} = action.payload;
			return {
				...state,
				sites
			};
		case 'SET_CURRENT_EDITOR':
			const {editor} = action.payload;
			localStorage.setItem( 'neve-onboarding-editor', editor );
			return {
				...state,
				editor
			};
		case 'SET_CURRENT_CATEGORY':
			const {category} = action.payload;
			return {
				...state,
				category
			};
		case 'SET_FOCUSED_SITE':
			const {siteData} = action.payload;
			return {
				...state,
				currentSite: siteData
			};
		case 'SET_PREVIEW_STATUS':
			const {previewStatus} = action.payload;
			return {
				...state,
				previewStatus
			};
		case 'SET_IMPORT_MODAL_STATUS':
			const {importModalStatus} = action.payload;
			return {
				...state,
				importModalStatus
			};
		case 'SET_ONBOARDING':
			const {status} = action.payload;
			return {
				...state,
				isOnboarding: status
			};
	}
	return state;
};
