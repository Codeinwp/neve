const initialState = {
	palettes: [],
	activePalette: null,
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'INIT_VALUES':
			const { values } = action.payload;
			return {
				...state,
				...values,
			};
		case 'SET_ACTIVE_PALETTE':
			const { paletteId } = action.payload;
			return {
				...state,
				activePalette: paletteId,
			};
		case 'UPDATE_PALETTES':
			const { nextPalettes } = action.payload;
			return {
				...state,
				palettes: { ...nextPalettes },
			};
	}
	return state;
};

export default reducer;
