/* jshint esversion: 6 */
/* global wp */
import OrderingComponent from './OrderingComponent.js'
const { render } = wp.element

export const OrderingControl = wp.customize.Control.extend( {
  renderContent: function renderContent() {
    const control = this
    render(
      <OrderingComponent control={control} />,
      control.container[0]
    )
  }
} )
