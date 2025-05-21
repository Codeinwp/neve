import { test, expect } from '@playwright/test';

test('Checks the copyright in front-end', async ({ page }) => {
	await page.goto('/');

	const checkCopyrightVisible = async () => {
		await expect(
			page.locator('.hfg_footer .footer--row[data-show-on="desktop"]')
		).toHaveText('Neve | Powered by WordPress');
		await expect(
			page
				.locator('.hfg_footer .footer--row[data-show-on="desktop"] a')
				.nth(0)
		).toHaveAttribute('href', 'https://themeisle.com/themes/neve/');
		await expect(
			page
				.locator('.hfg_footer .footer--row[data-show-on="desktop"] a')
				.nth(1)
		).toHaveAttribute('href', 'https://wordpress.org');
	};

	// Check that the text is present for the Desktop footer
	await checkCopyrightVisible();

	// set viewport to mobile
	await page.setViewportSize({ width: 400, height: 800 });

	// Check that the text is present for the Mobile footer
	await checkCopyrightVisible();
});
