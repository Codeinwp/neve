<?php
/**
 * Tests for the CSS value validation of the appearance-update ability.
 *
 * @package neve
 */

use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Mods;

/**
 * Class TestNeveAppearanceUpdateFonts
 */
class TestNeveAppearanceUpdateFonts extends WP_UnitTestCase {

	const PAYLOAD = ';}body{background:lime}/*';

	const TOUCHED_MODS = array(
		'neve_body_font_family',
		'neve_headings_font_family',
		'neve_typeface_general',
		'neve_h2_typeface_general',
		'neve_button_typeface',
		'neve_button_appearance',
	);

	/**
	 * Previous current user id.
	 *
	 * @var int
	 */
	private int $previous_user;

	/**
	 * Previous global styles registry.
	 *
	 * @var WP_Styles|null
	 */
	private ?WP_Styles $previous_styles;

	/**
	 * Log in as an administrator.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_user   = get_current_user_id();
		$this->previous_styles = $GLOBALS['wp_styles'] ?? null;
		Mods::$no_cache        = true;

		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
	}

	/**
	 * Restore the replaced global state.
	 */
	public function tear_down(): void {
		wp_set_current_user( $this->previous_user );
		$GLOBALS['wp_styles'] = $this->previous_styles;
		Mods::$no_cache       = false;

		foreach ( self::TOUCHED_MODS as $mod ) {
			remove_theme_mod( $mod );
		}

		parent::tear_down();
	}

	/**
	 * Font weights outside the typography choices are rejected for every target; valid ones are saved.
	 */
	public function test_font_weights_accept_only_typography_choices(): void {
		$inputs = array(
			array( 'typography' => array( 'element' => array( 'target' => 'body', 'fontWeight' => '400' . self::PAYLOAD ) ) ),
			array( 'typography' => array( 'element' => array( 'target' => 'h2', 'fontWeight' => '700' . self::PAYLOAD ) ) ),
			array( 'buttons' => array( 'primary' => array( 'fontWeight' => '600' . self::PAYLOAD ) ) ),
		);

		foreach ( $inputs as $input ) {
			$this->assertInstanceOf( WP_Error::class, $this->run_ability( $input ) );
		}

		foreach ( array( 'neve_typeface_general', 'neve_h2_typeface_general', 'neve_button_typeface' ) as $mod ) {
			$this->assertFalse( get_theme_mod( $mod ) );
		}
		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );

		$result = $this->run_ability(
			array(
				'typography' => array( 'element' => array( 'target' => 'h2', 'fontWeight' => '700' ) ),
				'buttons'    => array( 'primary' => array( 'fontWeight' => '500' ) ),
			)
		);
		$this->assertIsArray( $result );
		$this->assertSame( '700', get_theme_mod( 'neve_h2_typeface_general' )['fontWeight'] );
		$this->assertSame( '500', get_theme_mod( 'neve_button_typeface' )['fontWeight'] );
	}

	/**
	 * Font families that could close their CSS declaration are rejected; valid ones are saved.
	 */
	public function test_font_families_accept_only_safe_names(): void {
		$this->assertInstanceOf( WP_Error::class, $this->run_ability( array( 'typography' => array( 'body_font' => 'Arial' . self::PAYLOAD ) ) ) );
		$this->assertInstanceOf( WP_Error::class, $this->run_ability( array( 'typography' => array( 'headings_font' => 'Arial' . self::PAYLOAD ) ) ) );

		$this->assertFalse( get_theme_mod( 'neve_body_font_family' ) );
		$this->assertFalse( get_theme_mod( 'neve_headings_font_family' ) );
		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );

		$result = $this->run_ability(
			array(
				'typography' => array(
					'body_font'     => 'Open Sans',
					'headings_font' => 'Arial, Helvetica, sans-serif',
				),
			)
		);
		$this->assertIsArray( $result );
		$this->assertSame( 'Open Sans', get_theme_mod( 'neve_body_font_family' ) );
		$this->assertSame( 'Arial, Helvetica, sans-serif', get_theme_mod( 'neve_headings_font_family' ) );
	}

	/**
	 * The typeface control's 'none' weight resets a weight and is saved.
	 */
	public function test_font_weight_none_is_saved(): void {
		$result = $this->run_ability(
			array(
				'typography' => array( 'element' => array( 'target' => 'body', 'fontWeight' => 'none' ) ),
				'buttons'    => array( 'primary' => array( 'fontWeight' => 'none' ) ),
			)
		);

		$this->assertIsArray( $result );
		$this->assertSame( 'none', get_theme_mod( 'neve_typeface_general' )['fontWeight'] );
		$this->assertSame( 'none', get_theme_mod( 'neve_button_typeface' )['fontWeight'] );
	}

	/**
	 * A font family that saving would escape into an entity with a semicolon is rejected.
	 */
	public function test_font_families_reject_text_escaped_to_entities(): void {
		$this->assertInstanceOf( WP_Error::class, $this->run_ability( array( 'typography' => array( 'body_font' => 'x<background:lime' ) ) ) );
		$this->assertInstanceOf( WP_Error::class, $this->run_ability( array( 'typography' => array( 'headings_font' => 'x<background:lime' ) ) ) );

		$this->assertFalse( get_theme_mod( 'neve_body_font_family' ) );
		$this->assertFalse( get_theme_mod( 'neve_headings_font_family' ) );
		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );
	}

	/**
	 * A button radius unit outside the CSS units is rejected; a valid one is saved.
	 */
	public function test_button_radius_unit_accepts_only_css_units(): void {
		$radius = array(
			'top'    => 3,
			'right'  => 3,
			'bottom' => 3,
			'left'   => 3,
		);

		$result = $this->run_ability( array( 'buttons' => array( 'primary' => array( 'radius' => $radius + array( 'unit' => 'px' . self::PAYLOAD ) ) ) ) );
		$this->assertInstanceOf( WP_Error::class, $result );
		$this->assertFalse( get_theme_mod( 'neve_button_appearance' ) );
		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );

		$result = $this->run_ability( array( 'buttons' => array( 'primary' => array( 'radius' => $radius + array( 'unit' => 'em' ) ) ) ) );
		$this->assertIsArray( $result );
		$this->assertSame( 'em', get_theme_mod( 'neve_button_appearance' )['borderRadius']['unit'] );
	}

	/**
	 * Run the ability through the Abilities API, which validates the input schema.
	 *
	 * @param array<string, mixed> $input Ability input.
	 *
	 * @return mixed
	 */
	private function run_ability( array $input ) {
		$ability = wp_get_ability( 'neve/appearance-update' );
		$this->assertInstanceOf( WP_Ability::class, $ability );

		return $ability->execute( $input );
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
