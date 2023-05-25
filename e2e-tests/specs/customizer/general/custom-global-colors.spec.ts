import { test, expect } from '@playwright/test';
import {
	clearWelcome,
	isIntersectingViewport,
	savePost,
	setCustomizeSettings,
} from '../../../utils';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

test.describe('Custom Global Color Control', () => {
	test('Test Custom Global Color appears in Gutenberg', async ({
		page,
		request,
		baseURL,
	}) => {
		await setCustomizeSettings(
			'custom-global-colors',
			{
				neve_global_custom_colors: {
					'custom-1': {
						label: 'Custom 1',
						val: '#ea0505',
					},
				},
			},
			{ request, baseURL }
		);

		await page.goto(
			'/wp-admin/post.php?post=1&action=edit&test_name=custom-global-colors'
		);
		await clearWelcome(page);

		await page.locator('.block-editor-rich-text__editable').first().click();
		// use Background color control to open the color picker, available since WP 6.1
		await page.getByRole('button', { name: 'Background' }).click();
		await page.getByRole('button', { name: 'Color: Custom 1' }).click();
		await page
			.locator('.block-editor-panel-color-gradient-settings__color-name')
			.getByText('Text')
			.click();

		await page.waitForSelector(
			'.block-editor-color-gradient-control__panel'
		);
		await expect(
			await isIntersectingViewport(
				'.block-editor-color-gradient-control__panel',
				page
			)
		).toBeTruthy();
		const colors = await page.locator(
			'.components-circular-option-picker__option-wrapper button'
		);
		let hasCustomColor = false;
		for (let i = 0; i < (await colors.count()); i++) {
			const attribute = await colors.nth(i).getAttribute('aria-label');
			if (attribute === 'Color: Custom 1') {
				await colors.nth(i).click();
				hasCustomColor = true;
				break;
			}
		}

		await expect(hasCustomColor).toBeTruthy();
		await savePost(page);
	});

	test('Check the color on frontend', async ({ page }) => {
		await page.goto('/hello-world/?test_name=custom-global-colors');
		await expect(
			await page.locator('.nv-content-wrap p').first()
		).toHaveClass(/has-custom-1-color/);
	});
});
