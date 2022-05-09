<?php
/**
 * Dynamic selector.
 *
 * @package Neve\Core\Styles
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

/**
 * Class Dynamic_Selector
 *
 * @package Neve\Core\Styles
 */
class Dynamic_Selector {
	const MOBILE  = 'mobile';
	const TABLET  = 'tablet';
	const DESKTOP = 'desktop';

	const META_IS_RESPONSIVE = 'is_responsive';
	const META_SUFFIX        = 'suffix';
	const META_KEY           = 'key';
	const META_IMPORTANT     = 'important';
	const META_DEFAULT       = 'default';
	const META_DEVICE_ONLY   = 'device_only';
	const META_FILTER        = 'filter';
	const META_AS_JSON       = 'as_json';

	const KEY_SELECTOR = 'selectors';
	const KEY_RULES    = 'rules';
	const KEY_CONTEXT  = 'context';

	const CONTEXT_FRONTEND  = 'frontend';
	const CONTEXT_GUTENBERG = 'gutenberg';
	/**
	 * Holds CSS selector mapping.
	 *
	 * @var array Selector mapping.
	 */
	private $mapping = [];
	/**
	 * Current device.
	 *
	 * @var string Current device.
	 */
	protected $device = null;
	/**
	 * Used to flag the shorthand tag to css selector transformations.
	 *
	 * @var bool Flag shorthand transformation.
	 */
	private $is_transformed = false;
	/**
	 * Holds current context.
	 *
	 * @var string Current context.
	 */
	private $current_context = null;

	/**
	 * Dynamic_Selector constructor.
	 *
	 * @param array $mapping CSS selector mapping.
	 */
	public function __construct( $mapping, $context = null ) {
		$this->current_context = $context;
		$this->mapping         = $mapping;
	}

	/**
	 * Mark the subscriber for Mobile.
	 *
	 * @return $this
	 */
	public function for_mobile() {
		$this->device = self::MOBILE;

		return $this;
	}

	/**
	 * Mark the subscriber for tablet.
	 *
	 * @return $this
	 */
	public function for_tablet() {
		$this->device = self::TABLET;

		return $this;
	}

	/**
	 * Mark the subscriber for desktop.
	 *
	 * @return $this
	 */
	public function for_desktop() {
		$this->device = self::DESKTOP;

		return $this;
	}

	/**
	 * Get current context.
	 *
	 * @return string Context.
	 */
	public function get_context() {
		return ! empty( $this->current_context ) ? $this->current_context : self::CONTEXT_FRONTEND;
	}

	/**
	 * Transform selectors tags into CSS selectors.
	 *
	 * @return array Transformed mapping.
	 */
	public function transform_selectors() {
		if ( $this->is_transformed ) {
			return $this->mapping;
		}
		$map = [];
		foreach ( $this->mapping as $key_map => $value_map ) {
			$selector           = ! isset( $value_map[ self::KEY_SELECTOR ] ) ? $key_map : $value_map[ self::KEY_SELECTOR ];
			$props              = ! isset( $value_map[ self::KEY_RULES ] ) ? $value_map : $value_map[ self::KEY_RULES ];
			$context            = isset( $value_map[ self::KEY_CONTEXT ] ) ? $value_map[ self::KEY_CONTEXT ] : [ self::CONTEXT_FRONTEND => true ];
			$expanded_selectors = $selector;
			if ( ! isset( $context[ $this->get_context() ] ) ) {
				continue;
			}
			if ( isset( Config::$css_selectors_map[ $expanded_selectors ] ) ) {
				$expanded_selectors = Config::$css_selectors_map[ $expanded_selectors ];
			}
			$expanded_selectors = apply_filters( 'neve_selectors_' . $selector, $expanded_selectors, $context, $this );
			if ( empty( $expanded_selectors ) ) {
				continue;
			}
			if ( $this->get_context() === self::CONTEXT_GUTENBERG ) {
				$expanded_selectors = explode( ',', $expanded_selectors );

				$expanded_selectors = array_map(
					function ( $value ) {
						return $value === ':root' ? $value : '.editor-styles-wrapper ' . $value;
					},
					$expanded_selectors
				);
				$expanded_selectors = implode( ',', $expanded_selectors );
			}

			$map[ $expanded_selectors ] = isset( $map[ $expanded_selectors ] ) ? array_merge( $map[ $expanded_selectors ], $props ) : $props;
		}
		$this->is_transformed = true;
		$this->mapping        = $map;

		return $this->mapping;
	}

	/**
	 * Get dynamic value.
	 *
	 * @param array|string $meta Prop meta.
	 *
	 * @return bool|mixed
	 */
	public function get_value( $meta ) {
		// By default the non-responsive settings are shown only on mobile media query. By using the META_DEVICE_ONLY prop we can move this to different devices.
		if ( ( ! isset( $meta[ self::META_IS_RESPONSIVE ] ) || ! $meta[ self::META_IS_RESPONSIVE ] ) && $this->get_device() !== ( isset( $meta[ self::META_DEVICE_ONLY ] ) ? $meta[ self::META_DEVICE_ONLY ] : self::MOBILE ) ) {
			return false;
		}
		$key     = is_array( $meta ) ? $meta[ self::META_KEY ] : $meta;
		$default = isset( $meta[ self::META_DEFAULT ] ) ? $meta[ self::META_DEFAULT ] : false;
		$value   = Mods::get( $key, $default );


		if ( $value === false || $value === null || $value === '' ) {
			return $default;
		}
		if ( isset( $meta[ self::META_IS_RESPONSIVE ] ) && $meta[ self::META_IS_RESPONSIVE ] ) {
			// If the value is defined as responsive and we don't have a responsive mapped value,
			// we use that value for all devices.
			if ( is_string( $value ) ) {
				$decoded_value = json_decode( $value, true );
				$value         = $decoded_value !== null ? $decoded_value : $value;
			}

			return isset( $value[ $this->get_device() ] ) ? $value[ $this->get_device() ] : ( ( is_string( $value ) || is_numeric( $value ) ) ? $value : false );
		}

		return $value;
	}

	/**
	 * Get current device.
	 *
	 * @return string Current device.
	 */
	public function get_device() {
		return ! empty( $this->device ) ? $this->device : self::MOBILE;
	}

	/**
	 * Return CSS rules.
	 *
	 * @return string CSS style.
	 */
	public function __toString() {
		$rules = '';

		$selectors = $this->transform_selectors();

		foreach ( $selectors as $selector => $props ) {
			$rules_selector = '';
			foreach ( $props as $css_prop => $meta ) {
				$value = $this->get_value( $meta );
				if ( $value === false || $value === null || $value === '' ) {
					continue;
				}
				$rules_selector .= Css_Prop::transform( $css_prop, $value, $meta, $this->get_device() );
			}
			$rules_selector = trim( $rules_selector );
			if ( empty( $rules_selector ) ) {
				continue;
			}
			$rules .= sprintf( "\n%s{ \n%s \n}\n", $selector, $rules_selector );
		}

		return $rules;
	}

}
