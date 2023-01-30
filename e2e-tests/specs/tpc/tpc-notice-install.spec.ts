import { test, expect } from '@playwright/test';
import { visitAdminPage} from '../../utils';

test.describe('Dashboard Notice', () => {
	test('Starter Sites Plugin install from Dashboard Notice', async ({
		page,
	}) => {
		await visitAdminPage(page, 'index.php', '');

		await expect(page).toHaveURL(/wp-admin\/index.php/);

		await expect(page.locator('button.install-now')).toContainText(
			'Try one of our ready to use Starter Sites'
		);
		await expect(page.locator('button.install-now')).toBeVisible();

		await Promise.all([
			page.waitForNavigation({
				url: /wp-admin\/themes.php\?page=tiob-starter-sites&onboarding=yes/,
			}),
			page.locator('button.install-now').click(),
			expect(page.locator('button.install-now')).toContainText(
				/(Activating|Installing)/
			),
		]);

		await expect(page).toHaveURL(
			/wp-admin\/themes.php\?page=tiob-starter-sites&onboarding=yes/
		);

		await expect(page.locator('a.tab')).toContainText([
			'All Categories',
			'Free',
			'Business',
			'Portfolio',
			'WooCommerce',
			'Blog',
			'Personal',
			'Other',
		]);

		await page.goto('/wp-admin/index.php');

		await expect(page).toHaveURL(/wp-admin\/index.php/);

		await expect(page.locator('button.install-now')).not.toBeVisible();
	});
});
