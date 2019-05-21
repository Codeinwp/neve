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
use HFG\Core\Builder\Header as HeaderBuilder;

$style = component_setting( Nav::STYLE_ID );

$container_classes = [ $style ];

$container_classes[] = 'nav-menu-primary';

$menu_id = Nav::NAV_MENU_ID . '-' . current_row( HeaderBuilder::BUILDER_NAME );
?>
<div class="nv-nav-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
			aria-label="<?php echo esc_html( __( 'Primary Menu', 'neve' ) ); ?>">

		<?php
		echo wp_nav_menu(
			[
				'theme_location' => 'primary',
				'menu_id'        => $menu_id,
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

