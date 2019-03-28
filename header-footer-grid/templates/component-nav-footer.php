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

use HFG\Core\Builder\Footer;

$id         = current_component( Footer::BUILDER_NAME )->get_id();
$style      = get_theme_mod( $id . '_style', 'style-plain' );
$hide_arrow = get_theme_mod( $id . '_hide-arrow', false );

$container_classes = array( $style );
if ( $hide_arrow ) {
	$container_classes[] = ' hide-arrow-active';
}

$container_classes[] = 'nav-menu-footer';

?>
<div class="component-wrap">
	<div role="navigation" class="<?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
		aria-label="<?php echo esc_html( __( 'Footer Menu', 'neve' ) ); ?>">

		<?php
		wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'depth'          => 1,
				'container'      => 'ul',
				'menu_class'     => 'footer-menu',
				'menu_id'        => 'footer-menu',
			)
		);
		?>
	</div>
</div>

