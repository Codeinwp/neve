<?php
namespace HFG\Core\Customizer;

class Control_Radio extends Control_Base {
	public $disabled_msg;
	public $disabled_pro_msg;
	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @access public
	 */
	public function to_json() {
		parent::to_json();
		$this->json['disabled_msg']      = $this->disabled_msg;
		$this->json['disabled_pro_msg']  = $this->disabled_pro_msg;
	}

	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-hfg-radio">';
		self::before_field();
		?>
		<#
		var uniqueID = field.name + ( new Date().getTime() );

		var msg = '';
		if ( field.disabled_msg || field.disabled_pro_msg ) {
			if ( field._pro && field.disabled_pro_msg ) {
				msg = field.disabled_pro_msg;
			} else if ( field.disabled_msg ) {
				msg = field.disabled_msg;
			}
		}

		#>
		<?php echo self::field_header(); ?>
		<div class="hfg-field-settings-inner">
			<div class="hfg-radio-list">
				<# _.each( field.choices, function( label, key ){
					var l = '';
					var title = '';
					var disable = false;
					var bubble = '';

					if ( ! _.isObject( label ) ) {
						l = label;
						title = label;
					} else { // Image select field
						if ( label.img ) {
							l = '<img src="'+label.img+'" alt="">';
						}
						if ( label.label ) {
							 l += '<span>'+label.label+'</span>';
							title = label.label;
						}
						if ( typeof label.disable !== "undefined" && label.disable ) {
							disable = true;
						}

						if ( typeof label.bubble !== "undefined" ) {
							bubble = label.bubble;
						}

						if ( field._pro ) {
							bubble = '';
						}

					}
					#>
					<p <# if ( disable ) { #> class="input-disabled" <# } #>>
						<label title="{{ title }}">
							<input type="radio" <# if ( disable ) { #> disabled="disabled" <#} #> data-name="{{ field.name }}" value="{{ key }}" <# if ( field.value == key && ! disable ){ #> checked="checked" <# } #> name="{{ uniqueID }}">
							<span class="label">{{{ l }}}</span>
							<# if ( bubble ) { #>
							<span class="bubble">{{{ bubble }}}</span>
							<# } #>
						</label>
					</p>
				<# } ); #>
			</div>

		</div>
		<?php
		self::after_field();
		echo '</script>';
	}
}
