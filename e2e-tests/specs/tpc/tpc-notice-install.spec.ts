import { test, expect } from '@playwright/test';
import { loginWithRequest } from '../../utils';

test('test', async ({ page }) => {
	await loginWithRequest('/wp-admin/index.php', page);

	if (page.url().includes('wp-login.php')) {
		throw new Error('Not logged in');
	}

	await expect(page).toHaveURL(/wp-admin\/index.php/);

	await expect(page.locator('button.install-now')).toContainText(
		'Try one of our ready to use Starter Sites'
	);
	await expect(page.locator('button.install-now')).toBeVisible();
	await page.locator('button.install-now').click();

	await expect(page.locator('button.install-now')).toContainText(
		/(Activating|Installing)/
	);

	await page.waitForNavigation();

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
