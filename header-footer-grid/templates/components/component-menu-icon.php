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
$item_attributes = apply_filters( 'neve_nav_toggle_data_attrs', '' );

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
			_e( 'Navigation Menu', 'neve' ); // WPCS: XSS ok.
			?>
			">
		<div class="bars">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</div>
		<span class="screen-reader-text"><?php esc_html_e( 'Toggle Navigation', 'neve' ); ?></span>
	</button>
</div> <!--.navbar-toggle-wrapper-->


