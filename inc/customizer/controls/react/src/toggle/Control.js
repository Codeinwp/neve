/* jshint esversion: 6 */
/* global wp */
import ToggleComponent from './ToggleComponent.js'
const { render } = wp.element

export const ToggleControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <ToggleComponent control={control} />,
      control.container[0]
    )
  }
} )
