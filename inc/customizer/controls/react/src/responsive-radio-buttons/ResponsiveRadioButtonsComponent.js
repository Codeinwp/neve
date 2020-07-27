/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
import RadioIcons from '../common/RadioIcons'
import ResponsiveControl from '../common/Responsive'
import SVG from '../common/svg.js'
import classnames from 'classnames'

const { __ } = wp.i18n
const { useState, useEffect } = wp.element

const ResponsiveRadioButtonsComponent = ({ control }) => {
  const { choices, label } = control.params
  const [value, setValue] = control.setting.get()
  const [device, setDevice] = useState('desktop')

  const updateValue = (newValue) => {
    setValue(newValue)
    control.setting.set(newValue)
  }

  useEffect(() => {
    if( typeof value === 'string') {
      console.log('Old Value:', value)
      setValue({mobile: value, desktop: value, tablet: value})
	}

    document.addEventListener('neve-changed-customizer-value', (e) => {
      if (!e.detail) return false
      if (e.detail.id !== control.id) return false
      updateValue(e.detail.value)
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
        onChange={(value) => {
          updateValue(value)
        }}
      />
    </div>
  )
}

ResponsiveRadioButtonsComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ResponsiveRadioButtonsComponent
