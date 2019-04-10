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

use HFG\Core\Components\Nav;

$style = component_setting( Nav::STYLE_ID );

$container_classes = [ $style ];

$container_classes[] = 'nav-menu-primary';

?>
<div class="nv-nav-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
		aria-label="<?php echo esc_html( __( 'Primary Menu', 'neve' ) ); ?>">

		<?php
		echo wp_nav_menu(
			[
				'theme_location' => 'primary',
				'menu_id'        => 'nv-primary-navigation',
				'menu_class'     => 'primary-menu-ul',
				'container'      => 'ul',
				'walker'         => '\Neve\Views\Nav_Walker',
				'fallback_cb'    => '\Neve\Views\Nav_Walker::fallback',
				'echo'           => false,
			]
		);
		?>
	</div>
</div>

