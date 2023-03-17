import { join } from 'path';
import { expect, Page } from '@playwright/test';

/**
 * Set customize settings for a specific test.
 *
 * @param {string} testName The name of the test to update.
 * @param {string} data A JSON string of the customize settings data to set.
 * @param {Object} options - An object containing the request and baseURL properties
 * @param {Object} options.request - An instance of a request library to make the API call
 * @param {string} options.baseURL - The base URL of the API endpoint.
 *
 * @return {Promise} - A promise that resolves when the API call is completed.
 * @throws {Error} - If the API returns a non-OK status.
 */
export const setCustomizeSettings = async (
	testName: string,
	data: any,
	{ request, baseURL }: any
) => {
	const response = await request.post(
		baseURL + '/wp-json/wpthememods/v1/settings/' + testName,
		{
			data,
		}
	);
	expect(response.ok()).toBeTruthy();
};

/**
 * Login with request function.
 *
 * @param {string} nextRoute - Route to redirect after login.
 * @param {Page} page - A playwright Page object representing the web page
 */
export const loginWithRequest = async (nextRoute = '/wp-admin', page: Page) => {
	let isLoggedIn = false;
	await page
		.context()
		.cookies()
		.then((cookies: any[]) => {
			cookies.forEach((value) => {
				if (value.name.includes('wordpress_logged_in_')) {
					isLoggedIn = true;
				}
			});
		});
	if (!isLoggedIn) {
		await page.goto('/');
	}
	await page.goto(nextRoute);
};

/**
 * Creates new URL by parsing base URL, WPPath and query string.
 *
 * @param {string}  WPPath String to be serialized as pathname.
 * @param {?string} query  String to be serialized as query portion of URL.
 * @return {string} String which represents full URL.
 */
export function createURL(WPPath: string, query = '') {
	const currentUrl = process.env.baseURL || 'http://localhost:8080';
	const url = new URL(currentUrl);

	url.pathname = join(url.pathname, WPPath);
	url.search = query;
	return url.href;
}

/**
 * Checks if current URL is a WordPress path.
 *
 * @param {Page} page
 * @param {string}  WPPath String to be serialized as pathname.
 * @param {?string} query  String to be serialized as query portion of URL.
 * @return {boolean} Boolean represents whether current URL is or not a WordPress path.
 */
export function isCurrentURL(page: Page, WPPath: string, query = '') {
	const currentURL = new URL(page.url());

	currentURL.search = query;

	return createURL(WPPath, query) === currentURL.href;
}

/**
 * Visits admin page; if user is not logged in then it logging in it first, then visits admin page.
 *
 * @param {Page} page - A playwright Page object representing the web page
 * @param {string} adminPath String to be serialized as pathname.
 * @param {string} query     String to be serialized as query portion of URL.
 */
export async function visitAdminPage(
	page: Page,
	adminPath: string,
	query: string
) {
	const url = createURL(join('wp-admin', adminPath), query).replace(
		/%23/g,
		'#'
	);
	await page.goto(url);

	// Handle upgrade required screen.
	if (isCurrentURL(page, 'wp-admin/upgrade.php')) {
		// Click update.
		await page.click('.button.button-large.button-primary');
		// Click continue.
		await page.click('.button.button-large');
	}

	if (isCurrentURL(page, 'wp-login.php')) {
		await loginWithRequest(url, page);
		await visitAdminPage(page, adminPath, query);
	}

	const error = await getPageError(page);
	if (error) {
		throw new Error('Unexpected error in page content: ' + error);
	}
}

/**
 * Regular expression matching a displayed PHP error within a markup string.
 *
 * @see https://github.com/php/php-src/blob/598175e/main/main.c#L1257-L1297
 *
 * @type {RegExp}
 */
const REGEXP_PHP_ERROR =
	/(<b>)?(Fatal error|Recoverable fatal error|Warning|Parse error|Notice|Strict Standards|Deprecated|Unknown error)(<\/b>)?: (.*?) in (.*?) on line (<b>)?\d+(<\/b>)?/;

/**
 * Returns a promise resolving to one of either a string or null. A string will
 * be resolved if an error message is present in the contents of the page. If no
 * error is present, a null value will be resolved instead. This requires the
 * environment be configured to display errors.
 *
 * @param {Page} page - A playwright Page object representing the web page
 *
 * @see http://php.net/manual/en/function.error-reporting.php
 *
 * @return {Promise<?string>} Promise resolving to a string or null, depending
 *                            whether a page error is present.
 */
export async function getPageError(page: Page) {
	const content = await page.content();
	const match = content.match(REGEXP_PHP_ERROR);
	return match ? match[0] : null;
}

/**
 * Clear the welcome screen inside dashboard.
 *
 * @param {Page} page - A playwright Page object representing the web page
 */
export const clearWelcome = async (page: Page) => {
	await page.evaluate(() => {
		// eslint-disable-next-line no-unused-expressions
		window.wp &&
			window.wp.data &&
			window.wp.data
				.select('core/edit-post')
				.isFeatureActive('welcomeGuide') &&
			window.wp.data
				.dispatch('core/edit-post')
				.toggleFeature('welcomeGuide');
	});
};

/**
 * Determines if the element specified by the selector is currently intersecting the viewport.
 *
 * @param {string} selector - A string containing a selector expression to match the element
 * @param {Page} page - A playwright Page object representing the web page
 *
 * @return {Promise<boolean>} - A promise that resolves to true if the element is currently intersecting the viewport, or false otherwise.
 */
export const isIntersectingViewport = async (selector: string, page: Page) => {
	const visibleRatio: number = await page.evaluate((select: string) => {
		return new Promise((resolve) => {
			const element = document.querySelector(select);
			// eslint-disable-next-line no-undef
			const observer = new IntersectionObserver((entries) => {
				resolve(entries[0].intersectionRatio);
				observer.disconnect();
			});
			if (element) {
				observer.observe(element);
			}
			// eslint-disable-next-line no-undef
			requestAnimationFrame(() => {});
		});
	}, selector);
	return visibleRatio > 0;
};

/**
 * Utility function to save a post.
 *
 * @param {Page} page - A playwright Page object representing the web page
 */
export const savePost = async (page: Page) => {
	const saveButton = await page.locator(
		'.editor-post-publish-button__button'
	);
	await expect(saveButton).toBeVisible();
	await expect(saveButton).toBeEnabled();
	await saveButton.click();
	await page.waitForTimeout(2000);
};

/**
 * Scroll to a specific location on the page.
 *
 * @param {Page} page - The Puppeteer Page object to operate on.
 * @param {string|number} to - The location to scroll to. Accepts either 'top', 'bottom', or a numeric Y-coordinate.
 */
export const scrollTo = async (page: Page, to: string | number) => {
	await page.evaluate((location) => {
		let y = 0;
		if (location === 'top') {
			y = 0;
		}
		if (location === 'bottom') {
			y = document.body.scrollHeight;
		}
		if (typeof location === 'number') {
			y = location;
		}
		window.scrollTo(0, y);
	}, to);
};
