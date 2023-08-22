import { test, expect } from '@playwright/test';

test.describe('Checkout page check', () => {
	test('Check checkout errors', async ({ page }) => {
		await page.goto('/product/album/');
		await page.locator('.single_add_to_cart_button').click();
		await page.goto('/checkout/');
		await page.locator('#place_order').click();
		await page.waitForTimeout(1000);
		await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.01 });
	});

	test('Check MyAccount errors', async ({ page }) => {
		await page.goto('/my-account/edit-account/');
		await page.locator('.woocommerce-Button').first().click();
		await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.01 });
	});
});
