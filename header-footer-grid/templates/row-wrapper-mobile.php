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

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Builder\Header as HeaderBuilder;

$row_index        = current_row();
$interaction_type = row_setting( Abstract_Builder::LAYOUT_SETTING );
$classes          = [ 'header-menu-sidebar', 'menu-sidebar-panel', $interaction_type ];
$is_contained     = in_array( $interaction_type, [ 'full_canvas', 'dropdown' ], true );
$inner_classes    = 'header-menu-sidebar-inner ' . ( $is_contained ? ' container' : '' );
$item_attributes  = apply_filters( 'neve_nav_toggle_data_attrs', '' );

?>
<div id="header-menu-sidebar" class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" data-row-id="<?php echo esc_attr( $row_index ); ?>">
	<div id="header-menu-sidebar-bg" class="header-menu-sidebar-bg">
		<div class="close-sidebar-panel navbar-toggle-wrapper">
			<button type="button" class="navbar-toggle active" <?php echo ( $item_attributes );// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					aria-label="
					<?php
					esc_html_e( 'Navigation Menu', 'neve' );
					?>
				">
				<span class="bars">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</span>
				<span class="screen-reader-text">
				<?php
				esc_html_e( 'Navigation Menu', 'neve' );
				?>
					</span>
			</button>
		</div>
		<div id="header-menu-sidebar-inner" class="<?php echo esc_attr( $inner_classes ); ?>">
			<?php
			/**
			 * Executes actions before the content of the menu sidebar that appears on mobile devices.
			 *
			 * @since 3.0.6
			 */
			do_action( 'neve_before_mobile_menu_content' ); 
			?>
			<?php render_components( HeaderBuilder::BUILDER_NAME ); ?>
			<?php
			/**
			 * Executes actions after the content of the menu sidebar that appears on mobile devices.
			 *
			 * @since 3.0.6
			 */
			do_action( 'neve_after_mobile_menu_content' ); 
			?>
		</div>
	</div>
</div>
<div class="header-menu-sidebar-overlay"></div>
