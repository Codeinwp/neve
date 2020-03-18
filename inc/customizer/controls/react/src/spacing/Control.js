/* jshint esversion: 6 */
/* global wp */
import SpacingComponent from './SpacingComponent.js'
const { render } = wp.element

export const SpacingControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <SpacingComponent control={control} />,
      control.container[0]
    )
  }
} )
