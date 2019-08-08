<?php
/**
 * Font selector.
 *
 * @package Neve\Customizer\Controls
 * @since   1.1.38
 */

namespace Neve\Customizer\Controls;

/**
 * Class Font_Selector
 *
 * @package Neve\Customizer\Controls\
 */
class Font_Selector extends \WP_Customize_Control {
	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'selector-font';

	/**
	 * Default Value for the control.
	 *
	 * @var string
	 */
	private $default = 'Open Sans';

	/**
	 * Render the control's content.
	 * Allows the content to be overriden without having to rewrite the wrapper in $this->render().
	 *
	 * @access protected
	 */
	protected function render_content() {
		$std_fonts     = $this->get_standard_fonts();
		$google_fonts  = $this->get_google_fonts();
		$typekit_fonts = apply_filters( 'neve_typekit_fonts', array() );
		$value         = $this->value();

		if ( empty( $value ) || $value === 'default' ) {
			$value = ucwords( 'default' );
		}

		?>
		<label>
			<?php if ( ! empty( $this->label ) ) : ?>
				<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
			<?php endif; ?>
			<?php if ( ! empty( $this->description ) ) : ?>
				<span class="description customize-control-description"><?php echo wp_kses_post( $this->description ); ?></span>
			<?php endif; ?>
		</label>
		<div class="neve-ss-wrap">
			<input class="neve-fs-main-input" type="text" name="<?php echo esc_attr( $this->id ); ?>" value="<?php echo esc_attr( $value ); ?>" readonly>
			<span class="neve-fs-input-addon"><i class="dashicons dashicons-arrow-down"></i></span>
			<div class="neve-fs-dropdown">
				<span class="neve-fs-search">
						<input type="search" placeholder="<?php echo _x( 'Search', 'label', 'neve' ) . '...'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>">
				</span>
				<div class="neve-fs-options-wrapper">
					<span class="neve-fs-option" data-source="system" data-control="<?php echo esc_attr( $this->id ); ?>" data-option="default"><?php esc_html_e( 'Default', 'neve' ); ?></span>
					<?php
					$this->render_dropdown_options_group( $std_fonts, esc_html__( 'Standard Fonts', 'neve' ), 'system' );
					if ( ! empty( $typekit_fonts ) ) {
						$this->render_dropdown_options_group( $typekit_fonts, esc_html__( 'Adobe Fonts', 'neve' ), 'adobe-fonts' );
					}
					$this->render_dropdown_options_group( $google_fonts, esc_html__( 'Google Fonts', 'neve' ), 'google-fonts' );
					?>
				</div>
			</div>
			<input type="hidden" class="neve-ss-collector" <?php $this->link(); ?> >
		</div>
		<?php
	}

	/**
	 * List of standard fonts
	 *
	 * @since 1.1.38
	 */
	private function get_standard_fonts() {
		return neve_get_standard_fonts();
	}

	/**
	 * List of All Google fonts
	 *
	 * @since 1.1.38
	 */
	private function get_google_fonts() {
		return neve_get_google_fonts();
	}

	/**
	 * Render the dropdown option group.
	 *
	 * @param array  $options Options in group.
	 * @param string $title Title of options group.
	 * @param string $source system/google-font.
	 */
	protected function render_dropdown_options_group( $options, $title, $source ) {
		if ( ! empty( $options ) ) {
			?>
			<span class="neve-fs-options-group">
					<span class="neve-fs-options-heading"><?php echo esc_html( $title ); ?></span>
				<?php foreach ( $options as $option ) { ?>
					<span class="neve-fs-option" data-source="<?php echo esc_attr( $source ); ?>" data-control="<?php echo esc_attr( $this->id ); ?>" data-filter="<?php echo esc_attr( strtolower( $option ) ); ?>" data-option="<?php echo esc_attr( $option ); ?>"><?php echo esc_html( $option ); ?></span>
				<?php } ?>
				</span>
			<?php
		}
	}
}
