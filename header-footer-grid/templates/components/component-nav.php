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

// Desktop and mobile rows both render this landmark; duplicated landmarks
// need unique accessible names. Pro allows extra instances (ids like
// primary-menu_2) — number those the way the customizer labels them
// ("Primary Menu 1"), and keep the <ul> id unique when two instances
// share one row.
$instance_suffix = '';
if ( preg_match( '/_(\d+)$/', (string) $_id, $nav_instance ) && (int) $nav_instance[1] > 1 ) {
	$instance_suffix = ' ' . ( (int) $nav_instance[1] - 1 );
	$menu_id        .= '-' . (int) $nav_instance[1];
}
$device_label   = $device_class === 'mobile' ? __( 'Mobile', 'neve' ) : __( 'Desktop', 'neve' );
$landmark_label = __( 'Primary Menu', 'neve' ) . $instance_suffix . ' (' . $device_label . ')';
?>
<div class="nv-nav-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
			aria-label="<?php echo esc_attr( $landmark_label ); ?>">

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

