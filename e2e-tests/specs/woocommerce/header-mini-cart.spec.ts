import { test, expect } from '@playwright/test';
import { setCustomizeSettings, testForViewport } from '../../utils';
import data from '../../fixtures/woocommerce/header-mini-cart.json';

test.describe('Header Mini Cart Functionality', function () {
	test.beforeAll(async ({ request, baseURL }) => {
		await setCustomizeSettings(
			'mini-cart-functionality',
			data.functionality,
			{
				request,
				baseURL,
			}
		);
	});

	test('Open the cart page when clicking on mini cart', async ({ page }) => {
		await page.goto('/shop/?test_name=mini-cart-functionality');
		await page.locator('.nv-icon > svg > path').click();
		await expect(page).toHaveURL(/cart/);
	});

	test('Value of products is updated when adding or removing a product', async ({
		page,
	}) => {
		// Add product to cart
		await page.goto('/product/album/?test_name=mini-cart-functionality');
		await expect(await page.locator('.cart-count').innerText()).toBe('0');
		await page.locator('.single_add_to_cart_button').click();
		await page.goto('/product/album/?test_name=mini-cart-functionality');
		await expect(await page.locator('.cart-count').innerText()).toBe('1');

		// Removes the product from cart
		await page.goto('/product/album/?test_name=mini-cart-functionality');
		await page.hover('.nv-icon > svg');
		await page.waitForSelector('.nv-nav-cart');
		await page.locator('.nv-nav-cart .remove').click();
		await page.waitForTimeout(500);
		await expect(await page.locator('.cart-count').innerText()).toBe('0');
	});
});

test.describe('Header Mini Cart Style', function () {
	test('Check the mini cart style', async ({ page, request, baseURL }) => {
		await setCustomizeSettings('mini-cart-style', data.style, {
			request,
			baseURL,
		});

		await page.goto('/shop/?test_name=mini-cart-style');
		await testForViewport(
			page,
			'.nv-icon > svg',
			{ width: 1536, height: 960 },
			{
				cssProperties: [
					{ property: 'color', value: 'rgb(118, 5, 5)' },
					{ property: 'fill', value: 'rgb(118, 5, 5)' },
					{ property: 'width', value: '80px' },
				],
			}
		);

		await testForViewport(
			page,
			'[data-item-id="header_cart_icon"]',
			{ width: 1536, height: 960 },
			{
				cssProperties: [
					{ property: 'padding-bottom', value: '0px' },
					{ property: 'padding-top', value: '0px' },
					{ property: 'padding-left', value: '10px' },
					{ property: 'padding-right', value: '10px' },
					{ property: 'margin-bottom', value: '0px' },
					{ property: 'margin-top', value: '0px' },
					{ property: 'margin-left', value: '0px' },
					{ property: 'margin-right', value: '0px' },
				],
			}
		);

		await page.hover('.nv-icon > svg');
		await expect(await page.locator('.nv-icon > svg').first()).toHaveCSS(
			'color',
			'rgb(18, 90, 50)'
		);
		await expect(await page.locator('.nv-icon > svg').first()).toHaveCSS(
			'fill',
			'rgb(18, 90, 50)'
		);
	});
});
