import { test, expect } from '@playwright/test';
import {
	loadData,
	setCustomizeSettings,
	loginWithRequest,
	clearWelcome,
} from '../../../utils';

const fonts = {
	general: 'Arapey',
	headings: 'Allerta Stencil',
};

test.describe('Font Family', () => {

	const headingSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

	test.beforeAll(async ({ request, baseURL }) => {
		await loadData(
			'./fixtures/customizer/typography/font-family.json'
		).then(async (data) => {
			await setCustomizeSettings('fontFamily', data, {
				request,
				baseURL,
			});
		});
	});

	test('Font Family on Front End', async ({ page }) => {
		await page.goto(
			'/markup-html-tags-and-formatting/?test_name=fontFamily'
		);

		await expect(await page.locator('body')).toHaveCSS(
			'font-family',
			new RegExp(`${fonts.general}`)
		);

		for (const heading of headingSelectors) {
			const headings = await page.locator(heading);
			for (let index = 0; index < (await headings.count()); index++) {
				await expect(await headings.nth(index)).toHaveCSS(
					'font-family',
					new RegExp(`${fonts.headings}`)
				);
			}
		}
	});

	test('Test Font Family inside the Editor', async ({ page }) => {
		await loginWithRequest(
			'/markup-html-tags-and-formatting/?test_name=fontFamily',
			page
		);
		const editPageLink = await page
			.locator('#wp-admin-bar-edit > a')
			.getAttribute('href');
		await page.goto(editPageLink + '&test_name=fontFamily');

		await clearWelcome(page);

		const pElements = await page.locator(
			'.editor-styles-wrapper.block-editor-writing-flow p'
		);
		for (let index = 0; index < (await pElements.count()); index++) {
			await expect(await pElements.nth(index)).toHaveCSS(
				'font-family',
				new RegExp(`${fonts.general}`)
			);
		}

		for (const heading of headingSelectors) {
			const headings = await page.locator(
				'.editor-styles-wrapper ' + heading
			);
			for (let index = 0; index < (await headings.count()); index++) {
				await expect(await headings.nth(index)).toHaveCSS(
					'font-family',
					new RegExp(`${fonts.headings}`)
				);
			}
		}
	});
});
