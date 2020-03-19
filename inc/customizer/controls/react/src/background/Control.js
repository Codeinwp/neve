/* jshint esversion: 6 */
/* global wp */

import BackgroundComponent from './BackgroundComponent.js'
const { render } = wp.element

export const BackgroundControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    const control = this
    render(
      <BackgroundComponent control={control} />,
      control.container[0]
    )
  }
})
