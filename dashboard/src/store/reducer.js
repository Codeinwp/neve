/* global wp, neveDash  */
const {__} = wp.i18n;

const initialState = {
	settings: {},
	tier: neveDash.pro ? neveDash.license.tier : 0
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SETTINGS':
			const {object} = action.payload;
			return {
				...state,
				settings: object
			};
		case 'TOGGLE_MODULE':
			const {slug, value} = action.payload;
			return {
				...state,
				settings: {
					...state.settings,
					['nv_pro_' + slug + '_status']: value
				}
			};
		case 'UPDATE_LICENSE_TIER':
			return {
				...state,
				tier: action.payload.tier
			};
	}
	return state;
};

export default reducer;
