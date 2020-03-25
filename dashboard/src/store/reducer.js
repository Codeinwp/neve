/* global wp, neveDash  */
const {__} = wp.i18n;
const initialState = {
	modulesStatus: neveDash.pro ? neveDash.proOptions.modules_status : [],
	tier: neveDash.pro ? neveDash.license.tier : 0
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MODULE':
			const {slug, value} = action.payload;
			const newModulesStatus = {
				...state.modulesStatus,
				[slug]: true === value ? 'enabled' : 'disabled'
			};
			return {
				...state,
				modulesStatus: newModulesStatus
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
