import { test, expect } from '@playwright/test';
import { scrollTo, logOut } from '../../utils';

test.describe('Single Post', () => {
	test('Check comments section', async ({ page }) => {
		await logOut(page);
		await page.goto('/template-comments');

		const comments = await page.locator('#comments').boundingBox();
		const multiLevelComments = await page
			.locator('#comments .children')
			.first()
			.boundingBox();
		const commentsForm = await page.locator('#respond').boundingBox();

		for (const position of [comments, multiLevelComments, commentsForm]) {
			if (!position) {
				continue;
			}
			await scrollTo(page, position.y);
			await page.waitForTimeout(2000);
			await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.01 });
		}
	});
});
