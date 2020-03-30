/* jshint esversion: 6 */
/* global wp */
import PresetsSelector from './PresetsSelector'
const { render } = wp.element
export const PresetsSelectorControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    render(
      <PresetsSelector control={this} />
      , this.container[0] )
  }
} )
