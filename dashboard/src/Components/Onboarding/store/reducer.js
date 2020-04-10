/* global wp, neveDash  */
const initialState = {
	sites: null,
	upsells: null,
	editor: 'elementor',
	previewStatus: false,
	importModalStatus: false,
	currentSite: null,
	importing: false
};
export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SITES':
			const {sites} = action.payload;
			return {
				...state,
				sites
			};
		case 'SET_UPSELLS':
			const {upsells} = action.payload;
			return {
				...state,
				upsells
			};
		case 'SET_CURRENT_EDITOR':
			const {editor} = action.payload;
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
	}
	return state;
};
