/* global wp, neveDash  */
const {__} = wp.i18n;

const initialState = {
	settings: {},
	tier: neveDash.pro ? neveDash.license.tier : 0,
	toast: null
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
			const {moduleSlug, value} = action.payload;
			return {
				...state,
				settings: {
					...state.settings,
					[moduleSlug]: value
				}
			};
			case 'CHANGE_MODULE_OPTION':
				let {optionStatus, optionValue} = action.payload;
				return {
					...state,
					settings: {
						...state.settings,
						[optionStatus]: optionValue
					}
				};
		case 'UPDATE_LICENSE_TIER':
			return {
				...state,
				tier: action.payload.tier
			};
		case 'UPDATE_TOAST_MESSAGE':
			return {
				...state,
				toast: action.payload
			};
	}
	return state;
};

export default reducer;
