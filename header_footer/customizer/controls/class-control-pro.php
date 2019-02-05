<?php
class Hf_Customizer_Control_Pro extends WP_Customize_Control {
	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	/**
	 * Data type
	 *
	 * @access public
	 * @var string
	 */
	public $option_type = 'theme_mod';
	public $type = 'pro';

	public $fields = array();

	/**
	 * Provide the parent, comparison operator, and value which affects the field’s visibility.
	 *
	 * @var array
	 */
	public $features = array();
	public $pro_url = array();
	public $pro_text = '';


	/**
	 * Render control's content
	 */
	protected function render_content() {
		if ( ! empty( $this->label ) ) : ?>
			<div class="Hf-pro-teaser">
				<?php if ( $this->label ) { ?>
					<h3><?php echo $this->label; // WPCS: XSS OK. ?></h3>
				<?php } ?>
				<?php if ( $this->description ) { ?>
					<p class="description"><?php echo $this->description; // WPCS: XSS OK. ?></p>
				<?php } ?>
				<?php if ( ! empty( $this->features ) ) : ?>
					<ul>
						<?php foreach ( $this->features as $feature ) : ?>
							<li><?php echo $feature; // WPCS: XSS OK. ?></li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
				<a href="<?php echo esc_url( $this->pro_url ); ?>" class="button button-secondary" target="_blank" rel="noopener"><?php echo esc_html_x( 'Learn More', 'Hf Pro upsell', 'Hf' ); ?></a>
			</div>
		<?php endif;
	}
}
