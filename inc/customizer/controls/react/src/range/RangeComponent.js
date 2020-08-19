/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
const { RangeControl } = wp.components
const { useState, useEffect } = wp.element

const RangeComponent = ({ control }) => {
  useEffect(() => {
    document.addEventListener('neve-changed-customizer-value', (e) => {
      if (!e.detail) return false
      if (e.detail.id !== control.id) return false
      updateValues(e.detail.value)
    })
  }, [])

  const [value, setValue] = useState( control.setting.get() )
  const defaults = {
    min: 0,
    max: 100,
    defaultVal: 15,
    step: 1
  }
  const controlProps = { ...defaults, ...(control.params.input_attrs || {}) }
  const { label } = control.params
  const { defaultVal, min, max, step } = controlProps

  const updateValues = (newVal) => {
    setValue(newVal)
    control.setting.set(newVal)
  }

  return (
    <div className='neve-white-background-control neve-range-control'>
      <div className='neve-control-header'>
        {label && <span className='customize-control-title'>{label}</span>}
      </div>
      <div className='range-wrap'>
        <RangeControl
          resetFallbackValue={defaultVal || ''}
          value={value || ''}
          min={min < 0 ? min : 0}
          max={max || 100}
          step={step || 1}
          allowReset
          onChange={(nextValue) => {
            updateValues(nextValue)
          }}
        />
      </div>
    </div>
  )
}

RangeComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default RangeComponent
