import { test, expect } from '@playwright/test';
import { scrollTo } from '../../utils';

test.describe('Single Post', () => {
	test('Comments section', async ({ page }) => {
		await page.goto('/template-comments');
		await page.evaluate(() => {
			// @ts-ignore
			document.body.style.zoom = 0.7;
		});

		await scrollTo(page, 500);
		await expect(page).toHaveScreenshot();

		await scrollTo(page, 5100);
		await expect(page).toHaveScreenshot();
	});
});
