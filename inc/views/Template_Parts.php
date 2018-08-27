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
		<article id="post-<?php echo esc_attr( get_the_ID() ); ?>'"
				class="<?php echo get_post_class( 'row', get_the_ID() ); ?>">
			<?php echo $this->post_thumbnail( 'col-md-5' ); ?>
		</article>
	<?php }

	private function post_thumbnail( $class ) {
		if ( ! has_post_thumbnail() ) {
			return '';
		}
		$markup = '<div class="nv-post-thumbnail-wrap ' . esc_attr( $class ) . '">';
		$markup .= '<a href="' . get_the_permalink() . '" title="' . the_title_attribute( array( 'echo' => false ) ) . '">';
		$markup .= get_the_post_thumbnail( null, 'neve-blog' );
		$markup .= '</a>';
		$markup .= '</div>';

		return $markup;
	}

	private function get_layout() {
		return get_theme_mod( 'neve_blog_archive_layout', 'default' );
	}

	private function get_grid_columns_number() {
		return get_theme_mod( 'neve_grid_layout', 1 );
	}

}
