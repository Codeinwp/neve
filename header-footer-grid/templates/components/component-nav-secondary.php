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

use HFG\Core\Components\SecondNav;

$style = component_setting( SecondNav::STYLE_ID );

$container_classes = [ 'nav-menu-secondary' ];
if ( $style !== 'style-plain' ) {
	$container_classes[] = $style;
	$container_classes[] = 'm-style';
}

?>
<div class="nv-top-bar">
	<div role="navigation" class="menu-content <?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
		aria-label="<?php esc_attr_e( 'Secondary Menu', 'neve' ); ?>">
		<?php
		wp_nav_menu(
			array(
				'theme_location' => 'top-bar',
				'menu_class'     => 'nav-ul',
				'menu_id'        => 'secondary-menu',
				'container'      => 'ul',
				'depth'          => - 1,
				'fallback_cb'    => '__return_false',
				'before'         => '<div class="wrap">',
				'after'          => '</div>',
			)
		);
		?>
	</div>
</div>

