<?php
/**
 * Template used for component rendering wrapper for search icon.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */
namespace HFG;

use HFG\Core\Components\SearchResponsive;

$component_styles_array = [];
$open                   = component_setting( SearchResponsive::OPEN_TYPE );

$component_styles = '';
if ( ! empty( $component_styles_array ) ) {
	$component_styles = ' style="';
	foreach ( $component_styles_array as $key => $value ) {
		$component_styles .= sprintf( '%1$s: %2$s', $key, $value );
	}
	$component_styles .= '" ';
}
$amp_state = '';
if ( neve_is_amp() ) {
	$amp_state = ' on="tap:nv-search-icon-responsive.toggleClass(class=\'active\')" ';
}
?>
<div class="nv-search-icon-component" <?php echo wp_kses_post( $component_styles ); ?>>
	<div class="menu-item-nav-search <?php echo esc_attr( $open ); ?>" id="nv-search-icon-responsive" tabindex="0">
		<?php neve_search_icon( true, 15, ! empty( $amp_state ) ); ?>
		<div class="nv-nav-search" tabindex="0" aria-label="search" aria-expanded="false">
			<?php if ( $open !== 'minimal' ) { ?>
				<div class="close-container <?php echo $open === 'canvas' ? 'container' : ''; ?>">
					<span class="button button-secondary close-responsive-search"
							<?php
							echo $amp_state; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							?>
					>
						<?php
						echo __( 'Close', 'neve' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						?>
					</span>
				</div>
			<?php } ?>
			<div class="form-wrap <?php echo $open === 'canvas' ? 'container' : ''; ?>">
				<?php get_search_form(); ?>
			</div>
		</div>
	</div>
</div>
