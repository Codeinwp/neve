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

use HFG\Core\Components\MenuIcon;

$item_attributes = apply_filters( 'neve_nav_toggle_data_attrs', '' );
$label           = component_setting( MenuIcon::TEXT_ID );
$menu_icon       = component_setting( MenuIcon::MENU_ICON );
$menu_svg        = component_setting( MenuIcon::MENU_SVG );
if ( $menu_icon === 'svg' && empty( $menu_svg ) ) {
	$menu_icon = 'default';
}
$class = '';
if ( $menu_icon !== 'default' ) {
	$class = apply_filters( 'neve_menu_icon_classes', 'hamburger ', $menu_icon );
}
?>
<div class="menu-mobile-toggle item-button navbar-toggle-wrapper">
	<button type="button" class="<?php echo esc_attr( $class ); ?> navbar-toggle"
			value="<?php esc_attr_e( 'Navigation Menu', 'neve' ); ?>"
		<?php
		echo ( $item_attributes );// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
			aria-label="<?php esc_attr_e( 'Navigation Menu', 'neve' ); ?> "
			<?php echo MenuIcon::aria_expanded_behaviour(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<?php
		if ( ! empty( $label ) ) {
			echo '<span class="nav-toggle-label">' . esc_html( $label ) . '</span>';
		}

		if ( $menu_icon === 'default' ) {
			?>
			<span class="bars">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</span>
			<?php
		} else {
			?>
			<span class="hamburger-box <?php echo esc_attr( 'icon-' . $menu_icon ); ?>">
				<?php
				if ( $menu_icon === 'svg' ) {
					echo neve_kses_svg( $menu_svg ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				} else {
					?>
					<span class="hamburger-inner"></span>
					<?php
				}
				?>
			</span>
			<?php
		}
		?>
		<span class="screen-reader-text"><?php esc_html_e( 'Navigation Menu', 'neve' ); ?></span>
	</button>
</div> <!--.navbar-toggle-wrapper-->


