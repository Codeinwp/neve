<?php
/**
 * Page header view template.
 *
 * @package Neve
 */

use Neve\Core\Migration_Flags;

$title_style = apply_filters( 'neve_title_alignment_style', '', 'normal' );
if ( ! empty( $title_style ) ) {
	$title_style = 'style="' . $title_style . '"';
}

$hide_title = get_theme_mod( 'neve_page_hide_title', false );

$current_page        = get_queried_object();
$pid                 = $current_page instanceof WP_Post ? $current_page->ID : get_the_ID();
$specific_hide_title = get_post_meta( $pid, 'neve_meta_disable_title', true );

if ( (int) get_option( 'page_for_posts' ) === $pid || is_archive() ) {
	$hide_title = get_theme_mod( 'neve_archive_hide_title', Migration_Flags::is_new_user_after_v4() );
}

if ( ! empty( $specific_hide_title ) ) {
	$hide_title = $specific_hide_title === 'on';
}

// The search title embeds get_search_query(), which is already escaped;
// decoding it would re-arm user-supplied markup.
$title_text = is_search() ? $args['string'] : html_entity_decode( $args['string'] );

if ( ! $hide_title ) {
	?>
<div class="nv-page-title-wrap <?php echo esc_attr( $args['wrap-class'] ); ?>" <?php echo wp_kses_post( $title_style ); ?>>
	<div class="nv-page-title <?php echo esc_attr( $args['class'] ); ?>">
		<?php do_action( 'neve_before_page_title' ); ?>
		<h1><?php echo wp_kses_post( $title_text ); ?></h1>
		<?php if ( ! empty( $args['category_description'] ) ) { ?>
			<?php echo wp_kses_post( $args['category_description'] ); ?>
		<?php } ?>
		<?php do_action( 'neve_after_page_title' ); ?>
	</div><!--.nv-page-title-->
</div> <!--.nv-page-title-wrap-->
	<?php
} else {
	// Hiding the title must not remove the page's H1: screen-reader users
	// navigate by headings (accessibility-ready criterion 6). Landing pages
	// that hide the title usually bring their own H1 in the content (the
	// bundled starter pages do); adding a second one would be worse.
	$content_has_h1 = is_singular() && preg_match( '/<h1[\s>]/i', (string) get_post_field( 'post_content', $pid ) );

	if ( ! $content_has_h1 ) {
		echo '<h1 class="screen-reader-text">' . wp_kses_post( $title_text ) . '</h1>';
	}
}
