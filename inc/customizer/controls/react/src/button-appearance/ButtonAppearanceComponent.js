/* jshint esversion: 6 */
import PropTypes from 'prop-types'
import RadioIcons from '../common/RadioIcons.js'
import SVG from '../common/svg.js'

const { __ } = wp.i18n
const {
  Component,
  Fragment
} = wp.element

const { RangeControl, ColorPalette, Panel, PanelBody, PanelRow } = wp.components

class ButtonAppearanceComponent extends Component {
  constructor(props) {
    super( props )
    const value = props.control.setting.get()
    this.state = {
      type: value.type,
      background: value.background || '',
      backgroundHover: value.backgroundHover || '',
      text: value.text || '',
      textHover: value.textHover || '',
      borderRadius: typeof value.borderRadius !== 'undefined'
        ? value.borderRadius
        : 3,
      borderWidth: value.borderWidth || 1
    }
    this.updateValues( this.state )
  }

  getBorderControls() {
    return (
      <Fragment>
        <span className='customize-control-title'>{__( 'Border',
          'neve' )}
        </span>
        <div className='range-control'>
          <span>{__( 'Radius', 'neve' )}</span>
          <RangeControl
            value={this.state.borderRadius}
            initialPosition={this.state.borderRadius}
            beforeIcon='minus'
            afterIcon='plus'
            min={0}
            max={50}
            step={1}
            onChange={
              (borderRadius) => this.setState( { borderRadius },
                this.updateValues( { borderRadius } ) )
            }
          />
        </div>
        {this.state.type === 'outline' && <div className='range-control'>
          <span>{__( 'Width', 'neve' )}</span>
          <RangeControl
            value={this.state.borderWidth}
            initialPosition={this.state.borderWidth}
            beforeIcon='minus'
            afterIcon='plus'
            min={1}
            max={20}
            step={1}
            onChange={
              (borderWidth) => this.setState( { borderWidth },
                this.updateValues( { borderWidth } ) )
            }
          />
                                          </div>}
      </Fragment>
    )
  }

  getColors() {
    const settings = {
      normal: {
        label: __( 'Normal', 'neve' ),
        controls: {
          background: __( 'Background', 'neve' ),
          text: this.state.type === 'fill' && __( 'Text', 'neve' ) ||
									__( 'Text and Border', 'neve' )
        }
      },
      hover: {
        label: __( 'Hover', 'neve' ),
        controls: {
          backgroundHover: __( 'Background', 'neve' ),
          textHover: this.state.type === 'fill' && __( 'Text', 'neve' ) ||
									__( 'Text and Border', 'neve' )
        }
      }
    }
    const palette = [
      { name: 'black', color: '#000000' },
      { name: 'white', color: '#ffffff' },
      { name: 'red', color: '#cc433c' },
      { name: 'orange', color: '#d39b48' },
      { name: 'green', color: '#95d45a' },
      { name: 'blue', color: '#3972b8' }
    ]
    const self = this

    if ( this.props.control.params.no_hover ) {
      delete settings.hover
    }
    return (
      <Fragment>
        <span className='customize-control-title'>
          {__( 'Color settings', 'neve' )}
        </span>
        <Panel>
          {
            Object.keys( settings ).map( (type, index) => {
              return (
                <PanelBody key={index}
                  title={this.props.control.params.no_hover
                    ? ''
                    : settings[type].label}
                  initialOpen={type === 'normal'}
                >
                  {
                    Object.keys( settings[type].controls )
                      .map( (controlSlug, index) => {
                        return (
                          <Fragment key={index}>
                            <PanelRow>
                              <span>{settings[type].controls[controlSlug]}</span>
                            </PanelRow>
                            <PanelRow>
                              <ColorPalette
                                colors={palette}
                                value={self.state[controlSlug]}
                                onChange={(value) => {
                                  self.setState(
                                    { [controlSlug]: value || '' },
                                    self.updateValues( {
                                      [controlSlug]: value || ''
                                    } ) )
                                }}
                              />
                              <div
                                className='neve-color-preview'
                                style={{ backgroundColor: self.state[controlSlug] }}
                              />
                            </PanelRow>
                          </Fragment>
                        )
                      } )
                  }
                </PanelBody>
              )
            } )
          }
        </Panel>
      </Fragment>
    )
  }

  getTypeControls() {
    const types = {
      fill: {
        label: 'fill',
        tooltip: __( 'Filled', 'neve' ),
        icon: SVG.buttonFill
      },
      outline: {
        label: 'outline',
        tooltip: __( 'Outline', 'neve' ),
        icon: SVG.buttonOutline
      }
    }

    return (
      <RadioIcons
        options={types} onChange={(type) => {
          this.setState( { type }, this.updateValues( { type } ) )
        }} value={this.state.type}
      />
    )
  }

  render() {
    return (
      <div className='neve-button-appearance-control'>
        {this.props.control.params.label &&
          <span
            className='customize-control-title'
          >
            {this.props.control.params.label}
          </span>}
        <div className='neve-white-background-control'>
          <span className='customize-control-title'>{
            __( 'Style', 'neve' )
          }
          </span>
          {this.getTypeControls()}
          {this.getBorderControls()}
          {this.getColors()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { control } = this.props

    document.addEventListener( 'neve-changed-customizer-value', (e) => {
      if ( !e.detail ) return false
      if ( e.detail.id !== control.id ) return false
      this.updateValues( e.detail.value )
    } )
  }

  updateValues(value) {
    this.props.control.setting.set( {
      ...this.props.control.setting.get(),
      ...value
    } )
  }
}

ButtonAppearanceComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default ButtonAppearanceComponent
