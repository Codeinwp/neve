<?php
/**
 * Regression coverage for malformed responsive container widths.
 *
 * @package Neve
 */
class Test_Neve_Container_Width extends WP_UnitTestCase {
	/** @dataProvider width_values */
	public function test_single_post_inner_width( $width, $device, $expected ) {
		\Neve\Core\Settings\Mods::$no_cache = true;
		set_theme_mod( \Neve\Core\Settings\Config::MODS_ADVANCED_LAYOUT_OPTIONS, true );
		set_theme_mod( \Neve\Core\Settings\Config::MODS_CONTAINER_WIDTH, wp_json_encode( $width ) );
		$frontend = ( new ReflectionClass( '\Neve\Core\Styles\Frontend' ) )->newInstanceWithoutConstructor();
		$frontend->setup_layout_subscribers();
		$subscribers = $frontend->get();
		$selector = '.single-post-container .alignfull > [class*="__inner-container"], .single-post-container .alignwide > [class*="__inner-container"]';
		$filter = $subscribers[ $selector ][ \Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH ][ \Neve\Core\Styles\Dynamic_Selector::META_FILTER ];
		$this->assertSame( $expected, $filter( 'max-width', 70, array(), $device ) );
		\Neve\Core\Settings\Mods::$no_cache = false;
	}

	public function width_values() {
		return array(
			'empty mobile' => array( array( 'mobile' => '' ), 'mobile', '' ),
			'css unit' => array( array( 'mobile' => '100%' ), 'mobile', '' ),
			'missing device' => array( array(), 'tablet', '' ),
			'boolean device' => array( array( 'desktop' => false ), 'desktop', '' ),
			'numeric mobile' => array( array( 'mobile' => '320' ), 'mobile', 'max-width:290px' ),
			'numeric desktop' => array( array( 'desktop' => 1200 ), 'desktop', 'max-width:810px' ),
		);
	}
}
