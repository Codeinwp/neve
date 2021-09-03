/* global neveDash  */
import { getTabHash } from '../utils/common';

const initialState = {
	settings: {},
	plugins: neveDash.plugins || {},
	tier: neveDash.pro ? neveDash.license.tier : 0,
	toast: null,
	currentTab: 'start',
	license: neveDash.pro ? neveDash.license : {},
};

const hash = getTabHash();
if (null !== hash) {
	initialState.currentTab = hash;
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TAB':
			const { tab } = action.payload;
			return {
				...state,
				currentTab: tab,
			};
		case 'SET_SETTINGS':
			const { object } = action.payload;
			return {
				...state,
				settings: object,
			};
		case 'SET_PLUGIN_STATE':
			const { pluginSlug, pluginState } = action.payload;
			const nextPlugins = { ...state.plugins };
			nextPlugins[pluginSlug].cta = pluginState;
			return {
				...state,
				plugins: nextPlugins,
			};
		case 'TOGGLE_MODULE':
			const { moduleSlug, value } = action.payload;
			return {
				...state,
				settings: {
					...state.settings,
					[moduleSlug]: value,
				},
			};
		case 'CHANGE_MODULE_OPTION':
			const { optionStatus, optionValue } = action.payload;
			return {
				...state,
				settings: {
					...state.settings,
					[optionStatus]: optionValue,
				},
			};
		case 'UPDATE_LICENSE':
			return {
				...state,
				license: action.payload.licenseData,
			};
		case 'UPDATE_TOAST_MESSAGE':
			return {
				...state,
				toast: action.payload,
			};
		case 'SET_LOGGER_STATUS':
			return {
				...state,
				settings: {
					...state.settings,
					neve_logger_flag: action.payload,
				},
			};
	}
	return state;
};

export default reducer;
