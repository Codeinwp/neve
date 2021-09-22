<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */
namespace Neve\Views;

/**
 * Class Download_Layout
 *
 * @package Neve\Views
 */
class Download_Layout extends Base_View {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_download_archive', array( $this, 'render_download_archive' ) );
		add_filter( 'edd_purchase_link_defaults', array( $this, 'change_edd_purchase_btn_defaults' ) );
		add_action( 'neve_do_single_download', array( $this, 'render_download_single' ) );
	}

	/**
	 * Change Easy Digital Downloads purchase link defaults.
	 *
	 * @return array $defaults Altered defaults.
	 */
	public function change_edd_purchase_btn_defaults( $defaults ) {

		$defaults['color'] = '';
		$defaults['class'] = 'edd-submit nv-edd-buy-btn';
		$defaults['price'] = false;
		$defaults['text']  = __( 'Buy Now', 'neve' );

		$defaults = apply_filters( 'nv_edd_purchase_link_defaults', $defaults );

		return $defaults;
	}

	/**
	 * Render the archive content.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_download_archive( $context ) {
		if ( $context !== 'archive-download' ) {
			return;
		}
		?>

		<div class="neve-edd-download-item" id="edd_download_<?php the_ID(); ?>">
			<?php do_action( 'edd_download_before' ); ?>
			<ul>
				<li class="neve-edd-download-thumbnail">
					<a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_post_thumbnail( 'medium' ); ?></a>
				</li>
				<?php do_action( 'edd_download_after_thumbnail' ); ?>
				<?php do_action( 'edd_download_before_title' ); ?>
				<li class="neve-edd-download-download-meta neve-edd-download-title">
					<p>
						<a href="<?php echo esc_url( get_permalink() ); ?>">
							<?php the_title(); ?>
						</a>
					</p>
				</li>
				<?php do_action( 'edd_download_after_title' ); ?>
				<li class="neve-edd-download-download-meta neve-edd-download-price">
					<p>
						<?php edd_price( get_the_ID() ); ?>
					</p>
				</li>
				<!-- <li>
					<div class="edd_download_buy_button">	
					<?php // echo edd_get_purchase_link( array( 'download_id' => get_the_ID(), 'text' => 'Buy Now' ) ); ?>
					</div>
				</li>  -->
				<li class="neve-edd-download-download-meta neve-edd-download-buy-btn">
					<a href="<?php echo esc_url( get_permalink() ); ?>">
						<?php esc_html_e( 'Buy Now', 'neve' ); ?>
					</a>
				</li>
			</ul>
			<?php do_action( 'edd_download_after' ); ?>
		</div>
		<?php
	}

	/**
	 * Render the single download content.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_download_single( $context ) {
		if ( $context !== 'single-download' ) {
			return;
		}

		$id               = get_the_ID();
		$categories       = get_the_terms( $id, 'download_category' );
		$categories_count = ! empty( $categories ) ? count( $categories ) : 0;
		$tags             = get_the_terms( $id, 'download_tag' );
		?>

		<section>

			<div class="entry-header">

				<div class="nv-title-meta-wrap  mobile-left tablet-left desktop-left">

					<div class="nv-edd-single-download-title">
						<h1><?php echo wp_kses_post( get_the_title( $id ) ); ?></h1>
					</div>

					<div class="nv-edd-single-download-meta">
						<?php if ( ! empty( $categories ) ) : ?>
							<p><span class="nv-edd-single-download-categories"><?php esc_html_e( 'Category', 'neve' ); ?>:</span>
								<?php foreach ( $categories as $key => $category ) : ?>
									<span class="nv-edd-single-download-category">
										<a href="<?php esc_url( get_category_link( $category->term_id ) ); ?>">
											<?php 
												echo esc_html( $category->name );
												echo esc_html( ( $key !== ( $categories_count - 1 ) ) ? ',' : '' );
											?>
										</a>
									</span>
								<?php endforeach ?>
							</p>
						<?php endif ?>
					</div>

				</div>

			</div>

			<div class="nv-edd-featured-image nv-thumb-wrap">
				<p><?php echo get_the_post_thumbnail( null, 'neve-blog' ); ?></p>
			</div>

			<div class="nv-edd-content nv-content-wrap entry-content">
				<?php wp_kses_post( the_content() ); ?>
			</div>

			<?php 
			if ( ! empty( $tags ) ) {
				echo '<hr />';
			}
			?>

			<div class="nv-edd-single-download-meta nv-tags-list">
				<?php if ( ! empty( $tags ) ) : ?>
					<p><span class="nv-edd-single-download-tags"><?php esc_html_e( 'Download tags', 'neve' ); ?>:</span> 
						<?php foreach ( $tags as $key => $tag ) : ?>
							<span class="nv-edd-single-download-tag">
								<a href="<?php esc_url( get_category_link( $tag->term_id ) ); ?>">
									<?php 
										echo esc_html( $tag->name );
									?>
								</a>
							</span>
						<?php endforeach ?>
					</p>
				<?php endif ?>
			</div>

		</section>

		<?php

	}   

}
