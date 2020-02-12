/* jshint esversion: 6 */
import PropTypes from 'prop-types'
import classnames from 'classnames'

const { __ } = wp.i18n
const {
  Component
} = wp.element

const {
  Tooltip,
  IconButton
} = wp.components

class RadioIcons extends Component {
  constructor(props) {
    super( props )

    this.state = {
      value: 'none'
    }

    this.getButtons = this.getButtons.bind( this )
  }

  render() {
    return (
      <div className='neve-radio-icons'>
        {this.getButtons()}
      </div>
    )
  }

  getButtons() {
    const { options } = this.props
    const self = this

    const buttons = Object.keys( options ).map( (type, index) => {
      return (
        <Tooltip text={options[type].tooltip} key={index}>
          <IconButton
            aria-label={options[type].tooltip}
            className={classnames(
              { active: self.props.value === type } )}
            icon={options[type].icon}
            onClick={() => {
              self.props.onChange( type )
            }}
          />
        </Tooltip> )
    } )

    return buttons
  }
}

RadioIcons.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default RadioIcons
