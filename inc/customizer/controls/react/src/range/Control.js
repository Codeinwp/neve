/* jshint esversion: 6 */
import RangeComponent from './RangeComponent.js'

export const RangeControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    ReactDOM.render(
      <RangeComponent control={control} />,
      control.container[0]
    )
  }
} )
