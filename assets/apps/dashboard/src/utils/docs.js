/**
 * Add the Themeisle UTM parameters to a docs link.
 *
 * Mirrors the SDK's tsdk_utmify() in PHP, so links built in the dashboard app
 * report the same utm_source, utm_medium, utm_campaign and utm_content values.
 *
 * @param {string} url         The docs page URL.
 * @param {string} utmCampaign The feature or placement the link belongs to.
 * @param {string} utmMedium   The screen the link is shown on.
 * @return {string} The URL with UTM parameters.
 *
 * @example
 * docsURL('https://docs.themeisle.com/neve/neve-usage-tracking', 'usage-tracking', 'welcomepage')
 * // https://docs.themeisle.com/neve/neve-usage-tracking?utm_source=wpadmin&utm_medium=welcomepage&utm_campaign=usage-tracking&utm_content=docsneveneve-usage-tracking
 */
const docsURL = (url, utmCampaign, utmMedium) => {
	const content = [
		'https://',
		'themeisle.com',
		'/themes/',
		'/plugins/',
		'/upgrade',
	]
		.reduce((value, part) => value.split(part).join(''), url)
		.replace(/^\/+|\/+$/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9_-]/g, '');

	const link = new URL(url);
	link.searchParams.set('utm_source', 'wpadmin');
	link.searchParams.set('utm_medium', utmMedium);
	link.searchParams.set('utm_campaign', utmCampaign);
	link.searchParams.set('utm_content', content);

	return link.toString();
};

export { docsURL };
