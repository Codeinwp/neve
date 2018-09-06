<?php
/**
 * Elementor Meta import handler.
 *
 * This is needed because by default, the importer breaks our JSON meta.
 *
 * @package    themeisle-onboarding
 * @soundtrack All Apologies (Live) - Nirvana
 */

/**
 * Class Themeisle_OB_Elementor_Meta_Handler
 *
 * @package ThemeIsle
 */
class Themeisle_OB_Elementor_Meta_Handler {
	/**
	 * Elementor meta key.
	 *
	 * @var string
	 */
	private $meta_key = '_elementor_data';

	/**
	 * Meta value.
	 *
	 * @var null
	 */
	private $value = null;

	/**
	 * Themeisle_OB_Elementor_Meta_Handler constructor.
	 *
	 * @param string $unfiltered_value the unfiltered meta value.
	 */
	public function __construct( $unfiltered_value ) {
		$this->value = $unfiltered_value;
	}

	/**
	 * Filter the meta to allow escaped JSON values.
	 */
	public function filter_meta() {
		add_filter( 'sanitize_post_meta_' . $this->meta_key, array( $this, 'allow_escaped_json_meta' ), 10, 3 );
	}

	/**
	 * Allow JSON escaping.
	 *
	 * @param string $val  meta value.
	 * @param string $key  meta key.
	 * @param string $type meta type.
	 *
	 * @return array|string
	 */
	public function allow_escaped_json_meta( $val, $key, $type ) {
		if ( empty( $this->value ) ) {
			return $val;
		}

		return $this->value;
	}
}
