/* jshint esversion: 6 */
import PropTypes from 'prop-types'

const { __ } = wp.i18n

const { RangeControl } = wp.components

const {
  Component
} = wp.element

class RangeComponent extends Component {
  constructor(props) {
    super( props )
    const value = props.control.setting.get()
    this.state = {
      value
    }

    this.updateValues = this.updateValues.bind( this )
  }

  render() {
    return (
      <div className='neve-white-background-control neve-range-control'>
        {
          this.props.control.params.label &&
          <span className='customize-control-title'>
              {this.props.control.params.label}
            </span>
        }
        <RangeControl
          value={this.state.value}
          initialPosition={15}
          onChange={(value) => {
            this.updateValues( value )
          }}
          min={0}
          max={100}
        />
      </div>
    )
  }

  updateValues(value) {
    this.setState( { value } )
    this.props.control.setting.set( value )
  }

  componentDidMount() {
    const { control } = this.props
    document.addEventListener( 'neve-changed-customizer-value', (e) => {
      if ( !e.detail ) return false
      if ( e.detail.id !== control.id ) return false
      this.updateValues( e.detail.value )
    } )
  }
}

RangeComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default RangeComponent
