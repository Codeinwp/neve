import { test, expect } from '@playwright/test';

test.describe('Dashboard tab from the URL hash', () => {
	test('a hash naming a link-only tab opens the Welcome tab', async ({
		page,
	}) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(error.message));

		// "Get Neve Pro" is a link, not a tab with content. "Starter Sites" is
		// the same once the Starter Sites plugin is active.
		await page.goto('wp-admin/admin.php?page=neve-welcome#get-neve-pro');

		await expect(
			page.getByRole('link', { name: 'Go to Customizer' })
		).toBeVisible();
		expect(errors).toEqual([]);
	});
});
