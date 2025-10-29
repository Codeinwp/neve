<?php
/**
 * Scroll To Top functionality
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Customizer\Options\Scroll_To_Top as Scroll_To_Top_Options;

/**
 * Class Scroll_To_Top
 *
 * @package Neve\Views
 */
class Scroll_To_Top extends Base_View {

	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		add_action( 'neve_after_primary', array( $this, 'render_button' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'neve_before_header_hook', array( $this, 'scroll_to_top_amp' ) );
	}

	/**
	 * Scroll to top amp observer.
	 * 
	 * @return void
	 */
	public function scroll_to_top_amp() {
		if ( ! Scroll_To_Top_Options::is_enabled() ) {
			return;
		}

		if ( ! neve_is_amp() ) {
			return;
		}

		echo '<amp-position-observer on="enter:hideAnim.start; exit:showAnim.start" layout="nodisplay"></amp-position-observer>';

		// We use 2 `amp-animation` elements to trigger the visibility of the button. The first one is for making the button visible
		echo '
		<amp-animation id="showAnim" layout="nodisplay">
		<script type="application/json">
		  {
		    "duration": "200ms",
		    "fill": "both",
		    "iterations": "1",
		    "direction": "alternate",
		    "animations": [
		      {
		        "selector": "#scroll-to-top",
		        "keyframes": [
		         { "opacity": "1", "visibility": "visible" }
		        ]
		      }
		    ]
		  }
		</script>
		</amp-animation>';

		echo '
		<!-- ... and the second one is for adding the button.-->
		<amp-animation id="hideAnim" layout="nodisplay">
		  <script type="application/json">
		    {
		      "duration": "200ms",
		      "fill": "both",
		      "iterations": "1",
		      "direction": "alternate",
		      "animations": [
		        {
		          "selector": "#scroll-to-top",
		          "keyframes": [
		            { "opacity": "0", "visibility": "hidden" }
		          ]
		        }
		      ]
		     }
		    </script>
		  </amp-animation>
		';
	}

	/**
	 * Enqueue module scripts
	 *
	 * @return void
	 */
	public function enqueue_scripts() {
		if ( ! Scroll_To_Top_Options::is_enabled() ) {
			return;
		}

		if ( neve_is_amp() ) {
			return;
		}

		wp_register_script( 
			'neve-scroll-to-top', 
			NEVE_ASSETS_URL . 'js/build/modern/scroll-to-top.js', 
			array(), 
			NEVE_VERSION, 
			true 
		);

		wp_enqueue_script( 'neve-scroll-to-top' );

		wp_script_add_data( 'neve-scroll-to-top', 'async', true );

		wp_localize_script( 'neve-scroll-to-top', 'neveScrollOffset', $this->localize_scroll() );
	}

	/**
	 * Send offset to the JS object
	 *
	 * @return array<string, mixed>
	 */
	private function localize_scroll() {
		return array(
			'offset' => get_theme_mod( 'neve_scroll_to_top_offset', 0 ),
		);
	}

	/**
	 * Display scroll to top button
	 * 
	 * @return void
	 */
	public function render_button() {
		if ( ! Scroll_To_Top_Options::is_enabled() ) {
			return;
		}

		$position       = get_theme_mod( 'neve_scroll_to_top_side', 'right' );
		$hide_on_mobile = get_theme_mod( 'neve_scroll_to_top_on_mobile', false );
		$type           = get_theme_mod( 'neve_scroll_to_top_type', 'icon' );
		$label          = get_theme_mod( 'neve_scroll_to_top_label' );
		$image          = get_theme_mod( 'neve_scroll_to_top_image' );
		$icon           = get_theme_mod( 'neve_scroll_to_top_icon', 'stt-icon-style-1' );

		$extra_class  = sprintf( 'scroll-to-top-%s %s', $position, ( ( ! $hide_on_mobile ) ? ' scroll-show-mobile ' : '' ) );
		$extra_class .= $type;

		$amp = neve_is_amp() ? 'on="tap:neve_body.scrollTo(duration=200)"' : '';

		echo '<button tabindex="0"' . esc_attr( $amp ) . ' id="scroll-to-top" class="scroll-to-top ' . esc_attr( $extra_class ) . '" aria-label="' . esc_attr__( 'Scroll to Top', 'neve' ) . '">';
		
		if ( $type === 'icon' ) {
			echo $this->get_icon_svg( $icon ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		
		if ( $type === 'image' && ! empty( $image ) ) {
			echo '<div class="scroll-to-top-image"></div>';
		}
		
		if ( ! empty( $label ) ) {
			echo '<p class="scroll-to-top-label">' . wp_kses_post( $label ) . '</p>';
		}
		
		if ( neve_is_amp() ) {
			echo '<amp-position-observer on="enter:hideAnim.start; exit:showAnim.start" layout="nodisplay"></amp-position-observer>';
		}
		
		echo '</button>';
	}

	/**
	 * Get SVG icon for scroll to top button.
	 *
	 * @param string $icon_style The icon style identifier.
	 * @return string SVG icon markup.
	 */
	private function get_icon_svg( $icon_style ) {
		$icons = array(
			'stt-icon-style-1' => '<svg class="scroll-to-top-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.354 2.354a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 4.207V13.5a.5.5 0 0 0 1 0V4.207l2.146 1.855a.5.5 0 0 0 .708-.708l-3-3z"/></svg>',
			'stt-icon-style-2' => '<svg class="scroll-to-top-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>',
			'stt-icon-style-3' => '<svg class="scroll-to-top-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" transform="rotate(-90 8 8)"/></svg>',
			'stt-icon-style-4' => '<svg class="scroll-to-top-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" transform="rotate(-90 8 8)"/></svg>',
			'stt-icon-style-5' => '<svg class="scroll-to-top-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5A.5.5 0 0 0 8 12z"/></svg>',
		);

		return isset( $icons[ $icon_style ] ) ? $icons[ $icon_style ] : $icons['stt-icon-style-1'];
	}
}
