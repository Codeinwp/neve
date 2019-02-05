<?php

class Hf_Builder_Item_Logo {
	public $id = 'logo';

	function item() {
		return array(
			'name'    => __( 'Logo & Site Identity', 'Hf' ),
			'id'      => 'logo',
			'width'   => '3',
			'section' => 'title_tagline', // Customizer section to focus when click settings.
		);
	}

	function customize( $wp_customize ) {
		$section      = 'title_tagline';
		$render_cb_el = array( $this, 'render' );
		$selector     = '.site-header .site-branding';
		$fn           = 'Hf_customize_render_header';
		$config       = array(

			array(
				'name'            => 'logo_max_width',
				'type'            => 'slider',
				'section'         => $section,
				'default'         => array(),
				'max'             => 400,
				'priority'        => 8,
				'device_settings' => true,
				'title'           => __( 'Logo Max Width', 'Hf' ),
				'selector'        => 'format',
				'css_format'      => "$selector img { max-width: {{value}}; } .site-header .cb-row--mobile .site-branding img { width: {{value}}; } ",
			),

			array(
				'name'            => 'header_logo_retina',
				'type'            => 'image',
				'section'         => $section,
				'device_settings' => false,
				'selector'        => $selector,
				'render_callback' => $render_cb_el,
				'priority'        => 9,
				'title'           => __( 'Logo Retina', 'Hf' ),
			),

			array(
				'name'            => 'header_logo_name',
				'type'            => 'radio_group',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $render_cb_el,
				'title'           => __( 'Show Site Title', 'Hf' ),
				'default'         => 'yes',
				'choices'         => array(
					'yes' => __( 'Yes', 'Hf' ),
					'no'  => __( 'No', 'Hf' ),
				),
			),

			array(
				'name'            => 'header_logo_desc',
				'type'            => 'radio_group',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $render_cb_el,
				'title'           => __( 'Show Site Tagline', 'Hf' ),
				'default'         => 'no',
				'choices'         => array(
					'yes' => __( 'Yes', 'Hf' ),
					'no'  => __( 'No', 'Hf' ),
				),
			),

			array(
				'name'            => 'header_logo_pos',
				'type'            => 'radio_group',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $render_cb_el,
				'title'           => __( 'Logo Position', 'Hf' ),
				'default'         => 'top',
				'choices'         => array(
					'top'    => __( 'Top', 'Hf' ),
					'left'   => __( 'Left', 'Hf' ),
					'right'  => __( 'Right', 'Hf' ),
					'bottom' => __( 'Bottom', 'Hf' ),
				),
			),

		);

		$config = apply_filters( 'Hf/builder/header/logo-settings', $config, $this );

		// Item Layout.
		return array_merge( $config, Hf_header_layout_settings( $this->id, $section ) );
	}

	function logo() {
		$custom_logo_id    = get_theme_mod( 'custom_logo' );
		$logo_image        = Hf()->get_media( $custom_logo_id, 'full' );
		$logo_retina       = Hf()->get_setting( 'header_logo_retina' );
		$logo_retina_image = Hf()->get_media( $logo_retina );

		if ( $logo_image ) {
			?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-link" rel="home" itemprop="url">
				<img class="site-img-logo" src="<?php echo esc_url( $logo_image ); ?>" alt="<?php esc_attr_e( 'Logo', 'Hf' ); ?>"<?php if ( $logo_retina_image ) {
					?> srcset="<?php echo esc_url( $logo_retina_image ); ?> 2x"<?php } ?>>
				<?php do_action( 'customizer/after-logo-img' ); ?>
			</a>
			<?php
		}
	}

	/**
	 * Render Logo item
	 *
	 * @see get_custom_logo
	 */
	function render() {
		$show_name      = Hf()->get_setting( 'header_logo_name' );
		$show_desc      = Hf()->get_setting( 'header_logo_desc' );
		$image_position = Hf()->get_setting( 'header_logo_pos' );
		$logo_classes   = array( 'site-branding' );
		$logo_classes[] = 'logo-' . $image_position;
		$logo_classes   = apply_filters( 'Hf/logo-classes', $logo_classes );
		$tag = is_customize_preview() ? 'h2' : '__site_device_tag__';
		?>
		<div class="<?php echo esc_attr( join( ' ', $logo_classes ) ); ?>">
			<?php

			$this->logo();
			if ( 'no' !== $show_name || 'no' !== $show_desc ) {
				echo '<div class="site-name-desc">';
				if ( 'no' !== $show_name ) {
					if ( is_front_page() && is_home() ) : ?>
						<<?php echo $tag; // WPCS: XSS ok. ?> class="site-title">
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
						</<?php echo $tag; // WPCS: XSS ok. ?>>
					<?php else : ?>
						<p class="site-title">
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
						</p>
					<?php
					endif;
				}

				if ( 'no' !== $show_desc ) {
					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) { ?>
						<p class="site-description text-uppercase text-xsmall"><?php echo $description; /* WPCS: xss ok. */ ?></p>
						<?php
					};
				}
				echo '</div>';
			}

			?>
		</div><!-- .site-branding -->
		<?php
	}
}

Hf_Customize_Layout_Builder()->register_item( 'header', new Hf_Builder_Item_Logo() );
