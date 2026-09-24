<?php
/**
 * Ability: neve/appearance-update.
 *
 * Coarse partial-merge of the global look (colors, typography, layout, buttons,
 * identity) and of the blog / single post / shop display settings. Only the keys present in the input are touched; everything is a
 * merge, never a wholesale replace (see appearance-apply-preset for replace).
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Appearance_Update
 *
 * @package Neve\Abilities
 */
class Appearance_Update extends Abstract_Ability {
	use Schema_Helpers;

	/**
	 * Friendly color names mapped to the palette color slots.
	 */
	const COLOR_MAP = array(
		'primary_accent'   => 'nv-primary-accent',
		'secondary_accent' => 'nv-secondary-accent',
		'site_background'  => 'nv-site-bg',
		'light_background' => 'nv-light-bg',
		'dark_background'  => 'nv-dark-bg',
		'text_color'       => 'nv-text-color',
		'text_dark_bg'     => 'nv-text-dark-bg',
		'extra_1'          => 'nv-c-1',
		'extra_2'          => 'nv-c-2',
	);

	/**
	 * Container style contexts mapped to their theme_mods.
	 */
	const CONTAINER_STYLE_MAP = array(
		'sitewide' => 'neve_default_container_style',
		'blog'     => 'neve_blog_archive_container_style',
		'single'   => 'neve_single_post_container_style',
	);

