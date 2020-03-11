/* jshint esversion: 6 */
/* global wp, mapValues */

import PropTypes from 'prop-types'
import ResponsiveControl from '../common/Responsive'
import { maybeParseJson } from '../common/common'
import classnames from 'classnames'

const { __ } = wp.i18n
const { RangeControl, Button, Tooltip, IconButton } = wp.components
const { Component } = wp.element

class ResponsiveRangeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: maybeParseJson(props.control.setting.get()),
      currentDevice: 'desktop'
    }

    this.updateValues = this.updateValues.bind(this)
    this.renderControlHeader = this.renderControlHeader.bind(this)
    this.getButtons = this.getButtons.bind(this)
    this.renderReset = this.renderReset.bind(this)
  }

  getButtons() {
    const { units } = this.props.control.params.input_attrs
    if (!units) {
      return null
    }

    if (units.length === 1) {
      return <Button isSmall disabled className='active alone'>{units[0]}</Button>
    }

    return units.map((unit, index) => {
      const buttonClass = classnames(
        {
          active: self.state.value[self.state.currentDevice +
          '-unit'] === unit
        }
      )
      return (
        <Button
          key={index}
          isSmall
          className={buttonClass}
          onClick={() => {
            const value = { ...self.state.value }
            value[self.state.currentDevice + '-unit'] = unit
            if (unit !== 'em') {
              value[self.state.currentDevice] = mapValues(
                value[self.state.currentDevice],
                (value) => value ? parseInt(value) : value)
            }
            self.setState({ value })
            self.props.control.setting.set(value)
          }}
        >
          {unit}
        </Button>
      )
    })
  }

  renderControlHeader() {
    const { label } = this.props.control.params
    const { hideResponsive } = this.props.control.params.input_attrs
    return (
      <div className='neve-control-header'>
        {label && <span className='customize-control-title'>{label}</span>}
        <ResponsiveControl
          onChange={(currentDevice) => this.setState({ currentDevice })}
          hideResponsive={hideResponsive || false}
        />
        <div className='neve-units'>
          {this.getButtons()}
        </div>
      </div>
    )
  }

  render() {
    const { currentDevice, value } = this.state
    const { step, min, max } = this.props.control.params.input_attrs
    return (
      <div className='neve-white-background-control neve-range-control'>
        {this.renderControlHeader()}
        <div className='range-wrap'>
          <RangeControl
            value={parseInt(value[currentDevice])}
            initialPosition={0}
            onChange={(value) => {
              this.updateValues(value)
            }}
            min={min || 0}
            step={step || 1}
            max={max || 100}
          />
          {this.renderReset()}
        </div>
      </div>
    )
  }

  renderReset() {
    const { defaultVal } = this.props.control.params.input_attrs
    const { currentDevice, value } = this.state
    if (!defaultVal) {
      return null
    }

    if (defaultVal[currentDevice] === value[currentDevice]) {
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
          onClick={() => this.updateValues(defaultVal[currentDevice])}
        />
      </Tooltip>
    )
  }

  updateValues(value) {
    const { currentDevice } = this.state
    this.setState({
      value: {
        ...this.state.value,
        [currentDevice]: value
      }
    })
    this.props.control.setting.set(JSON.stringify({
      ...maybeParseJson(this.props.control.setting.get()),
      [currentDevice]: value
    }))
  }

  componentDidMount() {
    const { control } = this.props

    document.addEventListener('neve-changed-customizer-value', (e) => {
      if (!e.detail) return false
      if (e.detail.id !== control.id) return false

      this.setState({ value: maybeParseJson(e.detail.value) })
      this.props.control.setting.set(JSON.stringify(e.detail.value))
    })
  }
}

ResponsiveRangeComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ResponsiveRangeComponent
