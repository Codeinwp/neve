import { test, expect } from '@playwright/test';
import { goToCustomizer } from "../../utils";

test.describe('Homepage-settings', function () {
	test.beforeEach(async ({ page }) => {
		await goToCustomizer(page);
		await page
			.locator('#accordion-panel-neve_layout > .accordion-section-title')
			.click();
		await page
			.locator(
				'#accordion-section-static_front_page > .accordion-section-title'
			)
			.click();
		await page
			.locator('#_customize-input-show_on_front-radio-page')
			.click();
	});

	test('Sets up a page to be the homepage', async ({ page }) => {
		await page
			.locator('#_customize-input-page_on_front')
			.selectOption({ label: 'Sample Page' });
		await page.locator('#save').click();
		await page.goto('/');
		await expect(page.locator('h1')).toHaveText('Sample Page');
	});
});
