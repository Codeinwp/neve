/* jshint esversion: 6 */
import PropTypes from 'prop-types'

const { __ } = wp.i18n
const { Component } = wp.element
const { ColorPalette } = wp.components

class ColorComponent extends Component {
  constructor(props) {
    super( props )
    const value = props.control.setting.get()
    this.state = {
      value
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
    const palette = [
      { name: 'black', color: '#000000' },
      { name: 'white', color: '#ffffff' },
      { name: 'red', color: '#cc433c' },
      { name: 'orange', color: '#d39b48' },
      { name: 'green', color: '#95d45a' },
      { name: 'blue', color: '#3972b8' }
    ]
    return (
      <div className='neve-white-background-control neve-color-control'>
        {
          this.props.control.params.label &&
          <span className='customize-control-title'>
              {this.props.control.params.label}
            </span>
        }
        <ColorPalette
          colors={palette}
          value={this.state.value}
          initialPosition={15}
          onChange={(value) => {
            this.updateValues( value || '' )
          }}
        />
        <div
          className='neve-color-preview'
          style={{ backgroundColor: this.state.value }}
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
