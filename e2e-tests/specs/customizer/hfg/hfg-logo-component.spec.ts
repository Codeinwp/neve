import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings, visitAdminPage } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/hfg-logo-component.json';

test.describe('Logo Component', function () {
	let page: Page;
	const logos: { id: string; url: string | null }[] = [];

	test.beforeAll(async ({ browser, request, baseURL }) => {
		page = await browser.newPage();
		await visitAdminPage(page, 'upload.php', '');
		await page.waitForSelector('.attachment');
		const imageLocators = await page.locator('.attachment').count();

		for (let i = 0; i < Math.min(imageLocators, 2); i++) {
			const imageLocator = await page.locator(
				`.attachment:nth-child(${i + 1})`
			);
			await imageLocator.click();
			const urlString = page.url();
			const url = new URL(urlString);
			const imageId = url.searchParams.get('item') || '';
			const imageUrl = await page
				.locator('#attachment-details-two-column-copy-link')
				.getAttribute('value');
			logos.push({ id: imageId, url: imageUrl });
			await page.goBack(); // Go back to the previous page to select the next image
		}

		data.logo_logo =
			'{"dark":"' +
			(logos[0]?.id || '') +
			'","light":"' +
			(logos[1]?.id || '') +
			'","same":false}';

		await setCustomizeSettings('hfgLogo', data, {
			request,
			baseURL,
		});
	});

	test('Check light/dark-mode logo', async () => {
		await page.goto('/?test_name=hfgLogo');

		const siteLogo = await page.locator('.desktop-left .neve-site-logo');

		await expect(await siteLogo.getAttribute('src')).toBe(logos[1]?.url);

		await page.locator('.icon > svg > path').click();

		await expect(await siteLogo.getAttribute('src')).toBe(logos[0]?.url);
	});
});
