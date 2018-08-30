<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 * @package Neve\Views
 */

namespace Neve\Views;

class Page_Header extends Base_View {
	private $title_args = array(
		'string'     => '',
		'class'      => '',
		'wrap-class' => ''
	);

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_page_header', array( $this, 'render_page_header' ) );
	}

	public function render_page_header( $context ) {
		$title_args = $this->the_page_title( $context );
		?>
		<div class="nv-page-title-wrap <?php echo esc_attr( $title_args['wrap-class'] ); ?>">
			<div class="container">
				<div class="row">
					<div class="col nv-page-title <?php echo $title_args['class'] ?>">
						<h1><?php echo wp_kses_post( $title_args['string'] ); ?></h1>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	private function the_page_title( $context ) {
		$title_args = array();
		if ( $context === 'index' || $context === 'single-page' ) {
			$title_args               = $this->get_blog_archive_title();
			$title_args['wrap-class'] = 'nv-big-title';
		}

		if ( $context === 'single-post' ) {
			$title_args['wrap-class'] = 'nv-single-post-title';
		}

		// If no title is set until now simply get the title.
		if ( empty( $title_args['string'] ) ) {
			$title_args['string'] = get_the_title();
		}

		$title_args = wp_parse_args( $title_args, $this->title_args );

		return $title_args;
	}

	private function get_blog_archive_title() {
		if ( is_home() && get_option( 'show_on_front' ) === 'posts' ) {
			return array(
				'string' => get_bloginfo( 'description' ),
				'class'  => 'nv-blog-description',
			);
		}

		if ( get_option( 'show_on_front' ) === 'page' && is_home() ) {
			$blog_page_id = get_option( 'page_for_posts' );

			return array(
				'string' => get_the_title( $blog_page_id ),
				'class'  => '',
			);
		}

		return array();
	}
}