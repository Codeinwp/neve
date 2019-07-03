<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/10/2018
 *
 * @package neve
 */

/**
 * Class TestNeveStyleManager
 */
class TestNeveStyleManager extends WP_UnitTestCase {

	/**
	 * Style manager
	 *
	 * @var \Neve\Views\Inline\Style_Manager
	 */
	protected $style_manager;

	/**
	 * Set up for test.
	 */
	public function setUp() {
		$this->style_manager = new \Neve\Views\Inline\Front_End_Style_Manager();
		$this->setUpThemeMods();
	}

	/**
	 * Set up theme mods.
	 */
	private function setUpThemeMods() {
		set_theme_mod( 'neve_theme_color', '#bada55' );
		$font_size_setup = json_encode(
			array(
				'desktop' => '20',
				'tablet'  => '14',
				'mobile'  => '14',
			)
		);
		set_theme_mod( 'neve_body_font_size', $font_size_setup );
	}

	/**
	 * Test inline style building.
	 */
	public function testInlineStyleBuilding() {
		$this->style_manager->maybe_enqueue();
		$css = $this->style_manager->get_style();

		// Check CSS actually exists.
		$this->assertNotEmpty( $css );

		// Number of opening brackets match closing brackets.
		$this->assertTrue( substr_count( $css, '{' ) === substr_count( $css, '}' ) );

		$mobile  = $this->style_manager->get_single_style();
		$tablet  = $this->style_manager->get_single_style( 'tablet' );
		$desktop = $this->style_manager->get_single_style( 'desktop' );

		// Start and end of strings should be valid
		$this->assertStringEndsWith( ';}', $mobile );
		$this->assertStringStartsNotWith( '@media', $mobile );

		$this->assertStringEndsWith( ';}}', $tablet );
		$this->assertStringStartsWith( '@media', $tablet );

		$this->assertStringEndsWith( ';}}', $desktop );
		$this->assertStringStartsWith( '@media', $desktop );

		$this->stringContains( $css, $mobile . $tablet . $desktop );
	}
}
