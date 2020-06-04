/* jshint esversion: 6 */
/* global wp */
import ResponsiveToggleComponent from './ResponsiveToggleComponent.js'
const { render } = wp.element

export const ResponsiveToggleControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <ResponsiveToggleComponent control={control} />,
      control.container[0]
    )
  }
} )
