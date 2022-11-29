import { test, expect } from '@playwright/test';
import {
	loadData,
	setCustomizeSettings,
	loginWithRequest,
	clearWelcome,
} from '../../../utils';

const setup = {
	fontSize: {
		mobile: '10',
		tablet: '11',
		desktop: '12',
	},
	lineHeight: {
		mobile: '40',
		tablet: '33',
		desktop: '24',
	},
	letterSpacing: {
		mobile: '3',
		tablet: '2',
		desktop: '1',
	},
	fontWeight: '500',
	textTransform: 'lowercase',
};

const deviceMap = {
	desktop: {
		height: 1080,
		width: 1920,
	},
	tablet: {
		height: 1024,
		width: 768,
	},
	mobile: {
		height: 667,
		width: 375,
	},
};

test.describe('Typography Control', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		await loadData('./fixtures/customizer/typography/font-size.json').then(
			async (data) => {
				await setCustomizeSettings('fontSize', data, {
					request,
					baseURL,
				});
			}
		);
	});

	test('Test Typography on Front End', async ({ page }) => {
		await page.goto('/markup-html-tags-and-formatting/?test_name=fontSize');
		const bodySelector = await page.locator('body');

		await expect(bodySelector).toHaveCSS('text-transform', 'lowercase');
		await expect(bodySelector).toHaveCSS('font-weight', setup.fontWeight);
	});

	// eslint-disable-next-line array-callback-return
	Object.keys(deviceMap).map(async (device) => {
		test(`Test Typography on Front End on ${device}`, async ({
			browser,
		}) => {
			const context = await browser.newContext({
				viewport: {
					width: deviceMap[device].width,
					height: deviceMap[device].height,
				},
			});
			const page = await context.newPage();
			await page.goto('/?test_name=fontSize');
			const bodySelector = await page.locator('body');

			await expect(bodySelector).toHaveCSS(
				'font-size',
				setup.fontSize[device] + 'px'
			);

			await expect(bodySelector).toHaveCSS(
				'line-height',
				setup.lineHeight[device] + 'px'
			);

			await expect(bodySelector).toHaveCSS(
				'letter-spacing',
				setup.letterSpacing[device] + 'px'
			);
		});
	});

	test('Test Typography inside the Editor', async ({ page }) => {
		await loginWithRequest(
			'/markup-html-tags-and-formatting/?test_name=fontSize',
			page
		);
		const editPageLink = await page
			.locator('#wp-admin-bar-edit > a')
			.getAttribute('href');

		await page.goto(editPageLink + '&test_name=fontSize');

		await clearWelcome(page);

		const pElements = await page.locator(
			'.editor-styles-wrapper.block-editor-writing-flow p'
		);
		for (let index = 0; index < (await pElements.count()); index++) {
			await expect(await pElements.nth(index)).toHaveCSS(
				'text-transform',
				setup.textTransform
			);
			await expect(await pElements.nth(index)).toHaveCSS(
				'font-weight',
				setup.fontWeight
			);
			await expect(await pElements.nth(index)).toHaveCSS(
				'font-size',
				setup.fontSize.desktop + 'px'
			);
			// await expect(await pElements.nth(index)).toHaveCSS(
			// 	'line-height',
			// 	setup.lineHeight.desktop
			// );
			await expect(await pElements.nth(index)).toHaveCSS(
				'letter-spacing',
				setup.letterSpacing.desktop + 'px'
			);
		}
	});
});
