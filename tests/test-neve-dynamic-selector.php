<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/10/2018
 *
 * @package neve
 */


/**
 * Class TestDynamicSelector
 */
class TestDynamicSelector extends WP_UnitTestCase {

	public function test_css_generation_with_empty_value() {
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => 'test-mod'
			]
		] );
		$css        = '';
		$css        .= $subscriber;
		$this->assertEmpty( $css );
	}

	public function test_css_generation_with_color() {
		set_theme_mod( 'sample-color', '#ccc' );
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => 'sample-color'
			]
		] );
		$css        = '';
		$css        .= $subscriber;
		$this->assertNotEmpty( $css );
		$this->assertStringContainsString( "#ccc", $css );
	}

	public function test_css_generation_with_generic_rule() {
		set_theme_mod( 'sample-color', '#ccc' );
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				'--css-var-example' => 'sample-color'
			]
		] );
		$css        = '';
		$css        .= $subscriber;
		$this->assertStringContainsString('--css-var-example', $css);
		$this->assertNotEmpty( $css );
	}

	public function test_css_generation_with_value_override() {
		set_theme_mod( 'overridden-color', '#bada55' );
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => [
					'key'      => 'overridden-color',
					'override' => 'var(--nv-text-color)'
				]
			]
		] );

		$css        = '';
		$css        .= $subscriber;

		$this->assertNotEmpty( $css );
		$this->assertStringNotContainsString( "#bada55", $css );
		$this->assertStringContainsString( "var(--nv-text-color)", $css );
	}

	public function test_css_generation_with_key() {
		set_theme_mod( 'sample-color2', '#eee' );
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => [
					'key' => 'sample-color2'
				]
			]
		] );
		$css        = '';
		$css        .= $subscriber;

		$this->assertNotEmpty( $css );
		$this->assertStringContainsString( "#eee", $css );
	}

	public function test_css_generation_with_suffix() {
		set_theme_mod( 'mod_max_size', '333' );
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'    => 'mod_max_size',
					'suffix' => 'em'
				]
			]
		] );
		$css        = '';
		$css        .= $subscriber;

		$this->assertNotEmpty( $css );
		$this->assertStringContainsString( "333em", $css );
	}

	public function test_css_generation_with_default() {
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'     => 'mod_max_size2',
					'default' => '929'
				]
			]
		] );
		$css        = '';
		$css        .= $subscriber;
		$this->assertNotEmpty( $css );
		$this->assertStringContainsString( "929", $css );
	}

	public function test_css_generation_with_filter() {

		set_theme_mod( 'mod_max_size9', '333' );
		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'    => 'mod_max_size9',
					'filter' => function ( $css_prop, $value, $meta, $device ) {
						return 'box-shadow: ' . $value . 'px;';
					}
				]
			]
		] );
		$css        = '';
		$css        .= $subscriber;
		$this->assertNotEmpty( $css );
		$this->assertStringContainsString( "box-shadow: 333px;", $css );
	}

	public function test_css_generation_on_breakpoints() {
		$subscriber  = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'     => 'mod_max_size22',
					'default' => '929'
				]
			]
		] );
		$mobile_css  = '' . $subscriber;
		$desktop_css = '' . $subscriber->for_desktop();
		$tablet_css  = '' . $subscriber->for_tablet();

		$this->assertNotEmpty( $mobile_css );
		$this->assertStringContainsString( "929", $mobile_css );
		$this->assertEmpty( $desktop_css );
		$this->assertEmpty( $tablet_css );
	}

	public function test_css_generation_with_responsive() {

		set_theme_mod( 'mod_max_size10', [
			'mobile'  => 10,
			'desktop' => 50,
			'tablet'  => 300
		] );
		$subscriber  = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'           => 'mod_max_size10',
					'is_responsive' => true
				]
			]
		] );
		$mobile_css  = '' . $subscriber;
		$desktop_css = '' . $subscriber->for_desktop();
		$tablet_css  = '' . $subscriber->for_tablet();
		$this->assertStringContainsString( "10px;", $mobile_css );
		$this->assertStringContainsString( "50px;", $desktop_css );
		$this->assertStringContainsString( "300px;", $tablet_css );
	}

	public function test_css_generation_with_responsiveness_encoded() {
		set_theme_mod( 'mod_max_size13', json_encode( [
			'mobile'  => 10,
			'desktop' => 50,
			'tablet'  => 300
		] ) );
		$subscriber  = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'           => 'mod_max_size13',
					'is_responsive' => true
				]
			]
		] );
		$mobile_css  = '' . $subscriber;
		$desktop_css = '' . $subscriber->for_desktop();
		$tablet_css  = '' . $subscriber->for_tablet();
		$this->assertStringContainsString( "10px;", $mobile_css );
		$this->assertStringContainsString( "50px;", $desktop_css );
		$this->assertStringContainsString( "300px;", $tablet_css );
	}

	public function test_css_generation_with_responsiveness_no_devices() {
		set_theme_mod( 'mod_max_size40', 200 );
		$subscriber  = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'           => 'mod_max_size40',
					'is_responsive' => true
				]
			]
		] );
		$mobile_css  = '' . $subscriber;
		$desktop_css = '' . $subscriber->for_desktop();
		$tablet_css  = '' . $subscriber->for_tablet();
		$this->assertStringContainsString( "200px;", $mobile_css );
		$this->assertStringContainsString( "200px;", $desktop_css );
		$this->assertStringContainsString( "200px;", $tablet_css );
	}

	public function test_css_generation_responsiveness_with_subkey() {
		set_theme_mod( 'mod_max_size1022', [
			'subkey' => [
				'mobile'  => 555,
				'desktop' => 666,
				'tablet'  => 777
			]
		] );
		$subscriber  = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					'key'           => 'mod_max_size1022.subkey',
					'is_responsive' => true
				]
			]
		] );
		$mobile_css  = '' . $subscriber;
		$desktop_css = '' . $subscriber->for_desktop();
		$tablet_css  = '' . $subscriber->for_tablet();
		$this->assertStringContainsString( "555px;", $mobile_css );
		$this->assertStringContainsString( "666px;", $desktop_css );
		$this->assertStringContainsString( "777px;", $tablet_css );
	}

	public function test_css_generation_responsiveness_with_subkey_with_suffix() {
		set_theme_mod( 'mod_max_size1022222', [
			'subkey' => [
				'mobile'  => 555,
				'desktop' => 666,
				'tablet'  => 777,
				'suffix'  => [
					'mobile'  => 'em',
					'desktop' => '%',
					'tablet'  => 'px'
				]
			]
		] );
		$subscriber  = new \Neve\Core\Styles\Dynamic_Selector( [
			'.test-selector' => [
				\Neve\Core\Settings\Config::CSS_PROP_LINE_HEIGHT => [
					'key'           => 'mod_max_size1022222.subkey',
					'is_responsive' => true
				]
			]
		] );
		$mobile_css  = '' . $subscriber;
		$desktop_css = '' . $subscriber->for_desktop();
		$tablet_css  = '' . $subscriber->for_tablet();
		$this->assertStringContainsString( "555em;", $mobile_css );
		$this->assertStringContainsString( "666%;", $desktop_css );
		$this->assertStringContainsString( "777px;", $tablet_css );
	}

	public function test_css_generation_with_extra_selectors() {
		set_theme_mod( 'mod_color_one', '#fff' );
		add_filter( 'neve_selectors_' . \Neve\Core\Settings\Config::CSS_SELECTOR_BTN_PRIMARY_HOVER, function ( $selectors ) {
			return $selectors . ',.one-test-selector';
		} );

		$subscriber = new \Neve\Core\Styles\Dynamic_Selector( [
			\Neve\Core\Settings\Config::CSS_SELECTOR_BTN_PRIMARY_HOVER => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => [
					'key' => 'mod_color_one'
				]
			]
		] );
		$css        = '' . $subscriber;

		$this->assertStringContainsString( ",.one-test-selector", $css );
		$this->assertStringNotContainsString( \Neve\Core\Settings\Config::CSS_SELECTOR_BTN_PRIMARY_HOVER, $css );
		$this->assertStringContainsString( \Neve\Core\Settings\Config::$css_selectors_map[\Neve\Core\Settings\Config::CSS_SELECTOR_BTN_PRIMARY_HOVER], $css );
		$this->assertStringContainsString( "color: #fff", $css );
	}
}
