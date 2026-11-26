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
	 * Blank sides must render as 0 so the shorthand stays valid.
	 *
	 * @dataProvider blank_sides_provider
	 *
	 * @param array  $sides    Desktop sides keyed top, right, bottom, left.
	 * @param string $unit     Desktop unit.
	 * @param string $expected Expected declaration.
	 */
	public function test_blank_sides_render_as_zero( array $sides, string $unit, string $expected ): void {
		$this->set_desktop_padding( $sides, $unit );

		$this->assertStringContainsString( $expected, $this->get_frontend_css() );
	}

	/**
	 * Partly filled desktop padding values.
	 *
	 * @return array<string, array{0: array<string, string>, 1: string, 2: string}>
	 */
	public function blank_sides_provider(): array {
		return [
			'bottom only'      => [ [ 'top' => '', 'right' => '', 'bottom' => '50', 'left' => '' ], 'px', '.nv-index-posts{ --padding:0px 0px 50px 0px; }' ],
			'top only'         => [ [ 'top' => '10', 'right' => '', 'bottom' => '', 'left' => '' ], 'px', '.nv-index-posts{ --padding:10px 0px 0px 0px; }' ],
			'decimal in rem'   => [ [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '1.5' ], 'rem', '.nv-index-posts{ --padding:0rem 0rem 0rem 1.5rem; }' ],
		];
	}

	/**
	 * Store a desktop-only padding value in the blog content padding setting.
	 *
	 * @param array<string, string> $sides Desktop sides keyed top, right, bottom, left.
	 * @param string                $unit  Desktop unit.
	 */
	private function set_desktop_padding( array $sides, string $unit ): void {
		$blank = [
			'top'    => '',
			'right'  => '',
			'bottom' => '',
			'left'   => '',
		];

		set_theme_mod(
			'neve_blog_content_padding',
			[
				'desktop'      => $sides,
				'tablet'       => $blank,
				'mobile'       => $blank,
				'desktop-unit' => $unit,
				'tablet-unit'  => 'px',
				'mobile-unit'  => 'px',
			]
		);
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
