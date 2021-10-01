<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */
namespace Neve\Compatibility;

/**
 * Class Easy_Digital_Downloads
 *
 * @package Neve\Compatibility
 */
class Easy_Digital_Downloads {

	/**
	 * The current context of the loop
	 *
	 * @var string
	 */
	private $context;

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_download_archive', array( $this, 'render_download_archive' ) );
		add_action( 'neve_do_single_download', array( $this, 'render_download_single' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'neve_dequeue_edd_styles' ) );
		add_filter( 'edd_purchase_link_defaults', array( $this, 'change_purchase_button_defaults' ) );
		add_filter( 'edd_settings_styles', array( $this, 'neve_edd_settings_styles' ) );
		add_filter( 'body_class', array( $this, 'add_body_class' ) );
	}

	/**
	 * Add neve easy digital downloads body class.
	 * 
	 * @param array $classes Current classes on body.
	 */
	public function add_body_class( $classes ) {

		$classes = (array) $classes;

		if ( edd_is_checkout() ||
		edd_is_success_page() ||
		edd_is_failed_transaction_page() ||
		edd_is_purchase_history_page() ||
		is_post_type_archive( 'download' ) ||
		get_post_type() == 'download' ||
		is_tax( 'download_category' ) ||
		is_tax( 'download_tag' )
		) {
			$classes[] = 'nv-edd';
		}

		return $classes;

	}

	/**
	 * Dequeue the EDD default styles as we have our own.
	 * 
	 * @return void 
	 */
	public function neve_dequeue_edd_styles() {
		wp_dequeue_style( 'edd-styles' );
	}

	/**
	 * Filter the settings from EDD's "Styles" tab
	 *
	 * @param mixed $settings EDD style settings.
	 * @return array 
	 */
	public function neve_edd_settings_styles( $settings ) {
		/*
		 * Settings with type 'descriptive_text' are automatically stripped by EDD
		 * So this field is not saved to the DB on save changes.
		 * 
		 * see edd_settings_sanitize()
		 */
		$settings['main'] = array(
			'neve_controlled' => array(
				'id'   => 'neve_controlled',
				'name' => esc_html__( 'Controlled by Neve', 'neve' ),
				'desc' => esc_html__( 'Neve Theme controls base style settings of Easy Digital Downloads. Additional settings from other extensions might appear below.', 'neve' ),
				'type' => 'descriptive_text',
			),
		);

		return $settings;
	}

	/**
	 * Get the type of button to show on the archive pages
	 *
	 * @return string 
	 */
	private function get_archive_button_type() {
		return get_theme_mod( 'neve_edd_archive_buy_button_type', 'go-to-download' );
	}

	/**
	 * Whether or not to show the price inside the EDD button.
	 *
	 * @return bool 
	 */
	private function show_archive_button_price() {
		return get_theme_mod( 'neve_edd_ajax_buy_button_show_price', true );
	}

	/**
	 * Change Easy Digital Downloads purchase link defaults.
	 *
	 * @return array $defaults Altered defaults.
	 */
	public function change_purchase_button_defaults( $defaults = array() ) {
		/*
		 * If Ajax add to cart is enabled, and this is an archive page, get the price setting from customizer.
		 */
		if ( $this->get_archive_button_type() === 'ajax-add-to-cart' && $this->context === 'archive-download' ) {
			$defaults['price'] = $this->show_archive_button_price();
		}

		$defaults['color'] = '';
		$classes           = $defaults['class'];
		$defaults['class'] = $classes . ' nv-edd-buy-btn';
		$defaults['text']  = __( 'Buy Now', 'neve' );

		$defaults = apply_filters( 'nv_edd_purchase_link_defaults', $defaults );

		return $defaults;
	}

	/**
	 * Output the price to the page.
	 * 
	 * @param mixed $id The ID of the current download in the loop.
	 * @return void 
	 */
	private function output_price( $id ) {
		/*
		 * If Ajax add to cart is enabled, and the user chose to show the price inside the button then bail.
		 */
		if ( $this->get_archive_button_type() === 'ajax-add-to-cart' && $this->show_archive_button_price() === true ) {
			return;
		}

		echo '<div class="nv-edd-download-meta">';
		echo '<p class="nv-edd-download-price">';
		if ( edd_has_variable_prices( $id ) ) {
			echo wp_kses_post( edd_price_range( $id ) );
		} else {
			wp_kses_post( (string) edd_price( $id ) );  // edd_price() function echo's by default
		}
		echo '</p>';
		echo '</div>';

	}

	/**
	 * Output the button to the page.
	 * 
	 * @return void 
	 */
	private function output_buy_button_type() {

		if ( $this->get_archive_button_type() === 'go-to-download' ) {
			echo '<a class="button nv-edd-buy-btn" href="' . esc_url( get_permalink() ) . '">';
			echo esc_html_e( 'Buy Now', 'neve' );
			echo '</a>';
		} else {
			echo edd_get_purchase_link(); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

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
		$this->context = $context;
		$id            = get_the_ID();
		global $edd_download_shortcode_item_atts, $edd_download_shortcode_item_i;
		?>

		<div class="<?php echo esc_attr( apply_filters( 'edd_download_class', 'edd_download', get_the_ID(), $edd_download_shortcode_item_atts, $edd_download_shortcode_item_i ) ); ?> nv-edd-download-item" id="edd_download_<?php echo esc_html( (string) $id ); ?>">
			<div class="<?php echo esc_attr( apply_filters( 'edd_download_inner_class', 'edd_download_inner', get_the_ID(), $edd_download_shortcode_item_atts, $edd_download_shortcode_item_i ) ); ?>">
				<?php do_action( 'edd_download_before' ); ?>
					<div class="nv-edd-download-thumbnail">
						<a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_post_thumbnail( 'medium' ); ?></a>
					</div>
					<?php do_action( 'edd_download_after_thumbnail' ); ?>
					<?php do_action( 'edd_download_before_title' ); ?>
					<div class="nv-edd-download-title">
						<p>
							<a href="<?php echo esc_url( get_permalink() ); ?>">
								<?php the_title(); ?>
							</a>
						</p>
					</div>
					<div>
					<?php 
						do_action( 'edd_download_after_title' );
						apply_filters( 'neve_edd_archive_excerpt', '', $id ); 
						do_action( 'edd_download_after_content' );
					?>
					</div>

					<?php 
					$this->output_price( $id );
					do_action( 'edd_download_after_price', $id ); 
					?>
					<div class="nv-edd-buy-btn-wrap">
						<?php $this->output_buy_button_type(); ?>
					</div>
				<?php do_action( 'edd_download_after' ); ?>
			</div>
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
		$this->context    = $context;
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
										<a href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>">
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
								<a href="<?php echo esc_url( get_category_link( $tag->term_id ) ); ?>">
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
