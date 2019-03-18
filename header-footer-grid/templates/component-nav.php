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
use Neve\Views\Nav_Walker;

$id         = current_component( HeaderBuilder::BUILDER_NAME )->get_id();
$style      = get_theme_mod( $id . '_style', 'style-plain' );
$hide_arrow = get_theme_mod( $id . '_hide-arrow', false );
if ( $hide_arrow ) {
	$style .= ' hide-arrow-active';
}

$container_classes = $id . ' ' . $id . '-__id__ nav-menu-__device__ ' . $id . '-__device__' . ( $style ? ' ' . $style : '' );

?>
<nav id="site-navigation-__id__-__device__"
     class="site-navigation <?php echo esc_attr( $container_classes ) ?>">
	<?php wp_nav_menu( [
		'theme_location' => 'primary',
		'menu_id'        => 'nv-primary-navigation',
		'container'      => 'ul',
		'walker'         => new Nav_Walker(),
		'fallback_cb'    => '\Neve\Views\Nav_Walker::fallback',
	] );
	?>
</nav>

