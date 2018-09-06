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
	}

	/**
	 * Render the post.
	 */
	public function render_post() {
		?>
		<article
				id="post-<?php echo esc_attr( get_the_ID() ); ?>'"
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
		$class  = join( ' ', get_post_class() );
		$class .= ' col-12 layout-' . $this->get_layout();
		if ( $this->get_layout() === 'grid' ) {
			$class .= ' ' . $this->get_grid_columns_class();
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
			$this->read_more_button();
			echo '</div>';

			return;
		}

		$default_order = json_encode(
			array(
				'thumbnail',
				'title',
				'meta',
				'excerpt',
				'read-more',
			)
		);
		$order         = get_theme_mod( 'neve_post_content_ordering', $default_order );
		$order         = json_decode( $order );

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

	/**
	 * Render the post thumbnail.
	 */
	private function post_thumbnail() {
		if ( ! has_post_thumbnail() ) {
			return;
		}
		$markup  = '<div class="nv-post-thumbnail-wrap">';
		$markup .= '<a href="' . get_the_permalink() . '" title="' . the_title_attribute(
			array(
				'echo' => false,
			)
		) . '">';
		$markup .= get_the_post_thumbnail( get_the_ID(), 'neve-blog' );
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
		return get_theme_mod( 'neve_blog_archive_layout', 'default' );
	}

	/**
	 * Render title.
	 */
	private function title() {
		?>
		<h3 class="blog-entry-title entry-title">
			<a href="<?php the_permalink(); ?>">
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
				'category',
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
	 * Render read more button.
	 */
	private function read_more_button() {
		?>
		<a href="<?php the_permalink(); ?>"
				class="button button-secondary"><?php esc_html_e( 'Read more', 'neve' ); ?></a>
		<?php
	}

	/**
	 * Get grid columns class.
	 *
	 * @return string
	 */
	private function get_grid_columns_class() {
		$column_numbers = get_theme_mod( 'neve_grid_layout', 1 );

		return 'col-sm-' . ( 12 / $column_numbers );
	}

}
