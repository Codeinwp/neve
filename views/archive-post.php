<?php
/**
 * Archive Post view template.
 *
 * @package Neve
 */

$current_page_markup = '';
$pagination_type     = get_theme_mod( 'neve_pagination_type', 'number' );
if ( $pagination_type === 'infinite' ) {

	$current_page_markup = 'data-page="1"';

	if ( isset( $_GET['paged'] ) ) {
		$current_page_markup = 'data-page="' . intval( $_GET['paged'] ) . '"';
	}

	if ( isset( $_GET['rest_route'] ) && ! empty( $_GET['rest_route'] ) ) {
		preg_match_all( '/\d+/', sanitize_text_field( $_GET['rest_route'] ), $matches );
		if ( ! empty( $matches ) ) {
			$current_page_markup = 'data-page="' . end( $matches[0] ) . '"';
		}
	}
}
?>

<article id="<?php echo esc_attr( $args['post_id'] ); ?>" class="<?php echo esc_attr( $args['post_class'] ); ?>" <?php echo $current_page_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="article-content-col">
		<div class="content">
			<?php echo $args['content'];  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
	</div>
</article>
