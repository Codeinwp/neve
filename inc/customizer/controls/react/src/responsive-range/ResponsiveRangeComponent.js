/* jshint esversion: 6 */
import PropTypes from 'prop-types'
import ResponsiveControl from '../common/Responsive'
import { maybeParseJson } from '../common/common'

const { __ } = wp.i18n
const { RangeControl } = wp.components
const { Component } = wp.element

class ResponsiveRangeComponent extends Component {
  constructor(props) {
    super( props )
    this.state = {
      value: maybeParseJson( props.control.setting.get() ),
      currentDevice: 'desktop'
    }

    this.updateValues = this.updateValues.bind( this )
  }

  render() {
    const { currentDevice, value } = this.state
    const { label } = this.props.control.params
    const { step, min, max, hideResponsive } = this.props.control.params.input_attrs
    return ( <div className='neve-white-background-control neve-range-control'>
        {
          label &&
          <span className='customize-control-title'>
              {label}
          </span>
        }
        <ResponsiveControl
          onChange={(currentDevice) => this.setState( { currentDevice } )}
          hideResponsive={hideResponsive || false}
        />
        <RangeControl
          value={parseInt( value[currentDevice] )}
          initialPosition={0}
          onChange={(value) => {
            this.updateValues( value )
          }}
          min={min || 0}
          step={step || 1}
          max={max || 100}
        />
      </div>
    )
  }

  updateValues(value) {
    const { currentDevice } = this.state
    this.setState( {
      value: {
        ...this.state.value,
        [currentDevice]: value
      }
    } )
    this.props.control.setting.set( JSON.stringify( {
      ...maybeParseJson( this.props.control.setting.get() ),
      [currentDevice]: value
    } ) )
  }

  componentDidMount() {
    const { control } = this.props

    document.addEventListener( 'neve-changed-customizer-value', (e) => {
      if ( !e.detail ) return false
      if ( e.detail.id !== control.id ) return false

      this.setState( { value: maybeParseJson( e.detail.value ) } )
      this.props.control.setting.set( JSON.stringify( e.detail.value ) )
    } )

  }
}

ResponsiveRangeComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ResponsiveRangeComponent
