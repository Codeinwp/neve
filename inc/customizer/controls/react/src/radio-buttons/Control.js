/* jshint esversion: 6 */
/* global wp */
import RadioButtonsComponent from './RadioButtonsComponent.js'
const { render } = wp.element

export const RadioButtonsControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <RadioButtonsComponent control={control} />,
      control.container[0]
    )
  }
} )
