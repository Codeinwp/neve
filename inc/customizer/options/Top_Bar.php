<?php
/**
 * Container layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Partial;
use Neve\Customizer\Types\Section;
use Neve\Views\Top_Bar as Top_Bar_View;

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
					'priority' => 26,
					'title'    => esc_html__( 'Top Bar', 'neve' ),
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
					'transport'         => $this->selective_refresh,
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
					'label'    => esc_html__( 'Layout', 'neve' ),
					'priority' => 30,
					'section'  => 'neve_top_bar_section',
					'choices'  => array(
						'content-menu' => array(
							'url'   => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAAM1BMVEX///8Ahbojjr5mqMzU5O/f6/Pq8vf1+fs9l8NToMiGuNWjyN681ueVwNp3sNGwz+LI3evMEc51AAABPUlEQVR4Ae3RuYojSxhE4Ti5L1nL+z/tVdISNFwYY5hWy4jPCPjLOlTKzMzMzMzMzMzMzMzMzP61WvSJAllbjvETsxLof464fvUR8ysr6ylVSZGph5L1B3z3F/dL41KFuSdD0mq0A6QjECJR9QSOfba4Socwfz5r0rXYQxOkDDRAN7QAUZ12wvzKGpzjHVkFygmUwRSkSSgaoMEpBWKGlQZdkandeJX681nqXCGMx1AEaRClBF8VkXizvT7cAcJ6Q9YicN4Eup5/q+oATVq+IWa4UrqSIkPKZXX6G7IqsBT2CFKG0AHlwBbVCbFx64C2Qhsn4w1ZOqFq7BEkrQAdpHzEIzJUI3BWlQZzAL3oDUrKz1FKVVKuNSXpPNIFSw9J2nJ5zi+62XrVh0kzjktmZmZmZmZmZmZmZmZm9s1/51AJDRsfaTQAAAAASUVORK5CYII=',
							'label' => esc_html__( 'Content / Menu', 'neve' ),
						),
						'menu-content' => array(
							'url'   => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAAM1BMVEX///8Ahbojjr5mqMzU5O/f6/Pq8vf1+fs9l8NToMiGuNWjyN681ueVwNp3sNGwz+LI3evMEc51AAABO0lEQVR4Ae3RuWodQRhE4Tq9Lz3L+z+tb6MrMFZm0EhBfUHBP9FhWmZmZmZmZmZmZmZmZmb2Uot+o0DWlmP8jVkJ9MUR148+Yv7MynpLVVJk6qVkPaBxqcLckyFpNdoB0hEIkah6Asc+W1ylQ5j6B3/7j/urSddiD02QMtAA3dACRHXaCfMja3COJ7IKlBMogylIk1A0QINTCsQMKw26IlO78Sr1+7PUuUIYr6EI0iBKCT4qIvFm+/xwBwjrgaxF4LwJdL3/VtUBmrR8Q8xwpXQlRYaUy+r0B7IqsBT2CFKG0AHlwBbVCbFx64C2Qhsn44EsnVA19giSVoAOUj7iERmqETirSoM5gF6eyCopv0cpVUm51pSk80gXLL0kacvlPT/oZutVv0yacVwyMzMzMzMzMzMzMzMzs+/yB9eOCQ0dpl58AAAAAElFTkSuQmCC',
							'label' => esc_html__( 'Menu / Content', 'neve' ),
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
					'priority' => 35,
					'section'  => 'neve_top_bar_section',
					'label'    => esc_html__( 'Content', 'neve' ),
					'type'     => 'textarea'
				)
			)
		);
	}

	/**
	 * Partial refresh
	 */
	private function partial_refresh() {
		$this->add_partial( new Partial(
			'neve_top_bar_partial',
			array(
				'selector'            => '.nv-top-bar',
				'settings'            => array( 'neve_top_bar_layout', 'neve_top_bar_content', 'neve_top_bar_enable' ),
				'render_callback'     => array( $this, 'top_bar_content_callback' ),
				'container_inclusive' => true,
			)
		) );
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

	private function control_top_bar_menu_shortcut() {
		$this->add_control( new Control(
			'neve_top_bar_menu_shortcut',
			array(
				'transport' => $this->selective_refresh,
			),
			array(
				'button_class' => 'nv-top-bar-menu-shortcut',
				'icon_class'   => 'menu',
				'button_text'  => __( 'Select Top Bar Menu', 'neve' ),
				'shortcut'     => true,
				'priority'     => 40,
				'section'      => 'neve_top_bar_section',
			),
			'Neve\Customizer\Controls\Button'
		) );
	}
}