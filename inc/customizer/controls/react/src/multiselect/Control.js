/* global wp */
import MultiSelect from './MultiSelect'

const { render } = wp.element
export const MultiSelectControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    render(
      <MultiSelect control={this} />
      , this.container[0])
  }
})
