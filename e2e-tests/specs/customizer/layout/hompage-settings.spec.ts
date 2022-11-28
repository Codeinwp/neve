// import { test, expect } from '@playwright/test';
// import { loginWithRequest } from '../../../utils';
//
// test.describe.serial('Homepage-settings', function () {
// 	test.beforeEach(async ({ page }) => {
// 		await loginWithRequest('/wp-admin/customize.php', page);
// 		await page
// 			.locator(
// 				'#accordion-panel-neve_layout > .accordion-section-title'
// 			)
// 			.click();
// 		await page
// 			.locator(
// 				'#accordion-section-static_front_page > .accordion-section-title'
// 			)
// 			.click();
// 		await page
// 			.locator('#_customize-input-show_on_front-radio-page')
// 			.click();
// 	});
//
// 	test('Sets up a page to be the homepage', async ({ page }) => {
// 		await page
// 			.locator('#_customize-input-page_on_front')
// 			.selectOption({ label: 'Sample Page' });
// 		await page.locator('#save').click({ force: true });
// 		await page.goto('/');
// 		await page.reload();
// 		await expect(page.locator('.nv-page-title h1')).toHaveText(
// 			'Sample Page'
// 		);
// 	});
//
// 	test('Sets up a page to be the posts page', async ({ page }) => {
// 		await page
// 			.locator('#_customize-input-page_for_posts')
// 			.selectOption({ label: 'Blog' });
// 		await page.locator('#save').click({ force: true });
// 		await page.goto('/blog');
// 		await page.reload();
// 		await expect(page.locator('.nv-page-title h1')).toHaveText('Blog');
// 		await expect(page.locator('body')).not.toHaveClass(/home/);
// 	});
//
// 	test('Sets the homepage to be the latest posts', async ({ page }) => {
// 		await page
// 			.locator('#_customize-input-show_on_front-radio-posts')
// 			.click();
// 		await page.locator('#save').click({ force: true });
// 		await page.goto('/');
// 		await page.reload();
// 		await expect(page.locator('body')).toHaveClass(/home/);
// 	});
// });
