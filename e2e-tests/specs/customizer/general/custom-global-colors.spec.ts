import { test, expect } from '@playwright/test';
import {
	clearWelcome,
	isIntersectingViewport,
	savePost,
	setCustomizeSettings,
	visitAdminPage,
} from '../../../utils';
import { addQueryArgs } from '@wordpress/url';

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

		const query = addQueryArgs('', {
			post: 1,
			action: 'edit',
			test_name: 'custom-global-colors',
		}).slice(1);
		await visitAdminPage(page, 'post.php', query);
		await clearWelcome(page);

		await page.locator('.block-editor-rich-text__editable').first().click();
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
});
