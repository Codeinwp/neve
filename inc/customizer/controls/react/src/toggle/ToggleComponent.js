/* jshint esversion: 6 */
import PropTypes from 'prop-types'

const { __ } = wp.i18n
const {
  Component
} = wp.element
const {
  ToggleControl
} = wp.components

class ToggleComponent extends Component {
  constructor(props) {
    super( props )
    this.state = {
      value: props.control.setting.get()
    }
  }

  toggleValue(newValue) {
    this.setState( {
      value: newValue
    } )
    this.props.control.setting.set( newValue )
  }

  render() {
    return (
      <ToggleControl
        className='neve-toggle-control neve-white-background-control'
        checked={this.state.value}
        label={this.props.control.params.label}
        onChange={(value) => this.toggleValue( value )}
      />
    )
  }

	componentDidMount() {
		const { control } = this.props
		document.addEventListener( 'neve-changed-customizer-value', (e) => {
						if ( !e.detail ) return false
						if ( e.detail.id !== control.id ) return false
						this.toggleValue( e.detail.value )
				} )
}
}

ToggleComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ToggleComponent
