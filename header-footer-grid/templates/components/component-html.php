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

$content = component_setting( CustomHtml::CONTENT_ID );
$content = apply_filters( 'neve_top_bar_content', $content );
?>
<div class="nv-html-content">
	<?php echo wp_kses_post( balanceTags( $content, true ) ); ?>
</div>
