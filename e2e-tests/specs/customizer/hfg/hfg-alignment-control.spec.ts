import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Header Builder Alignment Control', function () {
	let customizerData;

	test.beforeAll(async () => {
		customizerData = await loadData(
			'./fixtures/customizer/hfg/alignment-control-setup.json'
		);
	});

	test('Checks alignment for the Logo to Center', async ({
		page,
		request,
		baseURL,
	}) => {
		const data = JSON.parse(customizerData);
		await setCustomizeSettings(
			'hfgLogoCenter',
			JSON.stringify(data.center),
			{
				request,
				baseURL,
			}
		);

		await page.goto('/?test_name=hfgLogoCenter');
		const siteLogo = await page.locator(
			'.nv-navbar.hide-on-mobile .site-logo'
		);
		await expect(siteLogo).toBeVisible();
		await expect(siteLogo).toHaveCSS('text-align', 'center');
	});

	test('Checks alignment for the Logo to Right', async ({
		page,
		request,
		baseURL,
	}) => {
		const data = JSON.parse(customizerData);
		await setCustomizeSettings('hfgLogoRight', JSON.stringify(data.right), {
			request,
			baseURL,
		});

		await page.goto('/?test_name=hfgLogoRight');
		const siteLogo = await page.locator(
			'.nv-navbar.hide-on-mobile .site-logo'
		);
		await expect(siteLogo).toBeVisible();
		await expect(siteLogo).toHaveCSS('text-align', 'right');
	});

	test('Checks alignment for the Logo to Left', async ({
		page,
		request,
		baseURL,
	}) => {
		const data = JSON.parse(customizerData);
		await setCustomizeSettings('hfgLogoRight', JSON.stringify(data.right), {
			request,
			baseURL,
		});

		await page.goto('/?test_name=hfgLogoLeft');
		const siteLogo = await page.locator(
			'.nv-navbar.hide-on-mobile .site-logo'
		);
		await expect(siteLogo).toBeVisible();
		await expect(siteLogo).toHaveCSS('text-align', 'left');
	});
});
