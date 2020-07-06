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
	$amp_state = ' on="tap:AMP.setState({visible: !visible})" ';
}
?>
<div class="nv-search-icon-component" <?php echo wp_kses_post( $component_styles ); ?>>
	<div [class]="visible ? 'menu-item-nav-search active <?php echo esc_attr( $open ); ?>' : 'menu-item-nav-search <?php echo esc_attr( $open ); ?>'" class="menu-item-nav-search <?php echo esc_attr( $open ); ?>" id="nv-search-icon-responsive" tabindex="0">
		<?php neve_search_icon( true, true, 15, ! empty( $amp_state ) ); ?>
		<div class="nv-nav-search" aria-label="search">
			<div class="form-wrap <?php echo $open === 'canvas' ? 'container' : ''; ?>">
				<?php get_search_form(); ?>
			</div>
			<?php if ( $open !== 'minimal' ) { ?>
				<div class="close-container <?php echo $open === 'canvas' ? 'container' : ''; ?>">
					<button tabindex="0" class="close-responsive-search"
							<?php
							echo $amp_state; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							?>
					>
						<svg width="50" height="50" viewBox="0 0 20 20" fill="#555555"><path d="M14.95 6.46L11.41 10l3.54 3.54l-1.41 1.41L10 11.42l-3.53 3.53l-1.42-1.42L8.58 10L5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"/><rect/></svg>
					</button>
				</div>
			<?php } ?>
		</div>
	</div>
</div>
