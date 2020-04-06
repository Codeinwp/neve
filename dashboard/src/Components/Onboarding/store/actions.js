export default {
	setSites(sites) {
		return {
			type: 'SET_SITES',
			payload: {sites}
		};
	},
	setUpsells(upsells) {
		return {
			type: 'SET_UPSELLS',
			payload: {upsells}
		};
	}
};
