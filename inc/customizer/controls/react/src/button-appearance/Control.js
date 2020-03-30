/* jshint esversion: 6 */
/* global wp */
import ButtonAppearanceComponent from './ButtonAppearanceComponent.js'
const { render } = wp.element

export const ButtonAppearanceControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <ButtonAppearanceComponent control={control} />,
      control.container[0]
    )
  }
} )
