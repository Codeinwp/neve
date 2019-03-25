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

use HFG\Core\Builder\Header as HeaderBuilder;

$id         = current_component( HeaderBuilder::BUILDER_NAME )->get_id();
$style      = get_theme_mod( $id . '_style', 'style-plain' );
$hide_arrow = get_theme_mod( $id . '_hide-arrow', false );

$container_classes = array( $style );
if ( $hide_arrow ) {
	$container_classes[] = ' hide-arrow-active';
}

$container_classes[] = 'nav-menu-secondary';

?>
<div class="nv-top-bar">
	<div role="navigation" class="menu-content <?php echo esc_attr( join( ' ', $container_classes ) ); ?>"
		aria-label="<?php echo esc_html( __( 'Secondary Menu', 'neve' ) ); ?>">
		<?php
		wp_nav_menu(
			array(
				'theme_location' => 'top-bar',
				'menu_id'        => 'secondary-menu',
				'container'      => 'ul',
				'depth'          => - 1,
				'fallback_cb'    => '__return_false',
			)
		);
		?>
	</div>
</div>

