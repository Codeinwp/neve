/* jshint esversion: 6 */
import FontFamilyComponent from './FontFamilyComponent.js'

export const FontFamilyControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    const control = this
    ReactDOM.render(
      <FontFamilyComponent control={control} />,
      control.container[0]
    )
  }
})
