<?php
/**
 * Features Upsell Trait
 *
 * @package Neve\Customizer\Traits
 */

namespace Neve\Customizer\Traits;

/**
 * Features Upsell trait
 */
trait Features_Upsell {

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
	 * Page section in comparison table.
	 *
	 * @var string $url_page_section The page section.
	 */
	public $url_page_section = '';

	/**
	 * Gather the parameters passed to client JavaScript via JSON for features list rendering.
	 * 
	 * @return array The array to be exported to the client as JSON.
	 */
	private function to_json_features() {
		return array(
			'features_list' => $this->features_list,
			'title'         => $this->title,
			'compare_url'   => tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/pricing/#compare', $this->url_page_section ) ),
		);
	}

	/**
	 * Renders the features body upsell in the customizer.
	 * 
	 * @access private
	 * 
	 * @return void
	 */
	private function render_features_body() {
		?>
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

				<a href="<?php echo esc_url_raw( tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/pricing/#compare', $this->url_page_section ) ) ); ?>" class="button button-link" target="_blank" rel="noopener noreferrer">
					<?php echo esc_html__( 'View features comparison', 'neve' ); ?> &rarr;
				</a>
			</div>
		<?php
	}

	/**
	 * Renders the template for the features body section in the customizer.
	 *
	 * @access private
	 * @return void
	 */
	private function render_features_body_template() {
		?>
		<div class="nv-upsell-feat-container">
			<h2 class="nv-upsell-feat-heading">{{data.title}}</h2>
			<# if( data.text ) { #>
				<p class="nv-upsell-feat-description">{{data.text}}</p>
			<# } #>

			<# if( data.features_list && data.features_list.length > 0 ) { #>
				<ul class="nv-upsell-feat-list">
					<# _.each( data.features_list, function( feature ) { #>
						<li class="nv-upsell-feat-item">
							<span class="dashicons dashicons-lock nv-upsell-feat-lock-icon" aria-hidden="true"></span>
							<span>{{feature}}</span>
						</li>
					<# }); #>
				</ul>
			<# } #>

			<# if( data.link && data.button_text ) { #>
				<a href="{{data.link}}" class="button button-primary" target="_blank" rel="noopener noreferrer">
					{{data.button_text}}
				</a>
			<# } #>

			<a href="{{data.compare_url}}" class="button button-link" target="_blank" rel="noopener noreferrer">
				<?php echo esc_html__( 'View features comparison', 'neve' ); ?> &rarr;
			</a>
		</div>
		<?php
	}
}
