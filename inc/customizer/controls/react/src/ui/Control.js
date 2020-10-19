/* jshint esversion: 6 */
/* global wp */
import UiComponent from './UiComponent.js'
const { render } = wp.element

export const UiControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <UiComponent control={control} />,
      control.container[0]
    )
  }
} )
