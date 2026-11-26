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

	/**
	 * A blank or missing side of a directional value is 0, so the other sides keep their position.
	 *
	 * @dataProvider directional_blank_sides_provider
	 *
	 * @param array  $sides    Desktop sides; absent keys are missing.
	 * @param string $expected Expected declaration.
	 */
	public function test_directional_prop_blank_sides_are_zero( array $sides, $expected ) {
		$blank = [
			'top'    => '',
			'right'  => '',
			'bottom' => '',
			'left'   => '',
		];
		set_theme_mod(
			'mod_directional_padding',
			[
				'desktop'      => $sides,
				'tablet'       => $blank,
				'mobile'       => $blank,
				'desktop-unit' => 'px',
				'tablet-unit'  => 'px',
				'mobile-unit'  => 'px',
			]
		);

		$subscriber = new \Neve\Core\Styles\Dynamic_Selector(
			[
				'.test-selector' => [
					'--test-padding' => [
						'key'              => 'mod_directional_padding',
						'is_responsive'    => true,
						'directional-prop' => \Neve\Core\Settings\Config::CSS_PROP_PADDING,
						'suffix'           => 'responsive_unit',
					],
				],
			]
		);

		\Neve\Core\Settings\Mods::$no_cache = true;
		$css                                  = '' . $subscriber->for_desktop();
		\Neve\Core\Settings\Mods::$no_cache = false;

		$this->assertStringContainsString( $expected, $css );
	}

	/**
	 * Partly filled directional values.
	 *
	 * @return array<string, array{0: array<string, string>, 1: string}>
	 */
	public function directional_blank_sides_provider() {
		return [
			'blank top and bottom'   => [
				[
					'top'    => '',
					'right'  => '50',
					'bottom' => '',
					'left'   => '50',
				],
				'--test-padding:0 50px;',
			],
			'only one side is set'   => [ [ 'top' => '50' ], '--test-padding:50px 0 0 0;' ],
		];
	}

	/**
	 * Outline button padding keeps blank sides at 0 and gives every nonzero side its unit.
	 *
	 * @dataProvider outline_button_padding_provider
	 *
	 * @param array  $padding   Desktop button padding sides.
	 * @param int    $top_width Top border width of the secondary (outline) button.
	 * @param string $expected  Expected declaration.
	 */
	public function test_outline_button_padding_sides( array $padding, $top_width, $expected ) {
		$blank      = [
			'top'    => '',
			'right'  => '',
			'bottom' => '',
			'left'   => '',
		];
		$appearance = neve_get_button_appearance_default( 'secondary' );

		$appearance['borderWidth']['top'] = $top_width;
		set_theme_mod( 'neve_secondary_button_appearance', $appearance );
		set_theme_mod(
			'neve_button_padding',
			[
				'desktop'      => $padding,
				'tablet'       => $blank,
				'mobile'       => $blank,
				'desktop-unit' => 'px',
				'tablet-unit'  => 'px',
				'mobile-unit'  => 'px',
			]
		);

		$previous_styles       = isset( $GLOBALS['wp_styles'] ) ? $GLOBALS['wp_styles'] : null;
		$GLOBALS['wp_styles']  = new WP_Styles();
		\Neve\Core\Settings\Mods::$no_cache = true;
		wp_register_style( \Neve\Core\Dynamic_Css::FRONTEND_HANDLE, false );
		( new \Neve\Core\Dynamic_Css() )->enqueue();
		$css = implode( '', (array) wp_styles()->get_data( \Neve\Core\Dynamic_Css::FRONTEND_HANDLE, 'after' ) );
		\Neve\Core\Settings\Mods::$no_cache = false;
		$GLOBALS['wp_styles']  = $previous_styles;

		$this->assertStringContainsString( $expected, $css );
	}

	/**
	 * Outline button padding cases.
	 *
	 * @return array<string, array{0: array<string, string>, 1: int, 2: string}>
	 */
	public function outline_button_padding_provider() {
		return [
			'bottom only'           => [
				[
					'top'    => '',
					'right'  => '',
					'bottom' => '50',
					'left'   => '',
				],
				3,
				'--secondarybtnpadding:0 0 calc(50px - 3px) 0;',
			],
			'sides without border'  => [
				[
					'top'    => '10',
					'right'  => '10',
					'bottom' => '10',
					'left'   => '10',
				],
				0,
				'--secondarybtnpadding:10px calc(10px - 3px) calc(10px - 3px) calc(10px - 3px);',
			],
		];
	}
}
