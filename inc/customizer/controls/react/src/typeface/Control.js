/* jshint esversion: 6 */
/* global wp */
import TypefaceComponent from './TypefaceComponent.js'

const { render } = wp.element

export const TypefaceControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    const control = this
    render(
      <TypefaceComponent control={control} />,
      control.container[0]
    )
  }
})
