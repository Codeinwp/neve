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

$device_class          = isset( $args ) && ! empty( $args ) ? $args['device'] : '';
$_id                   = current_component( HeaderBuilder::BUILDER_NAME )->get_id();
$style                 = component_setting( Nav::STYLE_ID, 'style-plain' );
$additional_menu_class = apply_filters( 'neve_additional_menu_class', ' menu-' . $device_class );

$container_classes = [ 'nav-menu-primary' ];
if ( $style !== 'style-plain' ) {
	$container_classes[] = $style;
	$container_classes[] = 'm-style';
}
$container_classes = apply_filters( 'neve_additional_menu_container_class', $container_classes );

$menu_id = Nav::NAV_MENU_ID . '-' . current_row( HeaderBuilder::BUILDER_NAME );
?>
<div class="nv-nav-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
			aria-label="<?php esc_attr_e( 'Primary Menu', 'neve' ); ?>">

		<?php
		echo wp_nav_menu(
			[
				'theme_location' => 'primary',
				'menu_id'        => $menu_id,
				'component_id'   => $_id,
				'menu_class'     => 'primary-menu-ul nav-ul' . $additional_menu_class,
				'container'      => 'ul',
				'walker'         => '\Neve\Views\Nav_Walker',
				'fallback_cb'    => '\Neve\Views\Nav_Walker::fallback',
				'echo'           => false,
			]
		);
		?>
	</div>
</div>

