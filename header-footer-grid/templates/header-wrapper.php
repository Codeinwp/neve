<?php
/**
 * Template used for header rendering.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Header as HeaderBuilder;

?>
<header class="header" role="banner">
	<a class="neve-skip-link show-on-focus" href="#content" tabindex="0">
		<?php echo __( 'Skip to content', 'neve' ); ?>
	</a>
	<?php neve_before_header_trigger(); ?>
	<?php if ( apply_filters( 'neve_filter_toggle_content_parts', true, 'header' ) === true ) { ?>
		<?php render_builder( HeaderBuilder::BUILDER_NAME ); ?>
	<?php } ?>
	<?php neve_after_header_trigger(); ?>
</header>