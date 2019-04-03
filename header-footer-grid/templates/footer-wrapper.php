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
neve_before_footer_trigger();
?>
<footer class="site-footer <?php echo get_builders( FooterBuilder::BUILDER_NAME )->get_property( 'panel' ); ?> " id="site-footer">
	<?php
	render_builder( FooterBuilder::BUILDER_NAME );
	?>
</footer>
<?php neve_after_footer_trigger(); ?>
