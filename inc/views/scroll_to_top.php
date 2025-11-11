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

		echo '<button tabindex="0"' . esc_attr( $amp ) . ' id="scroll-to-top" class="scroll-to-top ' . esc_attr( $extra_class ) . '" aria-label="' . esc_attr__( 'Scroll To Top', 'neve' ) . '">';
		
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
			'stt-icon-style-1' => '<svg class="scroll-to-top-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="15" height="15" fill="none"/><path fill="currentColor" d="M2,8.48l-.65-.65a.71.71,0,0,1,0-1L7,1.14a.72.72,0,0,1,1,0l5.69,5.7a.71.71,0,0,1,0,1L13,8.48a.71.71,0,0,1-1,0L8.67,4.94v8.42a.7.7,0,0,1-.7.7H7a.7.7,0,0,1-.7-.7V4.94L3,8.47a.7.7,0,0,1-1,0Z"/></svg>',
			'stt-icon-style-2' => '<svg class="scroll-to-top-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="15" height="15" fill="none"/><path fill="currentColor" d="M14,12a1,1,0,0,1-.73-.32L7.5,5.47,1.76,11.65a1,1,0,0,1-1.4,0A1,1,0,0,1,.3,10.3l6.47-7a1,1,0,0,1,1.46,0l6.47,7a1,1,0,0,1-.06,1.4A1,1,0,0,1,14,12Z"/></svg>',
			'stt-icon-style-3' => '<svg class="scroll-to-top-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="15" height="15" fill="none"/><path fill="currentColor" d="M14.71,10.3l-6.48-7a1,1,0,0,0-1.46,0l-6.48,7A1,1,0,0,0,1,12H14a1,1,0,0,0,.73-1.68Z"/></svg>',
			'stt-icon-style-4' => '<svg class="scroll-to-top-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="15" height="15" fill="none"/><path fill="currentColor" d="M13,15a1,1,0,0,1-.74-.32L7.5,9.46l-4.76,5.2A1,1,0,1,1,1.26,13.3l5.5-6a1,1,0,0,1,1.48,0l5.5,6a1,1,0,0,1-.06,1.42A1.05,1.05,0,0,1,13,15Z"/><path fill="currentColor" d="M13,8a1,1,0,0,1-.74-.33L7.5,2.49,2.74,7.68A1,1,0,0,1,1.26,6.33l5.5-6a1,1,0,0,1,1.48,0l5.5,6A1,1,0,0,1,13,8Z"/></svg>',
			'stt-icon-style-5' => '<svg class="scroll-to-top-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="15" height="15" fill="none"/><path fill="currentColor" d="M2,10.91l-.65-.65a.69.69,0,0,1,0-1L7,3.57a.72.72,0,0,1,1,0l5.69,5.7a.71.71,0,0,1,0,1l-.65.65a.71.71,0,0,1-1,0L8.67,7.37v6.56a.7.7,0,0,1-.7.7H7a.7.7,0,0,1-.7-.7V7.37L3,10.9A.69.69,0,0,1,2,10.91Z"/><rect fill="currentColor" x="1" y="0.37" width="13" height="2" rx="0.4"/></svg>',
			'stt-icon-style-6' => '<svg class="scroll-to-top-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><rect width="15" height="15" fill="none"/><path fill="currentColor" d="M7.86,1.93l5.83,10.2a.8.8,0,0,1-1.08,1.1L8,10.65a.83.83,0,0,0-.78,0L2.39,13.36a.79.79,0,0,1-1.1-1L6.45,2A.8.8,0,0,1,7.86,1.93Z"/></svg>',
		);

		return isset( $icons[ $icon_style ] ) ? $icons[ $icon_style ] : $icons['stt-icon-style-1'];
	}
}
