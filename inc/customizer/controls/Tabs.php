<?php
/**
 * The tabs customize control extends the WP_Customize_Control class. This class allows
 * developers to create tabs and hide the sections' settings easily.
 *
 * @package    Neve\Customizer\Controls
 * @since      1.1.45
 * @author     Andrei Baicus <andrei@themeisle.com>
 * @copyright  Copyright (c) 2017, Themeisle
 * @link       http://themeisle.com/
 * @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Neve\Customizer\Controls;

/**
 * Radio image customize control.
 *
 * @since  1.1.45
 * @access public
 */
class Tabs extends \WP_Customize_Control {

	/**
	 * The type of customize control being rendered.
	 *
	 * @since 1.1.45
	 * @var   string
	 */
	public $type = 'interface-tabs';

	/**
	 * The tabs with keys of the controls that are under each tab.
	 *
	 * @since 1.1.45
	 * @var array
	 */
	public $tabs;

	/**
	 * Controls from tabs.
	 *
	 * @var array
	 */
	public $controls;


	/**
	 * Tabs constructor.
	 *
	 * @param \WP_Customize_Manager $manager wp_customize manager.
	 * @param string                $id      control id.
	 * @param array                 $args    public parameters for control.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
	}

	/**
	 * Add custom JSON parameters to use in the JS template.
	 *
	 * @return array
	 */
	public function json() {
		$json             = parent::json();
		$json['tabs']     = $this->tabs;
		$json['controls'] = $this->controls;
		return $json;
	}

	/**
	 * Underscore JS template to handle the control's output.
	 *
	 * @return void
	 */
	public function content_template() {
		?>
		<# if ( ! data.tabs ) { return; } #>

		<div class="neve-tabs-control" id="">
		<# var i = 1;
			for( tab in data.tabs) { #>
				<#
				var allControlsInTabs = ''
				_.each( data.controls[tab], function( val, key ) {
					allControlsInTabs+= key + ' '
					if(val){
						var allvals = Object.keys(val).map(function(e) {
							return val[e]
						});
						allvals = _.uniq(_.flatten(allvals))
						allvals = allvals.join(' ')
						allControlsInTabs += allvals
					}
				});
				#>
			<div class="neve-customizer-tab <# if( i === 1 ){#> active <#}#>" data-tab="{{tab}}">
				<label class="{{allControlsInTabs}}">
					<i class="fa fa-{{data.tabs[tab]['icon']}}"></i>
					{{data.tabs[tab]['label']}}
				</label>
			</div>
		<# i++;} #>
		</div>


		<?php
	}
}

