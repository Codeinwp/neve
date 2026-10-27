<?php
/**
 * Page header view template.
 *
 * @package Neve
 */

use Neve\Views\Page_Header;

if ( ! isset( $this ) || ! $this instanceof Page_Header ) {
	return;
}

$title_style = apply_filters( 'neve_title_alignment_style', '', 'normal' );
if ( ! empty( $title_style ) ) {
	$title_style = 'style="' . $title_style . '"';
}

$hide_title = $this->is_title_hidden();

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
	// A hidden title still needs an H1 for screen readers (a11y-ready criterion 6),
	// but only when nothing else on the page provides one; see Page_Header::fallback_h1().
	$this->fallback_h1( $title_text );
}
