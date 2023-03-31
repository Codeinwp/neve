import { test, expect } from '@playwright/test';
import { setCustomizeSettings, testForViewport } from '../../utils';
import data from '../../fixtures/woocommerce/button-setup.json';

test.describe('WooCommerce buttons', function () {
	test('Checks the add to cart button', async ({
		page,
		request,
		baseURL,
	}) => {
		await setCustomizeSettings('button-setup', data, { request, baseURL });
		await page.goto('/product/beanie/?test_name=button-setup');

		const addToCartSelector = '.single_add_to_cart_button';
		const addToCartText = await page.locator(addToCartSelector).innerText();
		await expect(addToCartText).toBe('Add To Cart');

		await testForViewport(
			page,
			addToCartSelector,
			{ width: 1536, height: 960 },
			{
				cssProperties: [
					{ property: 'color', value: 'rgb(4, 177, 24)' },
					{
						property: 'background-color',
						value: 'rgb(255, 255, 255)',
					},
					{ property: 'border', value: '1px solid rgb(4, 177, 24)' },
					{ property: 'text-transform', value: 'capitalize' },
					{ property: 'font-size', value: '15px' },
				],
			}
		);
	});
});
