<?php
/**
 * The template for displaying comments.
 *
 * @package neve
 */
if ( post_password_required() ) {
	return;
}

?>

<div id="comments" class="<?php echo esc_attr( apply_filters( 'neve_comments_area_class', 'comments-area' ) ); ?>">
	<?php do_action( 'neve_do_comment_area' ); ?>
</div>
