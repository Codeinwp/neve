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

use HFG\Core\Components\NavFooter;

$style  = component_setting( NavFooter::STYLE_ID, 'style-plain' );
$device = current_device( 'footer' );

// Desktop and mobile rows both render this component: the landmark name
// and the menu id must be unique per render (neve#4557).
$device_label   = $device === 'mobile' ? __( 'Mobile', 'neve' ) : __( 'Desktop', 'neve' );
$landmark_label = __( 'Footer Menu', 'neve' ) . ' (' . $device_label . ')';

$container_classes = [ 'nav-menu-footer' ];
if ( $style !== 'style-plain' ) {
	$container_classes[] = $style;
	$container_classes[] = 'm-style';
}

?>
<div class="component-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
		aria-label="<?php echo esc_attr( $landmark_label ); ?>">

		<?php
		$locations         = get_nav_menu_locations();
		$has_menu_selected = true;
		if ( ! isset( $locations['footer'] ) || ! $locations['footer'] ) {
			$has_menu_selected = false;
		}

		wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'depth'          => 1,
				'container'      => 'ul',
				'menu_class'     => 'footer-menu nav-ul',
				'menu_id'        => 'footer-menu-' . esc_attr( $device ),
				'before'         => $has_menu_selected ? '<div class="wrap">' : '',
				'after'          => $has_menu_selected ? '</div>' : '',
			)
		);
		?>
	</div>
</div>

