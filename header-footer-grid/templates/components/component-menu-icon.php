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


?>
<div class="menu-mobile-toggle item-button navbar-toggle-wrapper">
	<button class="navbar-toggle"
		<?php
		echo wp_kses(
			$item_attributes,
			array(
				'on'              => true,
				'role'            => true,
				'tabindex'        => true,
				'aria-expanded'   => true,
				'[aria-expanded]' => true,
			)
		);
		?>
			aria-label="
			<?php
			esc_html_e( 'Navigation Menu', 'neve' );
			?>
			">
		<?php 
		if ( ! empty( $label ) ) {
			echo '<span class="nav-toggle-label">' . esc_html( $label ) . '</span>';
		} 
		?>
		<div class="bars">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</div>
		<span class="screen-reader-text"><?php esc_html_e( 'Toggle Navigation', 'neve' ); ?></span>
	</button>
</div> <!--.navbar-toggle-wrapper-->


