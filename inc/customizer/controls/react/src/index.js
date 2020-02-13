/* jshint esversion: 6 */
/* global wp */
import { init as initDynamicFields } from './dynamic-fields/index.js'
import { ToggleControl } from './toggle/Control.js'
import { BackgroundControl } from './background/Control.js'
import { SpacingControl } from './spacing/Control.js'
import { TypefaceControl } from './typeface/Control.js'
import { FontFamilyControl } from './font-family/Control.js'
import { RadioButtonsControl } from './radio-buttons/Control.js'
import { ButtonAppearanceControl } from './button-appearance/Control.js'
import { RangeControl } from './range/Control.js'
import { ResponsiveRangeControl } from './responsive-range/Control.js'
import { ColorControl } from './color/Control.js'
import { PresetsSelectorControl } from './presets-selector/Control.js'
import './style.scss'

wp.customize.controlConstructor.neve_toggle_control = ToggleControl
wp.customize.controlConstructor.neve_background_control = BackgroundControl
wp.customize.controlConstructor.neve_spacing = SpacingControl
wp.customize.controlConstructor.neve_typeface_control = TypefaceControl
wp.customize.controlConstructor.neve_font_family_control = FontFamilyControl
wp.customize.controlConstructor.neve_radio_buttons_control = RadioButtonsControl
wp.customize.controlConstructor.neve_button_appearance = ButtonAppearanceControl
wp.customize.controlConstructor.neve_range_control = RangeControl
wp.customize.controlConstructor.neve_responsive_range_control = ResponsiveRangeControl
wp.customize.controlConstructor.neve_color_control = ColorControl
wp.customize.controlConstructor.neve_presets_selector = PresetsSelectorControl

window.addEventListener( 'load', () => {
  const deviceButtons = document.querySelector(
    '#customize-footer-actions .devices, .hfg--cb-devices-switcher a.switch-to' )
  deviceButtons.addEventListener( 'click', function(e) {
    const event = new CustomEvent( 'neveChangedRepsonsivePreview', {
      detail: e.target.dataset.device
    } )
    document.dispatchEvent( event )
  } )
  initDynamicFields()
} )

window.HFG = {
  getSettings: () => {
    const usedSettings = {}
    NeveReactCustomize.headerControls.map( (item) => {
      if ( !wp.customize.control( item ) ) return false
      usedSettings[item] = wp.customize.control( item ).setting.get()
    } )
    return JSON.stringify( usedSettings )
  }
}
