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

$style = component_setting( NavFooter::STYLE_ID, 'style-plain' );

$container_classes = [ 'nav-menu-footer' ];
if ( $style !== 'style-plain' ) {
	$container_classes[] = $style;
	$container_classes[] = 'm-style';
}

$menu_id = NavFooter::COMPONENT_ID;
$device  = current_device();
$row     = current_row();
if ( ! empty( $device ) && ! empty( $row ) ) {
	$menu_id .= '-' . $device . '-' . $row;
}

?>
<div class="component-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
		aria-label="<?php esc_attr_e( 'Footer Menu', 'neve' ); ?>">

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
				'menu_id'        => $menu_id,
				'before'         => $has_menu_selected ? '<div class="wrap">' : '',
				'after'          => $has_menu_selected ? '</div>' : '',
			)
		);
		?>
	</div>
</div>

