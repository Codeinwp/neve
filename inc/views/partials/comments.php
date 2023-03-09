<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      02/11/2018
 *
 * @package neve
 */

namespace Neve\Views\Partials;

use Neve\Views\Base_View;

/**
 * Class Comments
 *
 * @package Neve\Views\Partials
 */
class Comments extends Base_View {

	/**
	 * Holds comment IDs that have an opened children tag.
	 *
	 * @var array
	 */
	private $comments_with_children = [];

	/**
	 * Add in functionality.
	 */
	public function init() {
		add_action( 'neve_do_comment_area', array( $this, 'render_comment_form' ) );
		add_filter( 'comment_form_defaults', array( $this, 'leave_reply_title_tag' ) );
		add_filter( 'comment_form_fields', array( $this, 'move_textarea' ) );
	}

	/**
	 * Render the comments form.
	 */
	public function render_comment_form() {
		$display_form_first    = apply_filters( 'neve_show_comment_form_first', false );
		$comment_form_settings = $this->get_sumbit_form_settings();

		if ( $display_form_first ) {
			comment_form( $comment_form_settings );
		}

		if ( have_comments() ) {
			$comments_wrap_classes = [ 'nv-comments-wrap' ];
			$is_boxed              = get_theme_mod( 'neve_comments_boxed_layout', false );
			if ( $is_boxed ) {
				$comments_wrap_classes[] = 'nv-is-boxed';
			}

			?>
			<div class="<?php echo esc_attr( implode( ' ', $comments_wrap_classes ) ); ?>">

				<div class="nv-comments-title-wrap">
					<?php
					echo '<h2 class="comments-title">';
					echo wp_kses_post( $this->get_comments_title() );
					echo '</h2>'
					?>
				</div>

				<ol class="nv-comments-list">
					<?php
					wp_list_comments(
						array(
							'callback'     => array( $this, 'comment_list_callback' ),
							'end-callback' => array( $this, 'end_comment_list_callback' ),
							'style'        => 'div',
						)
					);
					?>
				</ol>

			</div>

			<?php
			$this->maybe_render_comments_navigation();
		}

		if ( ! comments_open() &&
			get_comments_number() &&
			post_type_supports( get_post_type(), 'comments' ) ) {
			?>
			<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'neve' ); ?></p>
			<?php
		}
		if ( ! $display_form_first ) {
			comment_form( $comment_form_settings );
		}
	}

	/**
	 * Get forms settings.
	 *
	 * @return array
	 */
	private function get_sumbit_form_settings() {
		$form_settings = [];

		$form_title = get_theme_mod( 'neve_post_comment_form_title' );
		if ( ! empty( $form_title ) ) {
			$form_settings['title_reply'] = $form_title;
		}

		$submit_button_style           = get_theme_mod( 'neve_post_comment_form_button_style', 'primary' );
		$form_settings['class_submit'] = 'button button-' . esc_attr( $submit_button_style );

		$button_text = get_theme_mod( 'neve_post_comment_form_button_text' );
		if ( ! empty( $button_text ) ) {
			$form_settings['label_submit'] = $button_text;
		}

		$boxed_layout = get_theme_mod( 'neve_comments_form_boxed_layout', true );
		if ( $boxed_layout ) {
			$form_settings['class_container'] = 'comment-respond nv-is-boxed';
		}

		return $form_settings;
	}

	/**
	 * Render comment navigation if needed
	 *
	 * @return void
	 */
	private function maybe_render_comments_navigation() {
		if ( get_comment_pages_count() <= 1 || ! get_option( 'page_comments' ) ) {
			return;
		}

		$aria_label = __( 'Comments Navigation', 'neve' );
		?>
		<nav class="nv-comment-navigation" role="navigation" aria-label="<?php echo esc_attr( $aria_label ); ?>">
			<div class="nav-links">
				<div class="nav-previous">
					<?php previous_comments_link( __( 'Previous', 'neve' ) ); ?>
				</div>
				<div class="nav-next">
					<?php next_comments_link( __( 'Next', 'neve' ) ); ?>
				</div>
			</div>
		</nav>
		<?php
	}

	/**
	 * Comment list end callback.
	 *
	 * @param \WP_Comment $comment comment.
	 * @param array       $args    arguments.
	 * @param int         $depth   the comments depth.
	 */
	public function end_comment_list_callback( $comment, $args, $depth ) {
		if ( in_array( $comment->comment_ID, $this->comments_with_children ) ) {
			unset( $this->comments_with_children[ $comment->comment_ID ] );
			echo '</ol></li><!-- close children li -->';
		}
	}

	/**
	 * Comment list callback.
	 *
	 * @param \WP_Comment $comment comment.
	 * @param array       $args    arguments.
	 * @param int         $depth   the comments depth.
	 */
	public function comment_list_callback( $comment, $args, $depth ) {
		switch ( $comment->comment_type ) {

			case 'pingback':
			case 'trackback':
				?>
				<li <?php comment_class(); ?> id="comment-<?php comment_ID(); ?>">
					<p>
						<?php
						echo esc_html__( 'Pingback:', 'neve' ) . '&nbsp;';
						comment_author_link();
						edit_comment_link( '(' . esc_html__( 'Edit', 'neve' ) . ')', '&nbsp;<span class="edit-link">', '</span>' );
						?>
					</p>
				</li>
				<?php
				break;
			default:
				?>
				<li <?php comment_class(); ?> id="comment-item-<?php comment_ID(); ?>">
					<article id="comment-<?php comment_ID(); ?>" class="nv-comment-article">
						<?php
						echo '<div class="nv-comment-avatar">';
						echo get_avatar( $comment, 50 );
						echo '</div>';
						echo '<div class="comment-content">';
						?>
						<div class="nv-comment-header">
							<div class="comment-author vcard">
								<span class="fn author"><?php echo get_comment_author_link(); ?></span>
								<a href="<?php echo esc_url( get_comment_link() ); ?>">
									<time class="entry-date published"
											datetime="<?php echo esc_attr( get_comment_time( 'c' ) ); ?>"
											content="<?php echo esc_attr( get_comment_time( 'Y-m-d' ) ); ?>">
										<?php
										/* translators: 1: date, 2: time */
										echo sprintf( esc_html__( '%1$s at %2$s', 'neve' ), esc_html( get_comment_date() ), esc_html( get_comment_time() ) );
										?>
									</time>
								</a>
							</div>
							<?php
							$this->render_edit_reply_link( $args, $depth );
							?>
						</div>
						<div class="nv-comment-content comment nv-content-wrap">
							<?php comment_text(); ?>
							<?php if ( '0' === $comment->comment_approved ) { ?>
								<p class="comment-awaiting-moderation">
									<?php echo esc_html__( 'Comment awaiting moderation.', 'neve' ); ?>
								</p>
							<?php } ?>
						</div>
						<?php
						echo '</div>';
						?>
					</article>
				</li>
				<?php
				break;
		}
		if ( $args['has_children'] === true ) {
			array_push( $this->comments_with_children, $comment->comment_ID );
			echo '<li class="children" role="listitem"><ol>';
		}
	}

	/**
	 *  Render edit/reply link.
	 *
	 * @param array $args comment args.
	 * @param int   $depth the depth of comment.
	 */
	private function render_edit_reply_link( $args, $depth ) {
		?>
		<div class="edit-reply">
			<?php edit_comment_link( '(' . esc_html__( 'Edit', 'neve' ) . ')' ); ?>
			<?php
			comment_reply_link(
				array_merge(
					$args,
					array(
						'reply_text' => esc_html__( 'Reply', 'neve' ),
						'add_below'  => 'comment',
						'depth'      => $depth,
						'max_depth'  => $args['max_depth'],
						'before'     => '<span class="nv-reply-link">',
						'after'      => '</span>',
					)
				)
			);
			?>
		</div>
		<?php
	}

	/**
	 * Get the comments title.
	 *
	 * @return string
	 */
	private function get_comments_title() {

		$comments_number = number_format_i18n( get_comments_number() );
		$title           = get_the_title();

		$empty_comments_title =
			sprintf(
				esc_html(
					/* translators: number of comments */
					_nx(
						'%1$s thought on &ldquo;%2$s&rdquo;',
						'%1$s thoughts on &ldquo;%2$s&rdquo;',
						get_comments_number(),
						'comments title',
						'neve'
					)
				),
				$comments_number,
				$title
			);

		$comments_title = get_theme_mod( 'neve_post_comment_section_title' );
		if ( empty( $comments_title ) ) {
			return apply_filters( 'neve_filter_comments_title', $empty_comments_title );
		}

		$comments_title = str_replace( '{comments_number}', $comments_number, $comments_title );
		$comments_title = str_replace( '{title}', $title, $comments_title );

		return apply_filters( 'neve_filter_comments_title', $comments_title );
	}

	/**
	 * Change reply title tag to h2.
	 *
	 * @param array $args comment form args.
	 *
	 * @return array
	 */
	public function leave_reply_title_tag( $args ) {
		$tag = 'h2';

		$args['title_reply_before'] = '<' . $tag . ' id="reply-title" class="comment-reply-title">';
		$args['title_reply_after']  = '</' . $tag . '>';

		return $args;
	}


	/**
	 * Move textarea field in comment form after the website field.
	 *
	 * @param array $fields array of fields.
	 *
	 * @return array
	 */
	public function move_textarea( $fields ) {
		if ( ! isset( $fields['url'] ) ) {
			return $fields;
		}
		$keys = array_keys( $fields );

		$textarea_index = array_search( 'comment', $keys );
		// Remove textarea
		unset( $keys[ $textarea_index ] );
		// Reset indexes.
		$keys = array_values( $keys );

		// Get website url field index.
		$index = array_search( 'url', $keys );
		// Insert textarea after url field.
		array_splice( $keys, $index + 1, 0, 'comment' );

		$new_fields = [];
		foreach ( $keys as $key ) {
			$new_fields[ $key ] = $fields[ $key ];
		}

		return $new_fields;
	}
}
