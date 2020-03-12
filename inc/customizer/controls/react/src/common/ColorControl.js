/* global wp */
import PropTypes from 'prop-types'

const { ColorPicker, Button, Dropdown } = wp.components
const { Component } = wp.element

class NumberControl extends Component {
  render() {
    const { label, selectedColor } = this.props

    return (
      <div className='neve-control-header neve-color-component'>
        {
          label &&
            <span className='customize-control-title'>
              {label}
            </span>
        }

        <Dropdown
          renderToggle={( { isOpen, onToggle } ) => (
            <Button
              className='is-secondary is-button'
              onClick={onToggle}
              aria-expanded={isOpen}
              style={{ backgroundColor: selectedColor }}
            />
          )}
          renderContent={() => (
            <ColorPicker
              color={selectedColor}
              onChangeComplete={( value ) => { this.props.onChange(value.hex) }}
              disableAlpha
            />
          )}
        />
      </div>
    )
  }
}

NumberControl.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired
}

export default NumberControl
