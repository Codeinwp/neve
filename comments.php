<?php
/**
 * The template for displaying comments
 *
 * @package Neve
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments">
	<div class="comment-form">
		<?php
		comment_form();
		if ( ! comments_open() && get_comments_number() ) {
			if ( is_single() ) {
				?>
				<h4 class="no-comments text-center"><?php esc_html_e( 'Comments are closed.', 'neve' ); ?></h4>
				<?php
			}
		}
		?>
	</div>

	<h4 class="comments-number">
		<?php
		$comments_number = get_comments_number();
		if ( 0 !== $comments_number ) {
			if ( 1 === $comments_number ) {
				/* translators: %s: post title */
				_x( 'One comment', 'comments title', 'neve' );
			} else {
				printf(
					/* translators: 1: number of comments, 2: post title */
					_nx(
						'%1$s Comment',
						'%1$s Comments',
						$comments_number,
						'comments title',
						'neve'
					),
					number_format_i18n( $comments_number )
				);
			}
		}
		?>
	</h4>
	<?php

	echo '<ul class="comments-list">';
	wp_list_comments( 'type=comment' );
	wp_list_comments( 'type=pings' );
	echo '</ul>';

	$pages = paginate_comments_links(
		array(
			'echo' => false,
			'type' => 'array',
		)
	);
	if ( is_array( $pages ) ) {
		echo '<ul class="pagination">';
		foreach ( $pages as $page ) {
			echo '<li>' . $page . '</li>';
		}
		echo '</ul>';
	}

	?>
</div>
