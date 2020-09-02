/* global wp */
/* jshint esversion: 6 */
import PropTypes from 'prop-types'
import classnames from 'classnames'

const { Button } = wp.components

const RadioIcons = ({ options, onChange, value, showLabels }) => {
  const getButtons = () => {
    return Object.keys(options).map((type, index) => {
      if (options[type].icon === 'text') {
        return (
          <Button
            key={index}
            className={classnames([{ active: value === type }, 'is-text'])}
            onClick={() => {
              onChange(type)
            }}
          >
            {options[type].tooltip}
          </Button>
        )
      }
      return (
        <span key={index}>
          <Button
            aria-label={options[type].tooltip}
            className={classnames({ active: value === type })}
            icon={options[type].icon}
            onClick={() => {
              onChange(type)
            }}
          />
          {showLabels && <label>{options[type].tooltip}</label>}
        </span>
      )
    })
  }

  return (
    <div className='neve-radio-icons'>
      {getButtons()}
    </div>
  )
}

RadioIcons.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  showLabels: PropTypes.bool
}

export default RadioIcons
