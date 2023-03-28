import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings } from '../../utils';
import data from '../../fixtures/woocommerce/header-mini-cart.json';

/**
 * Function that tests the layout of a webpage using the Jest testing framework
 *
 * @param {Page} page - The `Page` object
 * @param {string} selector - The CSS selector to locate the elements on the page
 * @param {Object} viewPort - The size of the viewport as an object with properties `width` and `height`
 * @param {number} viewPort.width - The width of the viewport
 * @param {number} viewPort.height - The height of the viewport
 * @param {Object} viewportData - The data for the test, containing an array of CSS properties to check
 * @param {Object} viewportData.cssProperties - The array of CSS properties to check
 */
const testForViewport = async (
	page: Page,
	selector: string,
	viewPort: { width: number; height: number },
	viewportData: {
		cssProperties: {
			property: string;
			value: string;
		}[];
	}
) => {
	await page.setViewportSize(viewPort);
	const elements = await page.locator(selector);
	const count = await elements.count();
	await expect(count).toBeGreaterThan(0);

	for (let index = 0; index < (await elements.count()); index++) {
		const element = await elements.nth(index);

		for (const cssProperty of viewportData.cssProperties) {
			await expect(element).toHaveCSS(
				cssProperty.property,
				cssProperty.value
			);
		}
	}
};

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
