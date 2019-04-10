<?php
/**
 * Template used for footer rendering.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Footer as FooterBuilder;
?>
<footer class="site-footer <?php echo esc_attr( get_builder( FooterBuilder::BUILDER_NAME )->get_property( 'panel' ) ); ?> " id="site-footer">
	<?php
	render_builder( FooterBuilder::BUILDER_NAME );
	?>
</footer>
