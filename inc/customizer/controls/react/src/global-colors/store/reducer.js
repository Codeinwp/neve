const initialState = {
	palettes: [],
	activePalette: null,
};

const saveCustomizeSetting = ( data ) => {
	const control = wp.customize.control( 'neve_global_colors' );
	if ( data.flag ) {
		delete data.flag;
	} else {
		data.flag = true;
	}
	control.setting.set( data );

	const cssTag = document.querySelector( '#nv-css-vars' );
	const { activePalette, palettes } = data;
	const currentPalette = palettes[ activePalette ];
	const { colors } = currentPalette;

	let style = ':root{';

	Object.keys( colors ).map( ( slug ) => {
		style += `--nv-${ slug }:${ colors[ slug ] };`;
		return false;
	} );
	style += '}';

	cssTag.innerHTML = style;
};

const reducer = ( state = initialState, action ) => {
	let value;
	switch ( action.type ) {
		case 'INIT_VALUES':
			const { values } = action.payload;
			return {
				...state,
				...values,
			};
		case 'SET_ACTIVE_PALETTE':
			const { paletteId } = action.payload;
			value = {
				...state,
				activePalette: paletteId,
			};
			saveCustomizeSetting( value );
			return value;
		case 'UPDATE_PALETTES':
			const { nextPalettes } = action.payload;
			value = {
				...state,
				palettes: { ...nextPalettes },
			};
			saveCustomizeSetting( value );
			return value;
	}
	return state;
};

export default reducer;
