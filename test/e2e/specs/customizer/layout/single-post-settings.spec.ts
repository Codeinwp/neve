import { test, expect, Page } from '@playwright/test';
import {
	setCustomizeSettings,
	loginWithRequest,
	loadData,
} from '../../../utils';

test.describe('Single Post Check', function () {
	/**
	 * Declare local variables.
	 */
	let customizerData;
	let page: Page;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		customizerData = await loadData(
			'./fixtures/customizer/layout/single-post-settings.json'
		);
	});

	test('Shows all options on customizer.', async () => {
		await loginWithRequest('/wp-admin/customize.php', page);
		await page
			.locator('#accordion-panel-neve_layout > .accordion-section-title')
			.click();
		await page
			.locator(
				'#accordion-section-neve_single_post_layout > .accordion-section-title'
			)
			.click();

		const selectors = [
			'customize-control-neve_post_header_layout_heading',
			'customize-control-neve_post_header_layout',
			'customize-control-neve_post_cover_height',
			'customize-control-neve_post_cover_padding',
			'customize-control-neve_post_title_alignment',
			'customize-control-neve_post_title_position',
			'customize-control-neve_post_cover_meta_before_title',
			'customize-control-neve_post_cover_background_color',
			'customize-control-neve_post_cover_text_color',
			'customize-control-neve_post_cover_overlay_opacity',
			'customize-control-neve_post_cover_hide_thumbnail',
			'customize-control-neve_post_cover_blend_mode',
			'customize-control-neve_post_cover_container',
			'customize-control-neve_post_cover_title_boxed_layout',
			'customize-control-neve_post_cover_title_boxed_padding',
			'customize-control-neve_post_cover_title_boxed_background_color',
			'customize-control-neve_post_page_elements_heading',
			'customize-control-neve_layout_single_post_elements_order',
			'customize-control-neve_single_post_elements_spacing',
			'customize-control-neve_post_meta_heading',
			'customize-control-neve_single_post_meta_fields',
			'customize-control-neve_single_post_metadata_separator',
			'customize-control-neve_single_post_author_avatar',
			'customize-control-neve_single_post_avatar_size',
			'customize-control-neve_single_post_show_last_updated_date',
			'customize-control-neve_post_comments_section_heading',
			'customize-control-neve_post_comment_section_title',
			'customize-control-neve_comments_boxed_layout',
			'customize-control-neve_comments_boxed_padding',
			'customize-control-neve_comments_boxed_background_color',
			'customize-control-neve_comments_boxed_text_color',
			'customize-control-neve_post_comments_form_heading',
			'customize-control-neve_post_comment_form_title',
			'customize-control-neve_post_comment_form_button_style',
			'customize-control-neve_post_comment_form_button_text',
			'customize-control-neve_comments_form_boxed_layout',
			'customize-control-neve_comments_form_boxed_padding',
			'customize-control-neve_comments_form_boxed_background_color',
			'customize-control-neve_comments_form_boxed_text_color',
			'customize-control-neve_single_post_upsell',
		];
		for (const elementId of selectors) {
			await expect(page.locator('#' + elementId)).not.toHaveCount(0);
		}
	});

	test('All page elements are hidden.', async ({ request, baseURL }) => {
		const data = JSON.stringify(JSON.parse(customizerData).hidden);
		await setCustomizeSettings('layoutHiddenElements', data, {
			request,
			baseURL,
		});
		const HIDDEN = [
			'.entry-header',
			'.nv-thumb-wrap',
			'.entry-content',
			'.nv-tags-list',
			'.comments-area',
			'.nv-post-navigation',
		];
		await page.goto('/template-comments/?test_name=layoutHiddenElements');
		for (const className of HIDDEN) {
			await expect(
				page.locator('.nv-single-post-wrap', {
					has: page.locator(className),
				})
			).toHaveCount(0);
		}
	});

	test('All elements enabled and reordered.', async ({
		request,
		baseURL,
	}) => {
		const data = JSON.stringify(JSON.parse(customizerData).enabled);
		await setCustomizeSettings('layoutElementsReordered', data, {
			request,
			baseURL,
		});
		const ORDER = [
			'nv-post-navigation',
			'nv-tags-list',
			'nv-content-wrap',
			'comments-area',
			'entry-header',
			'nv-thumb-wrap',
		];
		await page.goto(
			'/template-comments/?test_name=layoutElementsReordered'
		);
		const postElements = await page.locator('.nv-single-post-wrap > *');
		for (let i = 0; i < (await postElements.count()); i++) {
			await expect(postElements.nth(i)).toHaveClass(
				new RegExp(`${ORDER[i]}`)
			);
		}
	});

	test('Header Cover', async ({ request, baseURL }) => {
		const data = JSON.stringify(JSON.parse(customizerData).cover);
		await setCustomizeSettings('layoutHeaderCover', data, {
			request,
			baseURL,
		});
		const urls = ['/hello-world', '/markup-text-alignment', '/scheduled'];
		for (const url of urls) {
			await page.goto(url + '/?test_name=layoutHeaderCover');
			const overlay = await page.locator('.nv-overlay');
			await expect(overlay).toHaveCSS('height', '505px');
			await expect(overlay).toHaveCSS(
				'background-color',
				'rgb(198, 53, 53)'
			);
			await expect(page.locator('.nv-title-meta-wrap')).toHaveCSS(
				'color',
				'rgb(255, 255, 255)'
			);
		}
	});
});
