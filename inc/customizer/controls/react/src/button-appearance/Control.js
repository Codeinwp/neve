/* jshint esversion: 6 */
import ButtonAppearanceComponent from './ButtonAppearanceComponent.js'

export const ButtonAppearanceControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    ReactDOM.render(
      <ButtonAppearanceComponent control={control} />,
      control.container[0]
    )
  }
} )
