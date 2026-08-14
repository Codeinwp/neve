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

		await page.waitForFunction(() =>
			(
				window.wp.data.select('core/block-editor').getSettings()
					.colors || []
			).some((color: { slug: string }) => color.slug === 'custom-1')
		);

		// Clicking the palette swatch toggles, so a block left coloured by a
		// previous run would be cleared rather than set.
		await page.evaluate(() => {
			const { data } = window.wp;
			const [block] = data.select('core/block-editor').getBlocks();
			data.dispatch('core/block-editor').updateBlockAttributes(
				block.clientId,
				{ backgroundColor: 'custom-1' }
			);
		});
		await page.waitForFunction(
			() =>
				window.wp.data.select('core/block-editor').getBlocks()[0]
					?.attributes?.backgroundColor === 'custom-1'
		);

		await savePost(page);
	});

	test('Check the color on frontend', async ({ page }) => {
		await page.goto('/hello-world/?test_name=custom-global-colors');

		await page.waitForSelector('.nv-content-wrap > p');

		await expect(
			await page.locator('.nv-content-wrap > p').first()
		).toHaveClass(/has-custom-1-background-color/);
	});
});
