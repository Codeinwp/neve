/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
import classnames from 'classnames'

const { useState } = wp.element

const OrderingComponent = ({ control }) => {
  const [value, setValue] = useState(control.setting.get())
  const { choices } = control.params

  const updateValue = (newVal) => {
    setValue(newVal)
    control.setting.set(newVal)
  }

  return (
    <p>Ordering Control</p>
  )
}

OrderingComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default OrderingComponent
