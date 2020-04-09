/* jshint esversion: 6 */
/* global wp */

import RangeComponent from './RangeComponent.js'
const { render } = wp.element

export const RangeControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <RangeComponent control={control} />,
      control.container[0]
    )
  }
} )
