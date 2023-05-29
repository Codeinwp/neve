import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../utils';
import data from '../../fixtures/woocommerce/single-product-setup.json';

test.describe('Single product', function () {
	test('Check exclusive products section title and visibility', async ({
		page,
		request,
		baseURL,
	}) => {
		await setCustomizeSettings('exclusive', data, {
			request,
			baseURL,
		});

		await page.goto('/product/beanie/?test_name=exclusive');

		const exclusiveSection = await page.locator('.exclusive.products');
		await expect(exclusiveSection).toBeVisible();
		await expect(await exclusiveSection.locator('.dots-nav')).toBeVisible();
		await expect(await exclusiveSection.locator('h2').first()).toHaveText(
			/Exclusive Products/
		);
	});
});
