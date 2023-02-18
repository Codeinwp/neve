<?php
/**
 * Abstract Abstract_SearchComponent class for Header Footer Grid.
 *
 * @package HFG\Core\Components
 */

namespace HFG\Core\Components;

use HFG\Core\Components\Abstract_Component;
use HFG\Core\Components\Utility\SearchIconButton;

/**
 * Class Abstract_SearchComponent
 *
 * @package HFG\Core
 */
abstract class Abstract_SearchComponent extends Abstract_Component {
	// Common constants which used by search form, search icon, advanced search form, advanced search icon
	const PLACEHOLDER_ID      = 'placeholder';
	const FIELD_HEIGHT        = 'field_height';
	const FIELD_FONT_SIZE     = 'field_text_size';
	const FIELD_BG            = 'field_background';
	const FIELD_TEXT_COLOR    = 'field_text_color';
	const FIELD_BORDER_WIDTH  = 'field_border_width';
	const FIELD_BORDER_RADIUS = 'field_border_radius';

	/**
	 *  Has support for the text based button?
	 *
	 * @var bool
	 */
	protected $has_textbutton_support = false;

	/**
	 * Instance of SearchIconButton which responsible adding&rendering icon&buttons to the search component.
	 *
	 * @var SearchIconButton
	 */
	protected $search_icon_button_instance;

	/**
	 * Abstract_SearchComponent constructor.
	 *
	 * @param string $panel Builder panel.
	 */
	public function __construct( $panel ) {
		parent::__construct( $panel );
		$this->search_icon_button_instance = new SearchIconButton( $this->section, $this->get_id(), $this->has_textbutton_support );
	}

	/**
	 * Method to add Component css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {
		return parent::add_style( $this->search_icon_button_instance->get_style( $css_array ) );
	}

	/**
	 * Override parent::define_settings to add additional controls
	 *
	 * @return void
	 */
	public function define_settings() {
		parent::define_settings();
		$this->search_icon_button_instance->add_controls();
	}
}
