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
<footer class="<?php echo esc_attr( apply_filters( 'neve_footer_wrap_classes', 'site-footer' ) ); ?>" id="site-footer" <?php echo ( neve_is_amp() ) ? 'next-page-hide' : ''; ?> >
	<div class="<?php echo esc_attr( get_builder( FooterBuilder::BUILDER_NAME )->get_property( 'panel' ) ); ?>">
		<?php
		render_builder( FooterBuilder::BUILDER_NAME );
		?>
	</div>
</footer>
