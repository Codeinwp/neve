<?php


namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

abstract class Mod_Subscriber {
	private $is_for_gutenberg;
	protected $key = null;
	private $selectors = null;
	protected $default_value = false;
	private $gutenberg_selectors = false;
	private $critical = false;
	private $is_important = false;
	protected $is_responsive = false;

	/**
	 * Mod_Subscriber constructor.
	 *
	 * @param $key
	 * @param $mapping
	 * @param null $default_value
	 * @param bool $gutenberg_selectors
	 * @param bool $critical
	 */
	public function __construct( $key, $mapping, $default_value = null, $gutenberg_selectors = false, $critical = false ) {
		$this->key                 = $key;
		$this->selectors           = $mapping;
		$this->gutenberg_selectors = $gutenberg_selectors;
		$this->default_value       = $default_value;
		$this->critical            = $critical;
	}

	/**
	 * Get value that depends the css.
	 *
	 * @return mixed
	 */
	protected function get_value() {
		return Mods::get( $this->key, $this->default_value );
	}

	/**
	 * Check if setting is responsive.
	 *
	 * @return bool
	 */
	public function is_responsive() {
		return $this->is_responsive;
	}

	/**
	 * Transform subscribe to CSS rule.
	 *
	 * @param string $css_prp Css prop affected.
	 * @param string $context Context, if any.
	 *
	 * @return string
	 */
	protected abstract function transform( $css_prp, $context );

	/**
	 * Mark the subscriber for gutenberg usage.
	 *
	 * @return $this
	 */
	public function to_gutenberg() {
		$this->is_for_gutenberg = true;

		return $this;
	}

	/**
	 * Mark as important.
	 *
	 * @return $this
	 */
	public function as_important() {
		$this->is_important = true;

		return $this;
	}

	/**
	 * Check if the subscriber value is valid to be used.
	 *
	 * @return bool
	 */
	public function is_valid() {

		$value = $this->get_value();

		return ( $value === false || $value === null || $value === '' ) ? false : true;
	}

	/**
	 * Return CSS rules.
	 *
	 * @return string CSS style.
	 */
	public function __toString() {
		if ( ! $this->is_valid() ) {
			return '';
		}
		$selectors = $this->is_for_gutenberg ? $this->gutenberg_selectors : $this->selectors;

		if ( ! is_array( $selectors ) ) {
			return '';
		}
		$rules = '';
		foreach ( $selectors as $selector => $props ) {
			$rules_selector     = '';
			$expanded_selectors = $selector;
			if ( isset( Config::$css_selectors_map[ $expanded_selectors ] ) ) {
				$expanded_selectors = Config::$css_selectors_map[ $expanded_selectors ];
			}
			$expanded_selectors = apply_filters( 'neve_selectors_' . $this->key, $expanded_selectors, $selector, $this );
			if ( empty( $expanded_selectors ) ) {
				continue;
			}
			foreach ( $props as $index => $value ) {
				$context        = is_numeric( $index ) ? '' : $value;
				$css_prop       = empty( $context ) ? $value : $index;
				$rules_selector .= $this->transform( $css_prop, $context ) . "\n\t\t\t";
			}
			$rules_selector = trim( $rules_selector );
			if ( empty( $rules_selector ) ) {
				continue;
			}
			$rules .= sprintf( "\n%s{ \n%s \n}\n", $expanded_selectors, $rules_selector );
		}

		return $rules;
	}

}
