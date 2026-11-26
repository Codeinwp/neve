<?php
/**
 * Tests the CSS generated for the blog content padding setting.
 *
 * @package neve
 */

use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Mods;

/**
 * Class TestNeveBlogContentPadding
 */
class TestNeveBlogContentPadding extends WP_UnitTestCase {

	/**
	 * Previous global styles registry.
	 *
	 * @var WP_Styles|null
	 */
	private ?WP_Styles $previous_styles;

	/**
	 * Disable the Mods cache so each test reads its own theme mod.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_styles = $GLOBALS['wp_styles'] ?? null;
		Mods::$no_cache        = true;
	}

	/**
	 * Restore the replaced global state.
	 */
	public function tear_down(): void {
		remove_theme_mod( 'neve_blog_content_padding' );
		Mods::$no_cache = false;

		if ( $this->previous_styles instanceof WP_Styles ) {
			$GLOBALS['wp_styles'] = $this->previous_styles;
		} else {
			unset( $GLOBALS['wp_styles'] );
		}

		parent::tear_down();
	}

	/**
	 * Blank or missing sides must render as 0 so the shorthand stays valid.
	 *
	 * @dataProvider blank_sides_provider
	 *
	 * @param string                $device   Device that holds the value.
	 * @param array<string, string> $sides    Sides keyed top, right, bottom, left; absent keys are missing.
	 * @param string                $unit     Unit of that device.
	 * @param string                $expected Expected declaration.
	 */
	public function test_blank_sides_render_as_zero( string $device, array $sides, string $unit, string $expected ): void {
		$this->set_padding( $device, $sides, $unit );

		$this->assertStringContainsString( $expected, $this->get_frontend_css() );
	}

	/**
	 * Partly filled padding values.
	 *
	 * @return array<string, array{0: string, 1: array<string, string>, 2: string, 3: string}>
	 */
	public function blank_sides_provider(): array {
		return [
			'bottom only'     => [ 'desktop', [ 'top' => '', 'right' => '', 'bottom' => '50', 'left' => '' ], 'px', '.nv-index-posts{ --padding:0px 0px 50px 0px; }' ],
			'top only'        => [ 'desktop', [ 'top' => '10', 'right' => '', 'bottom' => '', 'left' => '' ], 'px', '.nv-index-posts{ --padding:10px 0px 0px 0px; }' ],
			'decimal in rem'  => [ 'desktop', [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '1.5' ], 'rem', '.nv-index-posts{ --padding:0rem 0rem 0rem 1.5rem; }' ],
			'missing sides'   => [ 'desktop', [ 'bottom' => '50' ], 'px', '.nv-index-posts{ --padding:0px 0px 50px 0px; }' ],
			'tablet in em'    => [ 'tablet', [ 'top' => '', 'right' => '', 'bottom' => '2', 'left' => '' ], 'em', '.nv-index-posts{ --padding:0em 0em 2em 0em; }' ],
		];
	}

	/**
	 * Store a padding value for one device, leaving the other devices blank.
	 *
	 * @param string                $device Device that holds the value: desktop, tablet or mobile.
	 * @param array<string, string> $sides  Sides keyed top, right, bottom, left.
	 * @param string                $unit   Unit of that device.
	 */
	private function set_padding( string $device, array $sides, string $unit ): void {
		$value = [
			'desktop'      => [],
			'tablet'       => [],
			'mobile'       => [],
			'desktop-unit' => 'px',
			'tablet-unit'  => 'px',
			'mobile-unit'  => 'px',
		];

		foreach ( [ 'desktop', 'tablet', 'mobile' ] as $name ) {
			$value[ $name ] = [
				'top'    => '',
				'right'  => '',
				'bottom' => '',
				'left'   => '',
			];
		}

		$value[ $device ]           = $sides;
		$value[ $device . '-unit' ] = $unit;

		set_theme_mod( 'neve_blog_content_padding', $value );
	}

	/**
	 * Build the frontend inline CSS.
	 *
	 * @return string
	 */
	private function get_frontend_css(): string {
		$GLOBALS['wp_styles'] = new WP_Styles();
		wp_register_style( Dynamic_Css::FRONTEND_HANDLE, false );

		( new Dynamic_Css() )->enqueue();

		return implode( '', (array) wp_styles()->get_data( Dynamic_Css::FRONTEND_HANDLE, 'after' ) );
	}
}
