<?php
if ( ! defined( 'ABSPATH' ) ) { // Prevent direct access.
	exit;
}

if ( class_exists( 'WP_Customize_Section' ) && ! class_exists( 'Hf_WP_Customize_Section_Pro' ) ) {

	class Hf_WP_Customize_Section_Pro extends WP_Customize_Section {
		/**
		 * The type of customize section being rendered.
		 *
		 * @since  1.0.0
		 * @access public
		 * @var    string
		 */
		public $type = 'Hf-pro';
		/**
		 * Custom button text to output.
		 *
		 * @since  1.0.0
		 * @access public
		 * @var    string
		 */
		public $pro_text = '';
		/**
		 * Custom plus section URL.
		 *
		 * @since  1.0.0
		 * @access public
		 * @var    string
		 */
		public $pro_url = '';
		/**
		 * Custom section ID.
		 *
		 * @since  1.0.0
		 * @access public
		 * @var    string
		 */
		public $id = '';

		public $teaser = false;
		public $features = array();

		/**
		 * Add custom parameters to pass to the JS via JSON.
		 *
		 * @since  1.0.0
		 * @access public
		 * @return array
		 */
		public function json() {
			$json             = parent::json();
			$json['pro_text'] = $this->pro_text;
			$json['pro_url']  = $this->pro_url;
			$json['id']       = $this->id;
			$json['teaser']   = $this->teaser;
			$json['features'] = $this->features;

			return $json;
		}

		/**
		 * Outputs the Underscore.js template.
		 *
		 * @since  1.0.0
		 * @access public
		 * @return void
		 */
		protected function render_template() { ?>
			<# if (  data.teaser ) { #>
			<li id="accordion-section-{{ data.id }}" class="accordion-section control-section control-section-{{ data.type }} cannot-expand">
				<div class="Hf-pro-teaser">
					<h3>{{{ data.title }}}</h3>
					<# if ( data.description ) { #>
					<p class="description">{{{ data.description }}}</p>
					<# } #>
					<# if ( 0 < data.features.length ) { #>
					<ul>
						<# _.each( data.features, function( feature, i ) { #>
						<li>{{{ feature }}}</li>
						<# }); #>
					</ul>
					<# } #>
					<a href="{{ data.pro_url }}" class="button button-secondary" target="_blank" rel="noopener"><?php echo esc_html_x( 'Learn More', 'Hf Pro upsell', 'Hf' ); ?></a>
				</div>
			</li>
			<# } else { #>
			<li id="accordion-section-{{ data.id }}" class="accordion-section control-section control-section-{{ data.type }} cannot-expand">
				<h3><a href="{{ data.pro_url }}" target="_blank">{{{ data.pro_text }}}</a></h3>
			</li>
			<# }  #>
		<?php }
	}


}
