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
	updatePalettes( nextPalettes ) {
		return {
			type: 'UPDATE_PALETTES',
			payload: { nextPalettes },
		};
	},
};
