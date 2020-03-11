/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
import ColorControl from '../common/ColorControl.js'

const { Component } = wp.element

class ColorComponent extends Component {
  constructor(props) {
    super( props )
    const value = props.control.setting.get()
    this.state = {
      value,
      popoverOpen: false
    }
    this.defaultValue = props.control.params.default || ''

    this.updateValues = this.updateValues.bind( this )
  }

  componentDidMount() {
    const { control } = this.props

    document.addEventListener( 'neve-changed-customizer-value', (e) => {
      if ( !e.detail ) return false
      if ( e.detail.id !== control.id ) return false
      this.updateValues( e.detail.value )
    } )
  }

  render() {
    return (
      <div className='neve-white-background-control neve-color-control'>
        <ColorControl
          label={this.props.control.params.label}
          selectedColor={this.state.value}
          onChange={(value) => {
            this.updateValues(value)
          }}
        />
      </div>
    )
  }

  updateValues(value) {
    this.setState( { value: value } )
    this.props.control.setting.set( value )
  }
}

ColorComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ColorComponent
