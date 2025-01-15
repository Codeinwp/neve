/* global neveDash */

import { useSelect } from '@wordpress/data';
import { NEVE_STORE } from '../utils/constants';

export default () => {
	const { license } = useSelect((select) => {
		const { getLicense } = select(NEVE_STORE);
		return {
			license: getLicense(),
		};
	});

	return {
		isLicenseValid: neveDash.pro && license && 'valid' === license.valid,
		licenseTier: (license && license.tier) || 1,
		license,
	};
};
