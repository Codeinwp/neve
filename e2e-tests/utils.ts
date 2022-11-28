const { promises: fsPromise } = require('fs');
const path = require('path');
import { expect } from '@playwright/test';
import { addQueryArgs } from '@wordpress/url';

/**
 * Load data form file.
 *
 * @param {string} filePath Path of the file to read.
 */
export const loadData = async (filePath) => {
	const jsonPath = path.join(__dirname, filePath);
	return await fsPromise.readFile(jsonPath, 'utf8');
};

/**
 * Set customizer settings.
 *
 * @param testname
 * @param data
 * @param root0
 * @param root0.request
 * @param root0.baseURL
 * @param root0.request.request
 * @param root0.request.baseURL
 */
export const setCustomizeSettings = async (
	testname,
	data,
	{ request, baseURL }
) => {
	const customizerData = JSON.parse(data);
	const response = await request.post(
		baseURL + '/wp-json/wpthememods/v1/settings/' + testname,
		{
			data: customizerData,
		}
	);
	expect(response.ok()).toBeTruthy();
};

export const loginWithRequest = async (nextRoute = '/wp-admin', page) => {
	let isLoggedIn = false;
	await page
		.context()
		.cookies()
		.then((cookies) => {
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

export const clearWelcome = async (page) => {
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
//
// /**
//  * Creates new post.
//  *
//  * @param {Object}  object                    Object to create new post, along with tips enabling option.
//  * @param {string}  [object.postType]         Post type of the new post.
//  * @param {string}  [object.title]            Title of the new post.
//  * @param {string}  [object.content]          Content of the new post.
//  * @param {string}  [object.excerpt]          Excerpt of the new post.
//  * @param {boolean} [object.showWelcomeGuide] Whether to show the welcome guide.
//  */
// export async function createNewPost({
// 	postType,
// 	title,
// 	content,
// 	excerpt,
// 	showWelcomeGuide = false,
// } = {}) {
// 	const query = addQueryArgs('', {
// 		post_type: postType,
// 		post_title: title,
// 		content,
// 		excerpt,
// 	}).slice(1);
//
// 	await this.visitAdminPage('post-new.php', query);
//
// 	await this.page.waitForSelector('.edit-post-layout');
//
// 	const isWelcomeGuideActive = await this.page.evaluate(() =>
// 		window.wp.data.select('core/edit-post').isFeatureActive('welcomeGuide')
// 	);
// 	const isFullscreenMode = await this.page.evaluate(() =>
// 		window.wp.data
// 			.select('core/edit-post')
// 			.isFeatureActive('fullscreenMode')
// 	);
//
// 	if (showWelcomeGuide !== isWelcomeGuideActive) {
// 		await this.page.evaluate(() =>
// 			window.wp.data
// 				.dispatch('core/edit-post')
// 				.toggleFeature('welcomeGuide')
// 		);
//
// 		await this.page.reload();
// 		await this.page.waitForSelector('.edit-post-layout');
// 	}
//
// 	if (isFullscreenMode) {
// 		await this.page.evaluate(() =>
// 			window.wp.data
// 				.dispatch('core/edit-post')
// 				.toggleFeature('fullscreenMode')
// 		);
//
// 		await this.page.waitForSelector('body:not(.is-fullscreen-mode)');
// 	}
// }
