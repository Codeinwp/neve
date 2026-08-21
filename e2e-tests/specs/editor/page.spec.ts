import { test, expect } from '@playwright/test';
import { clearWelcome } from '../../utils';

test.describe('Page Neve Options / Title Visibility', () => {
	test('Disable Title dims the title in the editor', async ({ page }) => {
		await page.goto('wp-admin/post-new.php?post_type=page');

		await clearWelcome(page);
		const welcomeGuide = page.locator('.edit-post-welcome-guide');
		if (await welcomeGuide.isVisible().catch(() => false)) {
			await welcomeGuide.getByRole('button', { name: 'Close' }).click();
		}
		await expect(welcomeGuide).toHaveCount(0);

		const canvas = page.frameLocator('iframe[name="editor-canvas"]');
		const titleLocator = canvas.locator('h1.editor-post-title');

		await titleLocator.click();
		await titleLocator.fill('Test Title Visibility');
		await page.getByRole('button', { name: 'Neve Options' }).click();
		await expect(titleLocator).toHaveCSS('opacity', '1');
		await page.getByLabel('Disable Title').check();
		await expect(titleLocator).toHaveCSS('opacity', '0.5');
	});
});
