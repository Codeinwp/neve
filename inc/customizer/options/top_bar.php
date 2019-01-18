<?php
/**
 * Container layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Partial;
use Neve\Customizer\Types\Section;
use Neve\Views\Top_Bar as Top_Bar_View;

/**
 * Class Top_Bar
 *
 * @package Neve\Customizer\Options
 */
class Top_Bar extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_top_bar();
		$this->control_top_bar_enable();
		$this->control_top_bar_layout();
		$this->control_top_bar_content();
		$this->control_top_bar_menu_shortcut();
		$this->partial_refresh();
	}

	/**
	 * Add customize section
	 */
	private function section_top_bar() {
		$this->add_section(
			new Section(
				'neve_top_bar_section',
				array(
					'priority' => 24,
					'title'    => esc_html__( 'Top Bar', 'neve' ),
					'panel'    => 'neve_header',
				)
			)
		);
	}

	/**
	 * Add top bar toggling control
	 */
	private function control_top_bar_enable() {
		$this->add_control(
			new Control(
				'neve_top_bar_enable',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				),
				array(
					'label'    => esc_html__( 'Enable Top Bar', 'neve' ),
					'section'  => 'neve_top_bar_section',
					'type'     => 'checkbox-toggle',
					'priority' => 25,
				),
				'Neve\Customizer\Controls\Checkbox'
			)
		);
	}

	/**
	 * Add top bar layout control
	 */
	private function control_top_bar_layout() {
		$this->add_control(
			new Control(
				'neve_top_bar_layout',
				array(
					'default'           => 'content-menu',
					'sanitize_callback' => array( $this, 'sanitize_top_bar_layout' ),
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'           => esc_html__( 'Layout', 'neve' ),
					'priority'        => 30,
					'section'         => 'neve_top_bar_section',
					'active_callback' => array( $this, 'is_top_bar_on' ),
					'choices'         => array(
						'content-menu' => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAAXVBMVEUAbq4AebMAe7QAe7UAhboFfLQFh7sjjr49l8NToMhmqMx3sNGGuNWVwNqjyN6wz+K81ufB3+3B4e7C4u7I3evR6fPU5O/V6/Tf6/Pq8vf1+fv1+vz6/f7+//////+gH6NhAAABVklEQVR4Ae3VzU7DMBAE4AID/onjBCjBNmXe/zHZplEbqahShRRxmDl0Oz59slbOjv8yYoklllhiiSWWWGKJJZZYYoklllhiiSWWWGKJJZZYYokl1p8jFsBfEjFtxZrqPNo86lTnPwU4nZdGsk2F5TgDhsJV3t/Oef3i9z31Nit7oGssCYh7q7CeyAggk6OHszbBOfhqE4hc5fnhnN0HD4931JusCtfH0JgQE7yxrANlua3mXA7YHzm9w3B9Wy845+mThzvqbVbCaDY2OLIzQEZvMy+7NcJHj85YngPislsbsHoMrIXNzayJ2Uh5xXIxxt5YkdOWrAp0cJUJoYPnhRXQpaO2D6FdWBk+bMHiEOBHsiWHrqxYe+v2G+D6Fat6+LrBylsKVw/EKqd+fbrJA7FEHx+xxBJLLLHEEkssscQSSyyxxBJLLLHEEkssscQSSyyxxBLrBzxgEYQpIrleAAAAAElFTkSuQmCC',
						),
						'menu-content' => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAAXVBMVEUAbq4AebMAe7QAe7UAhboFfLQFh7sjjr49l8NToMhmqMx3sNGGuNWVwNqjyN6wz+K81ufB3+3B4e7C4u7I3evR6fPU5O/V6/Tf6/Pq8vf1+fv1+vz6/f7+//////+gH6NhAAABU0lEQVR42u3UzU7DMBAE4AID/k8CBGObsu//mN0kVRMEUukl6mFGSjbjXD5Zlg9ylyGLLLLIIossssgiiyyyyCKLLLLIIossssgiiyyyyCKLLLLIug8WIH/EI19jvb9d8vol37fUH8l1Hm0eNdf5owDLemnTv1ykTNOhL1dYzw+XHD7k+HhD3aSzQGhSIuBHrdAeRTyATmSwMNoyjIGtOgF/hfWCS54+5XhLXVNhkndNInyEVZZ2oJx3qxnTOYwTJxn0y27twYoY1CYNRiRgVFbS2Z3P1gDrLYKyrPTwy9nag5XQSy3SzMzKyur0WVnGe5+U5SXvyapAgKkS4QKsrCyHECdtcq6trA7W7XLkewc7iLRoEMqGNWrXt4NJG1a1sHWfC6LIekFss/Rfq7zlySKLLLLIIossssgiiyyyyCKLLLLIIossssgiiyyyyCKLrP/mBGV6EYQ9BHpwAAAAAElFTkSuQmCC',
						),
					),
				),
				'Neve\Customizer\Controls\Radio_Image'
			)
		);
	}

	/**
	 * Add top bar content control.
	 */
	private function control_top_bar_content() {
		$this->add_control(
			new Control(
				'neve_top_bar_content',
				array(
					'sanitize_callback' => 'wp_kses_post',
					'default'           => '',
					'transport'         => $this->selective_refresh,
				),
				array(
					'priority'        => 35,
					'section'         => 'neve_top_bar_section',
					'label'           => esc_html__( 'Content', 'neve' ),
					'type'            => 'textarea',
					'active_callback' => array( $this, 'is_top_bar_on' ),
				)
			)
		);
	}

	/**
	 * Partial refresh
	 */
	private function partial_refresh() {
		$this->add_partial(
			new Partial(
				'neve_top_bar_partial',
				array(
					'selector'            => '.nv-top-bar',
					'settings'            => array(
						'neve_top_bar_layout',
						'neve_top_bar_content',
						'neve_top_bar_enable',
					),
					'render_callback'     => array( $this, 'top_bar_content_callback' ),
					'container_inclusive' => true,
				)
			)
		);
	}

	/**
	 * Sanitize the container layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_top_bar_layout( $value ) {
		$allowed_values = array( 'content-menu', 'menu-content' );
		if ( ! in_array( $value, $allowed_values ) ) {
			return 'content-menu';
		}

		return esc_html( $value );
	}

	/**
	 * Render callback for the top bar content.
	 */
	public function top_bar_content_callback() {
		$top_bar_view = new Top_Bar_View();
		$top_bar_view->render_top_bar();
	}

	/**
	 * Top bar menu shortcut.
	 */
	private function control_top_bar_menu_shortcut() {
		$this->add_control(
			new Control(
				'neve_top_bar_menu_shortcut',
				array(
					'transport' => $this->selective_refresh,
				),
				array(
					'button_class'    => 'nv-top-bar-menu-shortcut',
					'icon_class'      => 'menu',
					'button_text'     => __( 'Select Top Bar Menu', 'neve' ),
					'shortcut'        => true,
					'priority'        => 40,
					'section'         => 'neve_top_bar_section',
					'active_callback' => array( $this, 'is_top_bar_on' ),
				),
				'Neve\Customizer\Controls\Button'
			)
		);
	}

	/**
	 * Check if top bar is enabled.
	 *
	 * @return string
	 */
	public function is_top_bar_on() {
		return (bool) get_theme_mod( 'neve_top_bar_enable', false );
	}
}
