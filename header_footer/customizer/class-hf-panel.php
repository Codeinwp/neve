<?php

class Hf_WP_Customize_Panel extends WP_Customize_Panel {

	public $panel;
	public $type = 'Hf_panel';

	/**
	 * Auto-expand a section in a panel when the panel is expanded when the panel only has the one section.
	 *
	 * @since 4.7.4
	 * @var bool
	 */
	public $auto_expand_sole_section = true;

	public function json() {

		$array = wp_array_slice_assoc(
			(array) $this,
			array(
				'id',
				'description',
				'priority',
				'type',
				'panel',
			)
		);
		$array['title']          = html_entity_decode( $this->title, ENT_QUOTES, get_bloginfo( 'charset' ) );
		$array['content']        = $this->get_content();
		$array['active']         = $this->active();
		$array['instanceNumber'] = $this->instance_number;
		return $array;

	}

}
