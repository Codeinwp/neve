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
class TestNeveStyleManager extends NeveTestBase {

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
		$this->style_manager = new \Neve\Views\Inline\Style_Manager();
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
		$this->setUpThemeMods();

		$this->style_manager->maybe_enqueue();
		$css = $this->invokeMethod( $this->style_manager, 'get_style' );

		// Check CSS actually exists.
		$this->assertNotEmpty( $css );

		// Number of opening brackets match closing brackets.
		$this->assertTrue( substr_count( $css, '{' ) === substr_count( $css, '}' ) );

		$this->invokeMethod( $this->style_manager, 'get_style_version' );

		$mobile  = ( $this->invokeProp( $this->style_manager, 'style' ) );
		$tablet  = ( $this->invokeProp( $this->style_manager, 'tablet_style' ) );
		$desktop = ( $this->invokeProp( $this->style_manager, 'desktop_style' ) );

		// Start and end of strings should be valid
		$this->assertStringEndsWith( ';}', $mobile );
		$this->assertStringStartsNotWith( '@media', $mobile );

		$this->assertStringEndsWith( ';}}', $tablet );
		$this->assertStringStartsWith( '@media', $tablet );

		$this->assertStringEndsWith( ';}}', $desktop );
		$this->assertStringStartsWith( '@media', $desktop );

		$this->assertSame( $css, $mobile . $tablet . $desktop );
	}
}
