/* jshint esversion: 6 */
/* global wp, ReactDOM */
import PresetsSelector from './PresetsSelector'

export const PresetsSelectorControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    ReactDOM.render(
      <PresetsSelector control={this} />
      , this.container[0] )
  }
} )
