/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'

const { __ } = wp.i18n

const { RangeControl, Tooltip, IconButton } = wp.components

const {
  Component
} = wp.element

class RangeComponent extends Component {
  constructor(props) {
    super(props)
    const value = props.control.setting.get()
    this.state = {
      value
    }
    const defaults = {
      min: 0,
      max: 100,
      defaultVal: 15,
      step: 1
    }

    this.controlProps = {
      ...defaults,
      ...(props.control.params.input_attrs || {})
    }

    this.updateValues = this.updateValues.bind(this)
    this.renderReset = this.renderReset.bind(this)
  }

  render() {
    const { label } = this.props.control.params
    const { defaultVal, min, max, step } = this.controlProps
    const { value } = this.state
    return (
      <div className='neve-white-background-control neve-range-control'>
        <div className='neve-control-header'>
          {label && <span className='customize-control-title'>{label}</span>}
        </div>
        <div className='range-wrap'>
          <RangeControl
            value={value}
            initialPosition={defaultVal}
            onChange={(value) => {
              this.updateValues(value)
            }}
            min={min}
            max={max}
            step={step}
          />
          {this.renderReset()}
        </div>
      </div>
    )
  }

  updateValues(value) {
    this.setState({ value })
    this.props.control.setting.set(value)
  }

  componentDidMount() {
    const { control } = this.props
    document.addEventListener('neve-changed-customizer-value', (e) => {
      if (!e.detail) return false
      if (e.detail.id !== control.id) return false
      this.updateValues(e.detail.value)
    })
  }

  renderReset() {
    const { defaultVal } = this.controlProps
    const { value } = this.state
    if (!defaultVal && defaultVal !== 0) {
      return null
    }

    if (defaultVal === value) {
      return null
    }

    return (
      <Tooltip
        key='tooltip-reset'
        text={__('Reset Value', 'neve')}
      >
        <IconButton
          key='reset-icon'
          icon='image-rotate'
          className='reset'
          onClick={() => this.updateValues(defaultVal)}
        />
      </Tooltip>
    )
  }
}

RangeComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default RangeComponent
