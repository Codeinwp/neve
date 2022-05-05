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

if ( current_row() === 'sidebar' ) {
	$open = 'floating';
}

$component_styles = '';
if ( ! empty( $component_styles_array ) ) {
	$component_styles = ' style="';
	foreach ( $component_styles_array as $key => $value ) {
		$component_styles .= sprintf( '%1$s: %2$s', $key, $value );
	}
	$component_styles .= '" ';
}
$amp_state = '';
$amp_class = '';
if ( neve_is_amp() ) {
	$amp_state = ' on="tap:AMP.setState({visible: !visible})" ';
	$amp_class = '[class]="visible ? \'menu-item-nav-search active ' . esc_attr( $open ) . '\' : \'menu-item-nav-search ' . esc_attr( $open ) . '\'"';
}

?>
<div class="nv-search-icon-component" <?php echo wp_kses_post( $component_styles ); ?>>
	<div <?php echo $amp_class; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped, Already escaped. ?> class="menu-item-nav-search <?php echo esc_attr( $open ); ?>">
		<?php neve_search_icon( true, true, 15, ! empty( $amp_state ) ); ?>
		<div class="nv-nav-search" aria-label="search">
			<div class="form-wrap <?php echo $open === 'canvas' ? 'container responsive-search' : ''; ?>">
				<?php get_search_form(); ?>
			</div>
			<?php if ( $open !== 'minimal' ) { ?>
				<div class="close-container <?php echo $open === 'canvas' ? 'container responsive-search' : ''; ?>">
					<button  class="close-responsive-search" aria-label="<?php echo esc_attr__( 'Close', 'neve' ); ?>"
					<?php
							echo $amp_state; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					?>
							>
						<svg width="50" height="50" viewBox="0 0 20 20" fill="#555555"><path d="M14.95 6.46L11.41 10l3.54 3.54l-1.41 1.41L10 11.42l-3.53 3.53l-1.42-1.42L8.58 10L5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"/></svg>
					</button>
				</div>
			<?php } ?>
		</div>
	</div>
</div>
