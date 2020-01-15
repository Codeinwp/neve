/* jshint esversion: 6 */
import ToggleComponent from './ToggleComponent.js'

export const ToggleControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    ReactDOM.render(
      <ToggleComponent control={control} />,
      control.container[0]
    )
  }
} )