	/**
	 * Sidebar contexts mapped to their theme_mods.
	 */
	const SIDEBAR_MAP = array(
		'sitewide'       => 'neve_default_sidebar_layout',
		'blog'           => 'neve_blog_archive_sidebar_layout',
		'single-post'    => 'neve_single_post_sidebar_layout',
		'shop'           => 'neve_shop_archive_sidebar_layout',
		'single-product' => 'neve_single_product_sidebar_layout',
	);

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'appearance-update';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Update appearance', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Partial-merge update of the global look: colors/palette, typography, layout, buttons, site identity, and the blog archive, single post and WooCommerce shop display settings. Send only the keys you want to change; existing values are preserved.', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_annotations() {
		return array(
			'destructive' => false,
			'idempotent'  => true,
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'colors'     => array(
					'type'        => 'object',
					'description' => 'Color palette changes.',
					'properties'  => array(
						'active_palette' => array(
							'type'        => 'string',
							'description' => 'Switch the active palette by name.',
						),
						'set'            => array(
							'type'        => 'object',
							'description' => 'Literal 6-digit hex colors to set in the active palette.',
							'properties'  => array_fill_keys(
								array_keys( self::COLOR_MAP ),
								array( 'type' => 'string' )
							),
						),
					),
				),
				'typography' => array(
					'type'        => 'object',
					'description' => 'Typography changes.',
					'properties'  => array(
						'body_font'     => array(
							'type'        => 'string',
							'description' => 'Body font family name.',
						),
						'headings_font' => array(
							'type'        => 'string',
							'description' => 'Headings font family name.',
						),
						'element'       => array(
							'type'        => 'object',
							'description' => 'Per-element typeface styling.',
							'properties'  => array(
								'target'        => array(
									'type' => 'string',
									'enum' => array( 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ),
								),
								'fontSize'      => $this->responsive_value_schema( 'Font size per device' ),
								'lineHeight'    => $this->responsive_value_schema( 'Line height per device', false ),
								'letterSpacing' => $this->responsive_value_schema( 'Letter spacing per device', false ),
								'fontWeight'    => array( 'type' => 'string' ),
								'textTransform' => array(
									'type' => 'string',
									'enum' => array( 'none', 'capitalize', 'uppercase', 'lowercase' ),
								),
							),
							'required'    => array( 'target' ),
						),
					),
				),
				'layout'     => array(
					'type'        => 'object',
					'description' => 'Layout changes.',
					'properties'  => array(
						'container_width' => $this->responsive_integer_schema( 'Container width in px per device' ),
						'container_style' => array(
							'type'       => 'object',
							'properties' => array(
								'context' => array(
									'type' => 'string',
									'enum' => array_keys( self::CONTAINER_STYLE_MAP ),
								),
								'value'   => array(
									'type' => 'string',
									'enum' => array( 'contained', 'full-width' ),
								),
							),
							'required'   => array( 'context', 'value' ),
						),
						'sidebar'         => array(
							'type'       => 'object',
							'properties' => array(
								'context' => array(
									'type' => 'string',
									'enum' => array_keys( self::SIDEBAR_MAP ),
								),
								'value'   => array(
									'type' => 'string',
									'enum' => array( 'left', 'right', 'full-width' ),
								),
							),
							'required'   => array( 'context', 'value' ),
						),
						'advanced_layout' => array(
							'type'        => 'boolean',
							'description' => 'Enable per-context advanced layout options.',
						),
					),
				),
				'buttons'    => array(
					'type'        => 'object',
					'description' => 'Button styling for primary/secondary buttons. Color fields accept CSS colors and Neve palette vars like var(--nv-primary-accent).',
					'properties'  => array(
						'primary'   => $this->button_schema(),
						'secondary' => $this->button_schema(),
					),
				),
				'identity'   => array(
					'type'        => 'object',
					'description' => 'Site identity.',
					'properties'  => array(
						'logo_media_id'      => array(
							'type'        => 'integer',
							'description' => 'Attachment ID of an existing media item.',
						),
						'display_site_title' => array( 'type' => 'boolean' ),
						'display_tagline'    => array( 'type' => 'boolean' ),
						'blogname'           => array(
							'type'        => 'string',
							'description' => 'Site title. Requires the manage_options capability.',
						),
						'blogdescription'    => array(
							'type'        => 'string',
							'description' => 'Site tagline. Requires the manage_options capability.',
						),
					),
				),
				'blog'       => Display_Fields::get_group_schema( 'blog', 'Blog / archive display settings.' ),
				'single'     => Display_Fields::get_group_schema( 'single', 'Single post and page display settings.' ),
				'shop'       => Display_Fields::get_group_schema( 'shop', 'WooCommerce shop display settings. Requires WooCommerce.' ),
			),
		);
	}

	/**
	 * Schema for a single button group.
	 *
	 * @return array<mixed>
	 */
	private function button_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'radius'        => $this->box_model_schema( 'Border radius (top/right/bottom/left).' ),
				'padding'       => array(
					'type'       => 'object',
					'properties' => array(
						'mobile'  => $this->box_model_schema( 'Mobile padding.' ),
						'tablet'  => $this->box_model_schema( 'Tablet padding.' ),
						'desktop' => $this->box_model_schema( 'Desktop padding.' ),
					),
				),
				'fontSize'      => $this->responsive_value_schema( 'Font size per device.' ),
				'fontWeight'    => array( 'type' => 'string' ),
				'textTransform' => array(
					'type' => 'string',
					'enum' => array( 'none', 'capitalize', 'uppercase', 'lowercase' ),
				),
				'background'    => array( 'type' => 'string' ),
				'text'          => array( 'type' => 'string' ),
				'hover'         => array(
					'type'       => 'object',
					'properties' => array(
						'background' => array( 'type' => 'string' ),
						'text'       => array( 'type' => 'string' ),
					),
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_output_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'updated'  => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
				'warnings' => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$updated  = array();
		$warnings = array();

		// Validate everything that can fail before the first write.
		if ( isset( $input['identity'] ) && is_array( $input['identity'] ) ) {
			$needs_options = isset( $input['identity']['blogname'] ) || isset( $input['identity']['blogdescription'] );
			if ( $needs_options && ! current_user_can( 'manage_options' ) ) {
				return $this->error( 'forbidden', __( 'Changing the site title or tagline requires the manage_options capability.', 'neve' ), 403 );
			}
		}

		$display_mods = array();
		foreach ( Display_Fields::GROUPS as $group ) {
			if ( ! isset( $input[ $group ] ) || ! is_array( $input[ $group ] ) ) {
				continue;
			}
			$prepared = Display_Fields::prepare_group( $group, $input[ $group ] );
			if ( is_wp_error( $prepared ) ) {
				return $prepared;
			}
			$display_mods = array_merge( $display_mods, $prepared );
		}

		foreach ( $display_mods as $mod => $value ) {
			set_theme_mod( $mod, $value );
			$updated[] = $mod;
		}

		if ( isset( $input['colors'] ) && is_array( $input['colors'] ) ) {
			$this->apply_colors( $input['colors'], $updated, $warnings );
		}
		if ( isset( $input['typography'] ) && is_array( $input['typography'] ) ) {
			$this->apply_typography( $input['typography'], $updated );
		}
		if ( isset( $input['layout'] ) && is_array( $input['layout'] ) ) {
			$this->apply_layout( $input['layout'], $updated );
		}
		if ( isset( $input['buttons'] ) && is_array( $input['buttons'] ) ) {
			$this->apply_buttons( $input['buttons'], $updated, $warnings );
		}
		if ( isset( $input['identity'] ) && is_array( $input['identity'] ) ) {
			$this->apply_identity( $input['identity'], $updated, $warnings );
		}

		if ( empty( $updated ) ) {
			return $this->error( 'no_changes', __( 'No recognized settings were provided.', 'neve' ) );
		}

		return array(
			'updated'  => array_values( array_unique( $updated ) ),
			'warnings' => $warnings,
		);
	}

	/**
	 * Read the global colors theme_mod as an array.
	 *
	 * @return array<mixed>
	 */
	private function get_global_colors() {
		$default = function_exists( 'neve_get_global_colors_default' ) ? neve_get_global_colors_default( true ) : array();
		$value   = get_theme_mod( 'neve_global_colors', $default );

		if ( is_string( $value ) ) {
			$decoded = json_decode( $value, true );
			$value   = is_array( $decoded ) ? $decoded : array();
		}

		return is_array( $value ) ? $value : array();
	}

	/**
	 * Apply color / palette changes.
	 *
	 * @param array<mixed> $colors   Input colors block.
	 * @param array<mixed> $updated  Reference to the updated keys.
	 * @param array<mixed> $warnings Reference to the warnings list.
	 * @return void
	 */
	private function apply_colors( array $colors, array &$updated, array &$warnings ) {
		$global = $this->get_global_colors();

		if ( isset( $colors['active_palette'] ) ) {
			$name = $colors['active_palette'];
			if ( isset( $global['palettes'][ $name ] ) ) {
				$global['activePalette'] = $name;
				$updated[]               = 'neve_global_colors.activePalette';
			} else {
				$warnings[] = sprintf(
					/* translators: %s: palette name */
					__( 'Palette "%s" does not exist; active palette unchanged.', 'neve' ),
					$name
				);
			}
		}

		$active = isset( $global['activePalette'] ) ? $global['activePalette'] : 'base';

		if ( isset( $colors['set'] ) && is_array( $colors['set'] ) && ! empty( $colors['set'] ) ) {
			// The active palette must expose an editable colors map; otherwise the
			// requested changes would be silently dropped.
			if ( ! isset( $global['palettes'][ $active ]['colors'] ) ) {
				$warnings[] = sprintf(
					/* translators: %s: active palette name */
					__( 'The active palette "%s" has no editable colors; no colors were changed.', 'neve' ),
					$active
				);
			} else {
				foreach ( $colors['set'] as $friendly => $value ) {
					if ( ! isset( self::COLOR_MAP[ $friendly ] ) ) {
						continue;
					}
					if ( ! is_string( $value ) || ! preg_match( '/^#[0-9a-fA-F]{6}$/', $value ) ) {
						$warnings[] = sprintf(
							/* translators: %s: color key */
							__( 'Skipped "%s": palette entries must be 6-digit hex colors.', 'neve' ),
							$friendly
						);
						continue;
					}
					$slot = self::COLOR_MAP[ $friendly ];

					$global['palettes'][ $active ]['colors'][ $slot ] = $value;
					$updated[]                                        = 'neve_global_colors.' . $slot;
				}
			}
		}

		set_theme_mod( 'neve_global_colors', $global );
	}

	/**
	 * Apply typography changes.
	 *
	 * @param array<mixed> $typography Input typography block.
	 * @param array<mixed> $updated    Reference to the updated keys.
	 * @return void
	 */
	private function apply_typography( array $typography, array &$updated ) {
		if ( isset( $typography['body_font'] ) ) {
			set_theme_mod( 'neve_body_font_family', sanitize_text_field( $typography['body_font'] ) );
			$updated[] = 'neve_body_font_family';
		}
		if ( isset( $typography['headings_font'] ) ) {
			set_theme_mod( 'neve_headings_font_family', sanitize_text_field( $typography['headings_font'] ) );
			$updated[] = 'neve_headings_font_family';
		}

		if ( isset( $typography['element'] ) && is_array( $typography['element'] ) && isset( $typography['element']['target'] ) ) {
			$target = $typography['element']['target'];
			$mod    = 'body' === $target ? 'neve_typeface_general' : 'neve_' . $target . '_typeface_general';

			$current = get_theme_mod( $mod, array() );
			$current = is_array( $current ) ? $current : array();

			$props = $typography['element'];
			unset( $props['target'] );

			// Deep-merge so a partial update (e.g. only fontSize.desktop) keeps the
			// other breakpoints/sub-values instead of replacing the whole sub-object.
			$merged = $this->rec_wp_parse_args( $props, $current );
			set_theme_mod( $mod, $merged );
			$updated[] = $mod;
		}
	}

	/**
	 * Apply layout changes.
	 *
	 * @param array<mixed> $layout  Input layout block.
	 * @param array<mixed> $updated Reference to the updated keys.
	 * @return void
	 */
	private function apply_layout( array $layout, array &$updated ) {
		if ( isset( $layout['container_width'] ) && is_array( $layout['container_width'] ) ) {
			$current = $this->get_responsive_theme_mod( 'neve_container_width', 1170 );
			$merged  = array_merge( $current, $layout['container_width'] );
			set_theme_mod( 'neve_container_width', wp_json_encode( $merged ) );
			$updated[] = 'neve_container_width';
		}

		if ( isset( $layout['container_style']['context'], $layout['container_style']['value'] ) ) {
			$ctx = $layout['container_style']['context'];
			if ( isset( self::CONTAINER_STYLE_MAP[ $ctx ] ) ) {
				set_theme_mod( self::CONTAINER_STYLE_MAP[ $ctx ], $layout['container_style']['value'] );
				$updated[] = self::CONTAINER_STYLE_MAP[ $ctx ];
			}
		}

		if ( isset( $layout['sidebar']['context'], $layout['sidebar']['value'] ) ) {
			$ctx = $layout['sidebar']['context'];
			if ( isset( self::SIDEBAR_MAP[ $ctx ] ) ) {
				set_theme_mod( self::SIDEBAR_MAP[ $ctx ], $layout['sidebar']['value'] );
				$updated[] = self::SIDEBAR_MAP[ $ctx ];
			}
		}

		if ( isset( $layout['advanced_layout'] ) ) {
			set_theme_mod( 'neve_advanced_layout_options', (bool) $layout['advanced_layout'] );
			$updated[] = 'neve_advanced_layout_options';
		}
	}

	/**
	 * Apply button changes.
	 *
	 * @param array<mixed> $buttons  Input buttons block.
	 * @param array<mixed> $updated  Reference to the updated keys.
	 * @param array<mixed> $warnings Reference to the warnings list.
	 * @return void
	 */
	private function apply_buttons( array $buttons, array &$updated, array &$warnings ) {
		$groups = array(
			'primary'   => array(
				'padding'    => 'neve_button_padding',
				'typeface'   => 'neve_button_typeface',
				'appearance' => 'neve_button_appearance',
			),
			'secondary' => array(
				'padding'    => 'neve_secondary_button_padding',
				'typeface'   => 'neve_secondary_button_typeface',
				'appearance' => 'neve_secondary_button_appearance',
			),
		);

		foreach ( $groups as $group => $mods ) {
			if ( ! isset( $buttons[ $group ] ) || ! is_array( $buttons[ $group ] ) ) {
				continue;
			}
			$cfg = $buttons[ $group ];

			if ( isset( $cfg['padding'] ) && is_array( $cfg['padding'] ) ) {
				$current = get_theme_mod( $mods['padding'], array() );
				$padding = $cfg['padding'];
				set_theme_mod( $mods['padding'], $this->rec_wp_parse_args( $padding, is_array( $current ) ? $current : array() ) );
				$updated[] = $mods['padding'];
			}

			$typeface = array();
			foreach ( array( 'fontSize', 'fontWeight', 'textTransform' ) as $prop ) {
				if ( isset( $cfg[ $prop ] ) ) {
					$typeface[ $prop ] = $cfg[ $prop ];
				}
			}
			if ( ! empty( $typeface ) ) {
				$current = get_theme_mod( $mods['typeface'], array() );
				set_theme_mod( $mods['typeface'], $this->rec_wp_parse_args( $typeface, is_array( $current ) ? $current : array() ) );
				$updated[] = $mods['typeface'];
			}

			$appearance = array();
			if ( isset( $cfg['radius'] ) ) {
				$appearance['borderRadius'] = $cfg['radius'];
			}
			// Input path (below buttons.<group>) => appearance key, value.
			$colors = array(
				'background'       => array( 'background', isset( $cfg['background'] ) ? $cfg['background'] : null ),
				'text'             => array( 'text', isset( $cfg['text'] ) ? $cfg['text'] : null ),
				'hover.background' => array( 'backgroundHover', isset( $cfg['hover']['background'] ) ? $cfg['hover']['background'] : null ),
				'hover.text'       => array( 'textHover', isset( $cfg['hover']['text'] ) ? $cfg['hover']['text'] : null ),
			);
			foreach ( $colors as $path => $color ) {
				list( $key, $value ) = $color;
				if ( null === $value ) {
					continue;
				}
				if ( $this->is_supported_color_value( $value ) ) {
					$appearance[ $key ] = trim( $value );
				} else {
					$warnings[] = sprintf(
						/* translators: %s: input field path, e.g. buttons.primary.background */
						__( 'Skipped "%s": use a CSS color or a Neve palette var like var(--nv-primary-accent).', 'neve' ),
						'buttons.' . $group . '.' . $path
					);
				}
			}
			if ( ! empty( $appearance ) ) {
				$current = get_theme_mod( $mods['appearance'], array() );
				set_theme_mod( $mods['appearance'], $this->rec_wp_parse_args( $appearance, is_array( $current ) ? $current : array() ) );
				$updated[] = $mods['appearance'];
			}
		}
	}

	/**
	 * Accept the CSS color formats Neve commonly uses for style consumers.
	 *
	 * Palette definitions remain hex-only; this helper is for fields that
	 * consume colors, such as button appearance settings.
	 *
	 * @param mixed $value Candidate color value.
	 * @return bool
	 */
	private function is_supported_color_value( $value ) {
		if ( ! is_string( $value ) ) {
			return false;
		}

		$value = trim( $value );
		if ( '' === $value ) {
			return false;
		}

		if ( preg_match( '/^#[0-9a-fA-F]{3,8}$/', $value ) ) {
			return true;
		}

		if ( preg_match( '/^(?:rgb|rgba|hsl|hsla)\(\s*[-0-9.% ,]+\)$/', $value ) ) {
			return true;
		}

		if ( preg_match( '/^var\(--nv-[a-z0-9-]+\)$/i', $value ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Apply identity changes.
	 *
	 * @param array<mixed> $identity Input identity block.
	 * @param array<mixed> $updated  Reference to the updated keys.
	 * @param array<mixed> $warnings Reference to the warnings list.
	 * @return void
	 */
	private function apply_identity( array $identity, array &$updated, array &$warnings ) {
		if ( isset( $identity['logo_media_id'] ) ) {
			$id = (int) $identity['logo_media_id'];
			if ( $id > 0 && 'attachment' === get_post_type( $id ) ) {
				set_theme_mod( 'custom_logo', $id );
				$updated[] = 'custom_logo';
			} else {
				$warnings[] = __( 'logo_media_id does not reference an existing media item; logo unchanged.', 'neve' );
			}
		}

		if ( isset( $identity['display_site_title'] ) ) {
			set_theme_mod( 'logo_display', $identity['display_site_title'] ? 'logoTitle' : 'logo' );
			$updated[] = 'logo_display';
		}

		if ( isset( $identity['display_tagline'] ) ) {
			set_theme_mod( 'logo_show_tagline', $identity['display_tagline'] ? 1 : 0 );
			$updated[] = 'logo_show_tagline';
		}

		if ( isset( $identity['blogname'] ) ) {
			update_option( 'blogname', sanitize_text_field( $identity['blogname'] ) );
			$updated[] = 'blogname';
		}

		if ( isset( $identity['blogdescription'] ) ) {
			update_option( 'blogdescription', sanitize_text_field( $identity['blogdescription'] ) );
			$updated[] = 'blogdescription';
		}
	}
}
