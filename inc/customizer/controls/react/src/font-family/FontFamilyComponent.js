/* jshint esversion: 6 */
import PropTypes from 'prop-types'
import FontFamilySelector from './FontFamilySelector.js'

const {
  Component,
  Fragment
} = wp.element

class TypefaceComponent extends Component {
  constructor(props) {
    super( props )
    const value = props.control.setting.get()
    this.state = {
      fontFamily: value,
      fontFamilySource: null
    }

    const defaultParams = {
      default_is_inherit: false
    }

    this.controlParams = props.control.params.input_attrs ? {
      ...defaultParams,
      ...JSON.parse( props.control.params.input_attrs )
    } : defaultParams
  }

  render() {
    const self = this
    return (
      <Fragment>
        {this.props.control.params.label &&
          <span className='customize-control-title'>
            {this.props.control.params.label}
          </span>}
        <div className='neve-typeface-control neve-white-background-control'>
          <FontFamilySelector
            selected={this.state.fontFamily}
            onFontChoice={(fontFamilySource, fontFamily) => {
              self.setState( { fontFamily, fontFamilySource } )
              self.updateControl()
            }}
            inheritDefault={this.controlParams.default_is_inherit}
          />
        </div>
      </Fragment>
    )
  }

  updateControl() {
    setTimeout( () => {
      this.props.control.setting.set( this.state.fontFamily )
      wp.customize.previewer.send( 'font-selection', {
        value: this.state.fontFamily,
        source: this.state.fontFamilySource,
        controlId: this.props.control.id,
        type: '\\Neve\\Customizer\\Controls\\React\\Font_Family',
        inherit: this.controlParams.default_is_inherit
      } )
    }, 100 )
  }
}

TypefaceComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default TypefaceComponent
