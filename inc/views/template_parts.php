<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Template_Parts
 *
 * @package Neve\Views
 */
class Template_Parts extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_blog_post_template_part_content', array( $this, 'render_post' ) );
		add_filter( 'excerpt_more', array( $this, 'link_excerpt_more' ) );
	}

	/**
	 * Render the post.
	 */
	public function render_post() {
		?>
		<article id="post-<?php echo esc_attr( get_the_ID() ); ?>"
				class="<?php echo esc_attr( $this->post_class() ); ?>">
			<div class="article-content-col">
				<div class="content">
					<?php $this->render_article_inner_content(); ?>
				</div>
			</div>
		</article>
		<?php
	}

	/**
	 * Echo the post class.
	 */
	private function post_class() {
		$class = join( ' ', get_post_class() );

		$class .= ' col-12 layout-' . $this->get_layout();
		if ( $this->get_layout() === 'grid' ) {
			$class .= ' ' . $this->get_grid_columns_class();
		} else {
			$class .= ' nv-non-grid-article';
		}

		return $class;
	}

	/**
	 * Render inner content for <article>
	 */
	private function render_article_inner_content() {
		if ( $this->get_layout() !== 'grid' ) {
			$this->post_thumbnail();
			echo '<div class="non-grid-content ' . esc_attr( $this->get_layout() ) . '-layout-content">';
			$this->title();
			$this->meta();
			$this->excerpt();
			echo '</div>';

			return;
		}

		$default_order = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);
		$order         = get_theme_mod( 'neve_post_content_ordering', json_encode( $default_order ) );
		$order         = json_decode( $order, true );
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
				case 'title-meta':
					$this->title();
					$this->meta();
					break;
				case 'excerpt':
					$this->excerpt();
					break;
				case 'default':
					break;
			}
		}
	}

	/**
	 * Render the post thumbnail.
	 */
	private function post_thumbnail() {
		if ( ! has_post_thumbnail() ) {
			return;
		}
		$markup = '<div class="nv-post-thumbnail-wrap">';

		$markup .= '<a href="' . esc_url( get_the_permalink() ) . '" rel="bookmark" title="' . the_title_attribute(
			array(
				'echo' => false,
			)
		) . '">';
		$markup .= get_the_post_thumbnail(
			get_the_ID(),
			'neve-blog'
		);
		$markup .= '</a>';
		$markup .= '</div>';

		echo wp_kses_post( $markup );
	}

	/**
	 * Get the posts layout.
	 *
	 * @return string
	 */
	private function get_layout() {
		return get_theme_mod( 'neve_blog_archive_layout', 'grid' );
	}

	/**
	 * Render title.
	 */
	private function title() {
		?>
		<h3 class="blog-entry-title entry-title">
			<a href="<?php esc_url( the_permalink() ); ?>" rel="bookmark">
				<?php the_title(); ?>
			</a>
		</h3>
		<?php
	}

	/**
	 * Render meta.
	 */
	private function meta() {
		$default_meta_order = json_encode(
			array(
				'author',
				'date',
				'comments',
			)
		);

		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );
		$meta_order = json_decode( $meta_order );
		do_action( 'neve_post_meta_archive', $meta_order );
	}

	/**
	 * Render excerpt.
	 */
	private function excerpt() {
		do_action( 'neve_excerpt_archive', 'index' );
	}

	/**
	 * Get grid columns class.
	 *
	 * @return string
	 */
	private function get_grid_columns_class() {
		$column_numbers = get_theme_mod( 'neve_grid_layout', 1 );
		if ( $column_numbers === 0 ) {
			$column_numbers = 1;
		}

		return 'col-sm-' . ( 12 / absint( $column_numbers ) );
	}

	/**
	 * Change link excerpt more.
	 *
	 * @param string $moretag read more tag.
	 *
	 * @return string
	 */
	public function link_excerpt_more( $moretag ) {
		$moretag = '&hellip;&nbsp;<a href="' . esc_url( get_the_permalink() ) . '" rel="bookmark">' . esc_html__( 'Read More', 'neve' ) . ' &raquo;</a>';

		return $moretag;
	}
}
