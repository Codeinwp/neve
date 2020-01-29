/* jshint esversion: 6 */
import SpacingComponent from './SpacingComponent.js'

export const SpacingControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    ReactDOM.render(
      <SpacingComponent control={control} />,
      control.container[0]
    )
  }
} )
