/* jshint esversion: 6 */
/* global wp */
import RadioImageComponent from './RadioImageComponent.js'
const { render } = wp.element

export const RadioImageControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <RadioImageComponent control={control} />,
      control.container[0]
    )
  }
} )
