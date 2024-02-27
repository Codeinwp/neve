/**
 * This file is used to initialize the FormBricks survey.
 */
import formbricks from '@formbricks/js';

/**
 * Take the number of days since install and convert it to a category for NPS user profile.
 *
 * @param {number} number - Number to convert.
 * @param {number} scale  - Scale to use.
 * @return {number|void} Converted number.
 */
const convertToCategory = (number, scale = 1) => {
	const normalizedNumber = Math.round(number / scale);
	if (0 === normalizedNumber || 1 === normalizedNumber) {
		return 0;
	} else if (1 < normalizedNumber && 8 > normalizedNumber) {
		return 7;
	} else if (8 <= normalizedNumber && 31 > normalizedNumber) {
		return 30;
	} else if (30 < normalizedNumber && 90 > normalizedNumber) {
		return 90;
	} else if (90 > normalizedNumber) {
		return 91;
	}
};

if ('undefined' !== typeof window && 'undefined' !== typeof window.neveDash) {
	formbricks.init({
		environmentId: 'clr0ply35522h8up0bay2de4y',
		apiHost: 'https://app.formbricks.com',
		userId:
			'neve_' +
			(window.neveDash?.license?.key ??
				window.neveDash?.rootUrl?.replace(/[^\w\d]*/g, '')),
		attributes: {
			plan: window.neveDash?.pro ? window.neveDash?.license?.tier : 0,
			days_since_install: convertToCategory(
				window.neveDash.daysSinceInstall
			),
			license_status: window.neveDash?.license?.valid ?? 'invalid',
			free_version: window.neveDash?.version,
			pro_version: window.neveDash?.proPluginVersion,
		},
	});
}
