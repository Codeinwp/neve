/* jshint esversion: 6 */
import ResponsiveRangeComponent from './ResponsiveRangeComponent.js'

export const ResponsiveRangeControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    ReactDOM.render(
      <ResponsiveRangeComponent control={control} />,
      control.container[0]
    )
  }
} )
