import { test, expect } from '@playwright/test';
import { visitAdminPage } from '../../utils';

test.describe('Dashboard Notice', () => {
	test('Starter Sites Plugin install from Dashboard Notice', async ({
		page,
	}) => {
		await visitAdminPage(page, 'index.php', '');

		await expect(page).toHaveURL(/wp-admin\/index.php/);

		await expect(page.locator('.button.install-now')).toBeVisible();
		await expect(page.locator('a.ti-return-dashboard')).toBeVisible();

		await Promise.all([
			page.waitForURL(/wp-admin\/admin.php\?page=neve-onboarding/),
			page.locator('.button.install-now').click(),
			expect(page.locator('.button.install-now')).toContainText(
				/(Activating|Installing)/
			),
		]);

		await expect(page).toHaveURL(
			/wp-admin\/admin.php\?page=neve-onboarding/
		);

		// Welcome screen
		await expect(page.locator('h1')).toContainText(
			'What type of website are you creating?'
		);

		const categories = await page.locator('.ob-cat-wrap .cat');
		await expect(categories).toContainText([
			'Business',
			'Personal',
			'Blogging',
			'Portfolio',
			'E-Shop',
		]);

		await page.goto('/wp-admin/index.php');

		await expect(page).toHaveURL(/wp-admin\/index.php/);

		await expect(page.locator('button.install-now')).not.toBeVisible();
	});
});
