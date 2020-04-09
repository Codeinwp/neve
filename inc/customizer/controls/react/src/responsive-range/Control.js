/* jshint esversion: 6 */
/* global wp */

import ResponsiveRangeComponent from './ResponsiveRangeComponent.js'
const { render } = wp.element

export const ResponsiveRangeControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <ResponsiveRangeComponent control={control} />,
      control.container[0]
    )
  }
} )
