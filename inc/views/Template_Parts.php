<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 * @package Neve\Views
 */

namespace Neve\Views;

class Template_Parts extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_blog_post_template_part_content', array( $this, 'render_post' ) );
	}

	public function render_post() {
		$layout = $this->get_layout();
		switch ( $layout ) {
			case 'grid':
				$this->render_grid_post();
				break;
			case 'alternative':
				$this->render_alternative_post();
				break;
			case 'default':
				$this->render_default();
				break;
		}
	}

	private function render_default() { ?>
		<article
				id="post-<?php echo esc_attr( get_the_ID() ); ?>'"
				class="<?php echo join( ' ', get_post_class( 'row' ) ); ?>">
			<div class="col article-content-col">
				<?php $this->render_article_inner_content(); ?>
			</div>
		</article>
	<?php }

	private function render_article_inner_content() {
		// This can be used for later reordering. Just pass in the array as a theme mod with the default.
		// get_theme_mod( 'neve_post_layout_ordering', $order )
		$order = array(
			'thumbnail',
			'title',
			'meta',
			'excerpt',
			'read-more',
		);

		foreach ( $order as $content_bit ) {
			switch ( $content_bit ) {
				case 'thumbnail':
					$this->post_thumbnail();
					break;
				case 'title':
					$this->title();
					break;
				case 'meta':
					$this->meta();
					break;
				case 'excerpt':
					$this->excerpt();
					break;
				case 'read-more':
					$this->read_more_button();
					break;
				case 'default':
					break;
			}
		}
	}

	private function post_thumbnail() {
		if ( ! has_post_thumbnail() ) {
			return;
		}
		$markup = '<div class="nv-post-thumbnail-wrap">';
		$markup .= '<a href="' . get_the_permalink() . '" title="' . the_title_attribute( array( 'echo' => false ) ) . '">';
		$markup .= get_the_post_thumbnail( get_the_ID(), 'neve-blog' );
		$markup .= '</a>';
		$markup .= '</div>';

		echo wp_kses_post( $markup );
	}

	private function get_layout() {
		return get_theme_mod( 'neve_blog_archive_layout', 'default' );
	}

	private function title() { ?>
		<h4 class="blog-entry-title entry-title">
			<a href="<?php the_permalink(); ?>">
				<?php the_title(); ?>
			</a>
		</h4>
		<?php
	}

	private function meta() {
		// This can be used for later reordering. Just pass in the array as a theme mod with the default.
		// get_theme_mod( 'neve_post_meta_ordering', $default_meta_order )
		$default_meta_order = array(
			'author',
			'category',
			'date',
			'comments',
		);

		do_action( 'neve_post_meta_archive', $default_meta_order );
	}

	private function excerpt() {
		do_action( 'neve_excerpt_archive', 'index' );
	}

	private function read_more_button() { ?>
		<a href="<?php the_permalink() ?>" class="button button-primary"><?php esc_html_e( 'Read more', 'neve' ) ?></a>
		<?php
	}

	private function get_grid_columns_number() {
		return get_theme_mod( 'neve_grid_layout', 1 );
	}

}
