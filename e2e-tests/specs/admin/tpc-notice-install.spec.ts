import { test, expect } from '@playwright/test';
import { setCustomizeSettings, visitAdminPage } from '../../utils';

const TPC_PLUGIN =
	'templates-patterns-collection/templates-patterns-collection';
const TEST_NAME = 'tpcNotice';

test.describe('Dashboard Notice', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		const endpoint = `${baseURL}/wp-json/wp/v2/plugins/${TPC_PLUGIN}`;

		// Both calls 404 harmlessly when the plugin is already absent.
		const deactivateResponse = await request.put(endpoint, {
 			data: { status: 'inactive' },
 		});
 		expect(
 			deactivateResponse.ok() || deactivateResponse.status() === 404
 		).toBeTruthy();

		const deleteResponse = await request.delete(endpoint);
 		expect(deleteResponse.ok() || deleteResponse.status() === 404).toBeTruthy();

		// Overridden per-request via ?test_name=, not written to the options table.
		await setCustomizeSettings(
			TEST_NAME,
			{
				options: {
					neve_notice_dismissed: 'no',
					neve_install: Math.floor(Date.now() / 1000),
				},
			},
			{ request, baseURL }
		);
	});

	test('Starter Sites Plugin install from Dashboard Notice', async ({
		page,
	}) => {
		await visitAdminPage(page, 'index.php', `test_name=${TEST_NAME}`);

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
			'Choose a design'
		);

		const categories = await page.locator('.ob-cat-wrap .cat');
		await expect(categories).toContainText([
			'Business',
			'Education',
			'eCommerce',
			'News',
			'Non-Profit',
			'Health',
		]);

		await page.goto('/wp-admin/index.php');

		await expect(page).toHaveURL(/wp-admin\/index.php/);

		await expect(page.locator('button.install-now')).not.toBeVisible();
	});
});
