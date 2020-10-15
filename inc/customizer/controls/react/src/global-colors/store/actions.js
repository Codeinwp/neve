export default {
	initValues( values ) {
		return {
			type: 'INIT_VALUES',
			payload: { values },
		};
	},
	setActivePalette( paletteId ) {
		return {
			type: 'SET_ACTIVE_PALETTE',
			payload: { paletteId },
		};
	},
};
