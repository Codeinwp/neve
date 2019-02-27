<?php
namespace HFG\Core;

use HFG\Core\Customizer\Heading_Control;
use HFG\Core\Customizer\Select_Control;
use HFG\Core\Interfaces\Component;
use WP_Customize_Manager;

abstract class Abstract_Component implements Component {

	protected $id;
	protected $section;
	protected $column;
	protected $row;
	protected $width;
	protected $name;
	protected $label;
	protected $priority;
	protected $panel;

	public $current_x = null;
	public $current_width = null;

	public function get_settings() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'col'     => $this->column,
			'row'     => $this->row,
			'width'   => $this->width,
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	public function get_id() {
		return $this->id;
	}

	protected function set_property( $key = '', $value = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}
		$this->$key = $value;
		return true;
	}

	public function get_property( $key = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}

		return $this->$key;
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {

		$wp_customize->add_setting( $this->id . '_layout_heading' , array(
			'theme_supports'  => 'hfg_support',
			'transport' => 'postMessage',
		) );

		$wp_customize->add_control( new Heading_Control(
			$wp_customize,
			$this->id . '_layout_heading',
			[
				'name'     => $this->id . '_layout_heading',
				'type'     => 'heading',
				'priority' => 800,
				'section'  => $this->section,
				'label'    => __( 'Item Layout', 'hfg-module' ),
			]
		) );


		$wp_customize->add_setting( $this->id . '_merge',
			array(
				'default' => 'no',
				'theme_supports'  => 'hfg_support',
				'transport' => 'postMessage',
			)
		);
		$wp_customize->add_control( new Select_Control(
			$wp_customize,
			$this->id . '_merge',
			[
				'label' => __( 'Merge Component', 'hfg-module' ),
				'description' => esc_html__( 'If you choose to merge this item, the alignment setting will inherit from the item you are merging.', 'hfg-module' ),
				'priority' => 801,
				'section'  => $this->section,
				'input_attrs' => array(
					'placeholder' => __( 'Select merge type ...', 'hfg-module' ),
					'multiselect' => false,
				),
				'choices' => array(
					'no' => __( 'No', 'hfg-module' ),
					'right' => __( 'Merge Right', 'hfg-module' ),
					'left' => __( 'Merge Left', 'hfg-module' ),
				)
			]
		) );

		return $wp_customize;
	}

	protected function get_setting() {}

	protected function set_setting() {}

	abstract public function render();
}