<?php
/**
 * Style Book
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Style_Book
 */
class Style_Book extends Base_View {

	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		add_action( 'wp_head', array( $this, 'add_style_book_content' ) );
	}

	/**
	 * Add Style Book content to the footer when in customizer preview.
	 * 
	 * @return void
	 */
	public function add_style_book_content() {
		if ( ! is_customize_preview() ) {
			return;
		}

		$colors = [
			'nv-primary-accent'   => [
				'name'    => __( 'Primary Accent', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-secondary-accent' => [
				'name'    => __( 'Secondary Accent', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-site-bg'          => [
				'name'    => __( 'Site Background', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-light-bg'         => [
				'name'    => __( 'Light Background', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-dark-bg'          => [
				'name'    => __( 'Dark Background', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-text-color'       => [
				'name'    => __( 'Text Color', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-text-dark-bg'     => [
				'name'    => __( 'Text Dark Background', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-c-1'              => [
				'name'    => __( 'Extra Color 1', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
			'nv-c-2'              => [
				'name'    => __( 'Extra Color 2', 'neve' ),
				'section' => 'neve_colors_background_section',
			],
		];

		?>
			<div id="nv-sb-container" style="display:none;">
				<!-- Close button in top left -->
				<div class="nv-sb-close-btn" role="button" tabindex="0" aria-label="<?php esc_attr_e( 'Close', 'neve' ); ?>">
					<span class="dashicons dashicons-no-alt"></span>
				</div>

				<div class="nv-sb-grid">
					<!-- Colors Section -->
					<div class="nv-sb-section full-section">
						<h2 class="nv-sb-section-title"><?php esc_html_e( 'Palette Colors', 'neve' ); ?></h2>

						<div class="nv-sb-color-grid">
							<?php foreach ( $colors as $color_var => $color_data ) : ?>
							<div class="nv-sb-color-swatch builder-item-focus" data-section="<?php echo esc_attr( $color_data['section'] ); ?>">
								<div class="nv-sb-color-box" style="background: var(--<?php echo esc_attr( $color_var ); ?>);"></div>
								<div class="nv-sb-color-info">
									<div class="nv-sb-color-name"><?php echo esc_html( $color_data['name'] ); ?></div>
								</div>
							</div>
							<?php endforeach; ?>
						</div>
					</div>

					<!-- Typography Section -->
					<div class="nv-sb-section full-section">
						<h2 class="nv-sb-section-title"><?php esc_html_e( 'Typography', 'neve' ); ?></h2>

						<div class="nv-sb-typography-grid">
							<div>
								<div class="nv-sb-type-sample">
									<?php
									$headings = [
										1 => 'neve_h1_accordion_wrap',
										2 => 'neve_h2_accordion_wrap',
										3 => 'neve_h3_accordion_wrap',
										4 => 'neve_h4_accordion_wrap',
										5 => 'neve_h5_accordion_wrap',
										6 => 'neve_h6_accordion_wrap',
									];

									foreach ( $headings as $level => $section ) : 
										?>
										<h<?php echo (int) $level; ?> class="builder-item-focus" data-section="<?php echo esc_attr( $section ); ?>">
											<?php 
											/* translators: %d: heading level number (1-6) */
											echo sprintf( esc_html__( 'Heading %d', 'neve' ), (int) $level ); 
											?>
										</h<?php echo (int) $level; ?>>
									<?php endforeach; ?>
								</div>
							</div>

							<div>
								<p class="builder-item-focus" data-section="neve_typography_general" style="font-size: 1.1rem; margin: 0 0 20px 0;">
									<?php echo esc_html( wp_get_theme()->get( 'Description' ) ); ?>
								</p>

								<p class="builder-item-focus" data-section="neve_typography_general" style="margin: 0 0 15px 0;">
									<?php esc_html_e( 'Design unique website sections without touching code. Create custom headers, footers, and content areas that match your vision.', 'neve' ); ?>
								</p>
							</div>
						</div>
					</div>

					<!-- Buttons Section -->
					<div class="nv-sb-section">
						<h2 class="nv-sb-section-title"><?php esc_html_e( 'Buttons', 'neve' ); ?></h2>

						<div class="nv-sb-button-group">
							<button class="nv-sb-btn-primary builder-item-focus" data-section="neve_buttons_section">
								<?php esc_html_e( 'Primary Button', 'neve' ); ?>
							</button>
							<button class="nv-sb-btn-secondary builder-item-focus" data-section="neve_buttons_section">
								<?php esc_html_e( 'Secondary Button', 'neve' ); ?>
							</button>
						</div>
					</div>

					<!-- Form Elements Section -->
						<div class="nv-sb-section">
							<h2 class="nv-sb-section-title"><?php esc_html_e( 'Form Fields', 'neve' ); ?></h2>
							<form class="nv-sb-form">
								<div class="nv-sb-form-group builder-item-focus" data-section="neve_form_fields_section">
									<label for="text-input"><?php esc_html_e( 'Input Text', 'neve' ); ?></label>
									<input type="text" id="text-input" placeholder="<?php esc_attr_e( 'Placeholder', 'neve' ); ?>">
								</div>
								<div class="nv-sb-form-group builder-item-focus" data-section="neve_form_fields_section">
									<label for="textarea"><?php esc_html_e( 'Textarea', 'neve' ); ?></label>
									<textarea id="textarea" placeholder="<?php esc_attr_e( 'Placeholder', 'neve' ); ?>"></textarea>
								</div>
								<div class="nv-sb-form-group builder-item-focus" data-section="neve_form_fields_section">
									<label for="select"><?php esc_html_e( 'Dropdown', 'neve' ); ?></label>
									<select id="select">
										<option>
											<?php 
											/* translators: %d: heading level number */
											echo sprintf( esc_html__( 'Heading %d', 'neve' ), 1 ); 
											?>
										</option>
										<option>
											<?php 
											/* translators: %d: heading level number */
											echo sprintf( esc_html__( 'Heading %d', 'neve' ), 2 ); 
											?>
										</option>
										<option>
											<?php 
											/* translators: %d: heading level number */
											echo sprintf( esc_html__( 'Heading %d', 'neve' ), 3 ); 
											?>
										</option>
									</select>
								</div>
							</form>
						</div>
				</div>
			</div>
		<?php
	}
}
