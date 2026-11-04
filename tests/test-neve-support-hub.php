<?php
/**
 * Tests for the metadata Neve hands to the Themeisle SDK Support Hub.
 *
 * @package neve
 */

/**
 * Class TestNeveSupportHub
 */
class TestNeveSupportHub extends WP_UnitTestCase {

	/**
	 * The filter returns the keys Neve opts into, and nothing else.
	 */
	public function test_metadata_has_the_agreed_keys() {
		$data = apply_filters( 'neve_support_hub_metadata', array() );

		$this->assertIsArray( $data );
		$this->assertSame( array( 'is_pro', 'links' ), array_keys( $data ) );
		$this->assertArrayNotHasKey( 'setup_complete', $data, 'The setup nudge stays off for now.' );
	}

	/**
	 * The footer links point to Neve's docs and wordpress.org forum.
	 */
	public function test_links_point_to_neve() {
		$links = apply_filters( 'neve_support_hub_metadata', array() )['links'];

		$this->assertSame(
			array(
				'https://docs.themeisle.com/neve/neve-doc',
				'https://wordpress.org/support/theme/neve/',
			),
			wp_list_pluck( $links, 'url' )
		);
		foreach ( $links as $link ) {
			$this->assertNotEmpty( $link['icon'] );
			$this->assertNotEmpty( $link['text'] );
		}
	}

	/**
	 * Messages are tagged as Pro only while Neve Pro is active with a valid license.
	 */
	public function test_is_pro_needs_a_valid_license() {
		add_filter( 'product_neve_license_status', array( $this, 'expired_license' ) );
		$this->assertFalse( apply_filters( 'neve_support_hub_metadata', array() )['is_pro'] );
		remove_filter( 'product_neve_license_status', array( $this, 'expired_license' ) );

		add_filter( 'product_neve_license_status', array( $this, 'valid_license' ) );
		$this->assertSame( defined( 'NEVE_PRO_VERSION' ), apply_filters( 'neve_support_hub_metadata', array() )['is_pro'] );
		remove_filter( 'product_neve_license_status', array( $this, 'valid_license' ) );
	}

	/**
	 * A white-labeled Neve shows no Themeisle Help button.
	 */
	public function test_white_label_hides_the_hub() {
		add_filter( 'neve_is_theme_whitelabeled', '__return_true' );
		$this->assertSame( array(), apply_filters( 'neve_support_hub_metadata', array() ) );
		remove_filter( 'neve_is_theme_whitelabeled', '__return_true' );

		add_filter( 'neve_is_plugin_whitelabeled', '__return_true' );
		$this->assertSame( array(), apply_filters( 'neve_support_hub_metadata', array() ) );
		remove_filter( 'neve_is_plugin_whitelabeled', '__return_true' );
	}

	/**
	 * Reports a valid license.
	 *
	 * @return string
	 */
	public function valid_license() {
		return 'valid';
	}

	/**
	 * Reports an expired license.
	 *
	 * @return string
	 */
	public function expired_license() {
		return 'expired';
	}
}
