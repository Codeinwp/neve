/* global wp, neveDash  */
const initialState = {
	sites: null,
	upsells: null
};
export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SITES':
			const {sites} = action.payload;
			return {
				...state,
				sites: sites
			};
		case 'SET_UPSELLS':
			const {upsells} = action.payload;
			return {
				...state,
				sites: upsells
			};
	}
	return state;
};
