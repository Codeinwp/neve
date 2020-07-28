/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
import RadioIcons from '../common/RadioIcons'
import ResponsiveControl from '../common/Responsive'

const { useState, useEffect } = wp.element

const ResponsiveRadioButtonsComponent = ({ control }) => {
  const { choices, label } = control.params
  const [value, setValue] = useState(control.setting.get())
  const [device, setDevice] = useState('desktop')

  const updateValue = (newValue) => {
    setValue(newValue)
    control.setting.set(newValue)
  }

  useEffect(() => {
    // Migrate previously string value into responsive.
    if ( typeof value === 'string') {
      setValue({ mobile: value, desktop: value, tablet: value })
    }

    document.addEventListener('neve-changed-customizer-value', (e) => {
      if (!e.detail) return false
      if (e.detail.id !== control.id) return false

      let recievedValue = e.detail.value
      // Migrate previously string value into responsive.
      if ( typeof recievedValue === 'string') {
        recievedValue = { mobile: recievedValue, desktop: recievedValue, tablet: recievedValue }
        setValue(recievedValue)
      }
    })
  }, [])

  return (
    <div className='neve-white-background-control'>
      <div className='neve-control-header'>
        {label && <span className='customize-control-title'>{label}</span>}
        <ResponsiveControl onChange={(device) => setDevice(device)} />
      </div>
      <RadioIcons
        value={value[device]}
        options={choices}
        onChange={(newVal) => {
          updateValue({ ...value, [device]: newVal })
        }}
      />
    </div>
  )
}

ResponsiveRadioButtonsComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ResponsiveRadioButtonsComponent
