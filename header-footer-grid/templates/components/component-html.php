<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Components\CustomHtml;

$content           = component_setting( CustomHtml::CONTENT_ID );
$content           = apply_filters( 'neve_translate_single_string', $content );
$content           = apply_filters( 'neve_top_bar_content', $content );
$allowed_post_tags = wp_kses_allowed_html( 'header_footer_grid' );

?>
<div class="nv-html-content">
	<?php echo wp_kses( balanceTags( $content, true ), $allowed_post_tags ); ?>
</div>
