<?php
/**
 * The upsell customize section for Footer extends the WP_Customize_Section class.
 *
 * @package    Neve\Customizer\Controls\Upsells
 */

namespace Neve\Customizer\Controls\Upsells;

/**
 * Customizer section.
 *
 * @see        WP_Customize_Section
 */
class Features_Upsell_Section extends \WP_Customize_Section {
	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'nv_features_upsell_section';

	/**
	 * Button text.
	 *
	 * @var   string
	 */
	public $button_text = '';

	/**
	 * Button link.
	 *
	 * @var   string
	 */
	public $link = '';

	/**
	 * List of features.
	 *
	 * @var   string
	 */
	public $text = '';

	/**
	 * Features list.
	 *
	 * @var array  $features_list Array containing the list of features.
	 */
	public $features_list = array();

	/**
	 * The title property for the upsell section.
	 *
	 * @var string $title The section title.
	 */
	public $title = '';
	
	/**
	 * Overrides parent render() method.
	 * Render the template for Neve features section.
	 *
	 * @override
	 * @return void
	 */
	final protected function render() {
		?>
		<li id="accordion-section-<?php echo esc_attr( $this->id ); ?>"
			data-slug="<?php echo esc_attr( $this->id ); ?>"
			class="control-section control-section-<?php echo esc_attr( $this->type ); ?>">
			<div class="nv-upsell-feat-container">
				<h2 class="nv-upsell-feat-heading"><?php echo esc_html( $this->title ); ?></h2>
				<p class="nv-upsell-feat-description">
					<?php echo esc_html( $this->text ); ?>
				</p>

				<ul class="nv-upsell-feat-list">
					<?php
					foreach ( $this->features_list as $feature ) {
						echo '<li class="nv-upsell-feat-item">';
						echo '<span class="dashicons dashicons-lock nv-upsell-feat-lock-icon" aria-hidden="true"></span>';
						echo '<span>' . esc_html( $feature ) . '</span>';
						echo '</li>';
					}
					?>
				</ul>

				<a href="<?php echo esc_url_raw( $this->link ); ?>" class="button button-primary" target="_blank" rel="noopener noreferrer">
					<?php echo esc_html( $this->button_text ); ?>
				</a>

				<a href="https://docs.themeisle.com/article/1176-what-is-the-difference-between-neve-and-neve-pro#pagefooter" class="button button-link" target="_blank" rel="noopener noreferrer">
					<?php echo esc_html__( 'View features comparison', 'neve' ); ?> &rarr;
				</a>
			</div>
		</li>
		<?php
	}
}


