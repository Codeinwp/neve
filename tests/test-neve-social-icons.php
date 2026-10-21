<?php
/**
 * Tests for the free Social Icons HFG component.
 *
 * @package neve
 */

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Components\Abstract_Component;
use HFG\Core\Components\SocialIcons;
use HFG\Core\Components\SocialIconsFooter;
use HFG\Main;
use Neve\Core\Settings\Mods;

/**
 * Class TestNeveSocialIcons
 */
class TestNeveSocialIcons extends WP_UnitTestCase {

	/**
	 * Previous builder static state.
	 *
	 * @var array
	 */
	private $previous_state = array();

	/**
	 * Store the static render state.
	 */
	public function set_up() {
		parent::set_up();

		$this->previous_state = array(
			'builder'           => Abstract_Builder::$current_builder,
			'builder_component' => Abstract_Builder::$current_component,
			'current_component' => Abstract_Component::$current_component,
		);
	}

	/**
	 * Restore the static render state and the stored values.
	 */
	public function tear_down() {
		Abstract_Builder::$current_builder     = $this->previous_state['builder'];
		Abstract_Builder::$current_component   = $this->previous_state['builder_component'];
		Abstract_Component::$current_component = $this->previous_state['current_component'];

		Mods::set( SocialIcons::COMPONENT_ID . '_' . SocialIcons::LINKS_ID, SocialIcons::get_default_links() );
		Mods::set( SocialIcons::COMPONENT_ID . '_' . SocialIcons::NEW_TAB_ID, 1 );

		parent::tear_down();
	}

	/**
	 * Render the header component with the given values.
	 *
	 * @param array $links   Links to store.
	 * @param int   $new_tab Open in a new tab.
	 *
	 * @return string
	 */
	private function render_header_component( $links, $new_tab = 1 ) {
		Mods::set( SocialIcons::COMPONENT_ID . '_' . SocialIcons::LINKS_ID, wp_json_encode( $links ) );
		Mods::set( SocialIcons::COMPONENT_ID . '_' . SocialIcons::NEW_TAB_ID, $new_tab );

		Abstract_Builder::$current_builder   = 'header';
		Abstract_Builder::$current_component = SocialIcons::COMPONENT_ID;

		$component = Main::get_instance()->get_builder( 'header' )->get_component( SocialIcons::COMPONENT_ID );
		$this->assertInstanceOf( SocialIcons::class, $component );

		ob_start();
		$component->render_component();

		return ob_get_clean();
	}

	/**
	 * The component is available in both builders without a Pro license.
	 */
	public function test_component_is_registered_in_header_and_footer() {
		$this->assertInstanceOf( SocialIcons::class, Main::get_instance()->get_builder( 'header' )->get_component( SocialIcons::COMPONENT_ID ) );
		$this->assertInstanceOf( SocialIconsFooter::class, Main::get_instance()->get_builder( 'footer' )->get_component( SocialIconsFooter::COMPONENT_ID ) );
	}

	/**
	 * The network list comes from core and the defaults use known networks.
	 */
	public function test_networks_come_from_core() {
		$networks = SocialIcons::get_networks();

		$this->assertArrayHasKey( 'facebook', $networks );
		$this->assertArrayHasKey( 'instagram', $networks );

		foreach ( json_decode( SocialIcons::get_default_links(), true ) as $item ) {
			$this->assertArrayHasKey( $item['network'], block_core_social_link_services() );
		}
	}

	/**
	 * The sanitizer keeps valid items and cleans each property.
	 */
	public function test_sanitize_cleans_items() {
		$input = wp_json_encode(
			array(
				array(
					'title'      => '<b>Facebook</b>',
					'network'    => 'facebook',
					'url'        => 'https://facebook.com/neve',
					'visibility' => 'maybe',
					'__kbKey'    => 'kb-1',
					'extra'      => 'drop me',
				),
				array(
					'title'   => 'Bad network',
					'network' => 'not-a-network',
					'url'     => 'https://example.com',
				),
				array(
					'title'      => 'Script',
					'network'    => 'instagram',
					'url'        => 'javascript:alert(1)',
					'visibility' => 'no',
				),
				'not an item',
			)
		);

		$result = json_decode( neve_sanitize_social_icons( $input ), true );

		$this->assertCount( 2, $result );
		$this->assertSame(
			array(
				'title'      => 'Facebook',
				'network'    => 'facebook',
				'url'        => 'https://facebook.com/neve',
				'visibility' => 'yes',
				'__kbKey'    => 'kb-1',
			),
			$result[0]
		);
		$this->assertSame( 'instagram', $result[1]['network'] );
		$this->assertSame( '', $result[1]['url'] );
		$this->assertSame( 'no', $result[1]['visibility'] );
	}

	/**
	 * Invalid input is saved as an empty list.
	 */
	public function test_sanitize_invalid_input_returns_empty_list() {
		$this->assertSame( '[]', neve_sanitize_social_icons( 'not json' ) );
		$this->assertSame( '[]', neve_sanitize_social_icons( '' ) );
	}

	/**
	 * Visible items with a link are rendered, the others are skipped.
	 */
	public function test_render_outputs_visible_links() {
		$output = $this->render_header_component(
			array(
				array(
					'title'      => 'Our Facebook',
					'network'    => 'facebook',
					'url'        => 'https://facebook.com/neve',
					'visibility' => 'yes',
				),
				array(
					'title'      => '',
					'network'    => 'instagram',
					'url'        => 'https://instagram.com/neve',
					'visibility' => 'yes',
				),
				array(
					'title'      => 'Hidden',
					'network'    => 'youtube',
					'url'        => 'https://youtube.com/neve',
					'visibility' => 'no',
				),
				array(
					'title'      => 'No link',
					'network'    => 'linkedin',
					'url'        => '',
					'visibility' => 'yes',
				),
			)
		);

		$this->assertStringContainsString( 'class="nv-social-icons"', $output );
		$this->assertSame( 2, substr_count( $output, '<li>' ) );
		$this->assertStringContainsString( 'href="https://facebook.com/neve"', $output );
		$this->assertStringContainsString( 'Our Facebook (opens in a new tab)', $output );
		$this->assertStringContainsString( block_core_social_link_get_name( 'instagram' ) . ' (opens in a new tab)', $output );
		$this->assertStringContainsString( 'target="_blank" rel="noopener noreferrer"', $output );
		$this->assertStringContainsString( '<svg', $output );
		$this->assertStringNotContainsString( 'youtube.com', $output );
		$this->assertStringNotContainsString( 'No link', $output );
	}

	/**
	 * Without the new tab option the links open in the same tab.
	 */
	public function test_render_without_new_tab() {
		$output = $this->render_header_component(
			array(
				array(
					'title'      => 'Facebook',
					'network'    => 'facebook',
					'url'        => 'https://facebook.com/neve',
					'visibility' => 'yes',
				),
			),
			0
		);

		$this->assertStringNotContainsString( 'target="_blank"', $output );
		$this->assertStringNotContainsString( 'opens in a new tab', $output );
	}

	/**
	 * Nothing is rendered when there is no link to show.
	 */
	public function test_render_empty_list_outputs_nothing() {
		$this->assertSame( '', trim( $this->render_header_component( array() ) ) );
	}
}
