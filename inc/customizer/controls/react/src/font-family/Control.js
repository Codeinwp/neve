/* jshint esversion: 6 */
/* global wp */

import FontFamilyComponent from './FontFamilyComponent.js'
const { render } = wp.element

export const FontFamilyControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    const control = this
    render(
      <FontFamilyComponent control={control} />,
      control.container[0]
    )
  }
})
