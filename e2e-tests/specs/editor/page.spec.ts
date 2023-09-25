import { test, expect } from '@playwright/test';

test.describe('Page Neve Options / Title Visibility', () => {
	test('Starter Sites Plugin install from Dashboard Notice', async ({
		page,
	}) => {
		await page.goto('wp-admin/post-new.php?post_type=page');

		await page.getByRole('textbox', { name: 'Add title' }).click();
		await page
			.getByRole('textbox', { name: 'Add title' })
			.fill('Test Title Visibility');
		await page.getByRole('button', { name: 'Neve Options' }).click();
		const titleLocator = page.locator('h1.editor-post-title');
		await expect(titleLocator).toHaveCSS('opacity', '1');
		await page.getByLabel('Disable Title').check();
		await expect(titleLocator).toHaveCSS('opacity', '0.5');
	});
});
