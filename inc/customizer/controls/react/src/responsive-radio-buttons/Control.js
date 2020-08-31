/* jshint esversion: 6 */
/* global wp */
import ResponsiveRadioButtonsComponent from './ResponsiveRadioButtonsComponent.js'
const { render } = wp.element

export const ResponsiveRadioButtonsControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <ResponsiveRadioButtonsComponent control={control} />,
      control.container[0]
    )
  }
} )
