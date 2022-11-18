import { test, expect } from '@playwright/test';
import { setCustomizeSettings, loginWithRequest } from '../../utils';

test.describe('Single Post Check', function () {
	test.beforeAll(async ({ request, baseURL }) => {
		await setCustomizeSettings(JSON.stringify({ neve_new_skin: 'new' }), {
			request,
			baseURL,
		});
	});

	test('Shows all options on customizer.', async ({ page }) => {
		await loginWithRequest('/wp-admin/customize.php', page);
		await page
			.locator('#accordion-panel-neve_layout > .accordion-section-title')
			.click();
		await page
			.locator(
				'#accordion-section-neve_single_post_layout > .accordion-section-title'
			)
			.click();

		const visibleSelectors = [
			'customize-control-neve_post_header_layout_heading',
			'customize-control-neve_post_header_layout',
			'customize-control-neve_post_title_alignment',
			'customize-control-neve_post_page_elements_heading',
			'customize-control-neve_layout_single_post_elements_order',
			'customize-control-neve_single_post_elements_spacing',
			'customize-control-neve_post_meta_heading',
			'customize-control-neve_single_post_meta_fields',
			'customize-control-neve_single_post_metadata_separator',
			'customize-control-neve_single_post_author_avatar',
			'customize-control-neve_single_post_show_last_updated_date',
			'customize-control-neve_comments_heading',
			'customize-control-neve_comment_section_style',
			'customize-control-neve_post_comments_section_heading',
			'customize-control-neve_post_comment_section_title',
			'customize-control-neve_comments_boxed_layout',
			'customize-control-neve_post_comments_form_heading',
			'customize-control-neve_post_comment_form_title',
			'customize-control-neve_post_comment_form_button_style',
			'customize-control-neve_post_comment_form_button_text',
			'customize-control-neve_comments_form_boxed_layout',
			'customize-control-neve_comments_form_boxed_padding',
			'customize-control-neve_comments_form_boxed_background_color',
			'customize-control-neve_comments_form_boxed_text_color',
		];
		const hiddenSelectors = [
			'customize-control-neve_post_cover_height',
			'customize-control-neve_post_cover_padding',
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
			'customize-control-neve_single_post_avatar_size',
			'customize-control-neve_comments_boxed_padding',
			'customize-control-neve_comments_boxed_background_color',
			'customize-control-neve_comments_boxed_text_color',
			'customize-control-neve_post_sharing_heading',
			'customize-control-neve_sharing_icon_style',
			'customize-control-neve_sharing_enable_custom_color',
			'customize-control-neve_sharing_icon_color',
			'customize-control-neve_sharing_custom_color',
			'customize-control-neve_sharing_icon_size',
			'customize-control-neve_sharing_icon_padding',
			'customize-control-neve_sharing_enable_text_label',
			'customize-control-neve_sharing_label',
			'customize-control-neve_sharing_label_tag',
			'customize-control-neve_sharing_label_position',
			'customize-control-neve_sharing_icons_alignment',
			'customize-control-neve_sharing_icon_spacing',
			'customize-control-neve_sharing_icons',
			'customize-control-neve_post_author_box_heading',
			'customize-control-neve_author_box_enable_avatar',
			'customize-control-neve_author_box_avatar_size',
			'customize-control-neve_author_box_avatar_position',
			'customize-control-neve_author_box_avatar_border_radius',
			'customize-control-neve_author_box_enable_archive_link',
			'customize-control-neve_author_box_content_alignment',
			'customize-control-neve_author_box_boxed_layout',
			'customize-control-neve_author_box_boxed_padding',
			'customize-control-neve_author_box_boxed_background_color',
			'customize-control-neve_author_box_boxed_text_color',
			'customize-control-neve_post_related_posts_heading',
			'customize-control-neve_related_posts_title',
			'customize-control-neve_related_posts_taxonomy',
			'customize-control-neve_related_posts_columns',
			'customize-control-neve_related_posts_number',
			'customize-control-neve_related_posts_content_alignment',
			'customize-control-neve_related_posts_excerpt_length',
			'customize-control-neve_related_posts_boxed_layout',
			'customize-control-neve_related_posts_boxed_padding',
			'customize-control-neve_related_posts_boxed_background_color',
			'customize-control-neve_related_posts_boxed_text_color',
			'customize-control-neve_related_posts_box_layout_width',
			'customize-control-neve_related_posts_card',
			'customize-control-neve_related_posts_post_meta_ordering',
			'customize-control-neve_related_typography_shortcut',
			'customize-control-neve_post_post_nav_heading',
			'customize-control-neve_post_nav_infinite',
		];

		for (const elementId of visibleSelectors) {
			await expect(page.locator('#' + elementId)).toBeVisible();
		}

		for (const elementId of hiddenSelectors) {
			await expect(page.locator('#' + elementId)).not.toBeVisible();
		}
	});
});
