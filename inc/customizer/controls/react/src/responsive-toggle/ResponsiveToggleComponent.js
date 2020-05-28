/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
import ResponsiveControl from '../common/Responsive'

const { ToggleControl } = wp.components
const { useState, useEffect } = wp.element

const ResponsiveToggleComponent = ({ control }) => {
  useEffect(() => {
    document.addEventListener('neve-changed-customizer-value', (e) => {
      if (!e.detail) {
        return false
      }
      if (e.detail.id !== control.id) {
        return false
      }
      setValue(e.detail.value)
    })
  }, [])

  const [value, setValue] = useState(control.setting.get())
  const [device, setDevice] = useState('desktop')

  return (
    <div className='neve-white-background-control flex-contents'>
      <ToggleControl
        className='neve-toggle-control'
        checked={value[device]}
        label={control.params.label}
        onChange={(newValue) => {
          const nextValue = { ...value }
          nextValue[device] = newValue
          setValue(nextValue)
          control.setting.set(nextValue)
        }}
      />
      <ResponsiveControl
        excluded={control.params.excluded || []}
        onChange={(device) => {
          setDevice(device)
        }}
      />
    </div>
  )
}

ResponsiveToggleComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ResponsiveToggleComponent
