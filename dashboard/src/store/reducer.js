/* global wp, neveDash  */
import {getTabHash} from '../utils/common';

const initialState = {
	settings: {},
	tier: neveDash.pro ? neveDash.license.tier : 0,
	toast: null,
	currentTab: 'start',
	license: neveDash.pro ? neveDash.license : {}
};

const hash = getTabHash();
if (null !== hash) {
	initialState.currentTab = hash;
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TAB':
			const {tab} = action.payload;
			return {
				...state,
				currentTab: tab
			};
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
		case 'UPDATE_LICENSE':
			return {
				...state,
				license: action.payload.licenseData
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
