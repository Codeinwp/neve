<?php
/**
 * Blog starter content.
 *
 * @package Neve\Compatibility\Starter_Content
 */

$post_content = <<<'HTML'
<!-- wp:group {"align":"full","backgroundColor":"nv-site-bg","style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"780px"}} -->
<div class="wp-block-group alignfull has-nv-site-bg-background-color has-background" style="padding-top:80px;padding-right:24px;padding-bottom:80px;padding-left:24px"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color">Content coming soon.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
HTML;

return [
	'post_type'    => 'page',
	'post_name'    => 'blog',
	'post_title'   => _x( 'Blog', 'Theme starter content', 'neve' ),
	'post_content' => str_replace(
		[ '{{theme_uri}}', '{{home_url}}' ],
		[ trailingslashit( get_template_directory_uri() ), trailingslashit( home_url() ) ],
		$post_content
	),
];
