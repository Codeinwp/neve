<?php

class Hf_WP_Customize_Section extends WP_Customize_Section {

	public $section;
	public $type = 'Hf_section';

	public function json() {

		$array = wp_array_slice_assoc(
			(array) $this,
			array(
				'id',
				'description',
				'priority',
				'panel',
				'type',
				'description_hidden',
				'section',
			)
		);
		$array['title']          = html_entity_decode( $this->title, ENT_QUOTES, get_bloginfo( 'charset' ) );
		$array['content']        = $this->get_content();
		$array['active']         = $this->active();
		$array['instanceNumber'] = $this->instance_number;

		if ( $this->panel ) {
			$array['customizeAction'] = sprintf( __( 'Customizing &#9656; %s', 'Hf' ), esc_html( $this->manager->get_panel( $this->panel )->title ) );

		} else {
			$array['customizeAction'] = __( 'Customizing', 'Hf' );
		}

		return $array;

	}

}
