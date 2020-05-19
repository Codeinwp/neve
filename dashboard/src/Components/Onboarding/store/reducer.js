/* global wp, neveDash  */
const initialState = {
	editor: localStorage.getItem( 'neve-onboarding-editor') || 'elementor',
	previewStatus: false,
	importModalStatus: false,
	currentSite: null,
	importing: false,
	isOnboarding: neveDash.onboarding.onboarding || false,
	migrationData: null
};
export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_EDITOR':
			const {editor} = action.payload;
			localStorage.setItem( 'neve-onboarding-editor', editor );
			return {
				...state,
				editor
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
