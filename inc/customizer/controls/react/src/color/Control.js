/* jshint esversion: 6 */
/* global wp */

import ColorComponent from './ColorComponent'
const { render } = wp.element

export const ColorControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <ColorComponent control={control} />,
      control.container[0]
    )
  }
} )
