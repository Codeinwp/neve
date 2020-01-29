/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'

import ResponsiveControl from '../common/Responsive.js'
import NumberControl from '../common/NumberControl.js'
import RadioIcons from '../common/RadioIcons'
import SVG from '../common/svg.js'

const { __ } = wp.i18n
const {
  Component,
  Fragment
} = wp.element

const {
  SelectControl
} = wp.components

class TypefaceComponent extends Component {
  constructor(props) {
    super( props )

    const value = props.control.setting.get()
    const defaultParams = {
      size_units: ['px', 'em'],
      weight_default: 400,
      text_transform: 'none',
      size_default: {
        suffix: {
          mobile: 'px',
          tablet: 'px',
          desktop: 'px'
        },
        mobile: 15,
        tablet: 15,
        desktop: 15
      },
      line_height_default: {
        mobile: 1.6,
        tablet: 1.6,
        desktop: 1.6
      },
      letter_spacing_default: {
        mobile: 0,
        tablet: 0,
        desktop: 0
      }
    }

    this.controlParams = props.control.params.input_attrs ? {
      ...defaultParams,
      ...JSON.parse( props.control.params.input_attrs )
    } : defaultParams

    this.state = {
      currentDevice: 'desktop',
      fontSize: value.fontSize,
      lineHeight: value.lineHeight,
      letterSpacing: value.letterSpacing,
      fontWeight: value.fontWeight,
      textTransform: value.textTransform,
      flag: false
    }
  }

  render() {
    const textTransforms = {
      none: {
        label: 'none',
        tooltip: __( 'None', 'neve' ),
        icon: 'no'
      },
      capitalize: {
        label: 'Aa',
        tooltip: __( 'Capitalize', 'neve' ),
        icon: SVG.capitalize
      },
      lowercase: {
        label: 'aa',
        tooltip: __( 'Lowercase', 'neve' ),
        icon: SVG.lowercase
      },
      uppercase: {
        label: 'AA',
        tooltip: __( 'Uppercase', 'neve' ),
        icon: SVG.uppercase
      }
    }
    const self = this
    return (
      <Fragment>
        {this.props.control.params.label &&
        <span className='customize-control-title'>
            {this.props.control.params.label}
          </span>}
        <div className='neve-typeface-control neve-white-background-control'>
          <span className='customize-control-title'>
            {__( 'Text Transform', 'neve' )}
          </span>
          <RadioIcons
            options={textTransforms}
            onChange={(textTransform) => {
              this.setState( { textTransform } )
              this.updateValues( { textTransform } )
            }}
            value={this.state.textTransform}
          />

          <span className='customize-control-title'>
            {__( 'Font Weight', 'neve' )}
          </span>
          <SelectControl
            value={this.state.fontWeight}
            options={[
              { value: 100, label: '100' },
              { value: 200, label: '200' },
              { value: 300, label: '300' },
              { value: 400, label: '400' },
              { value: 500, label: '500' },
              { value: 600, label: '600' },
              { value: 700, label: '700' },
              { value: 800, label: '800' },
              { value: 900, label: '900' }
            ]}
            onChange={(fontWeight) => {
              this.setState( { fontWeight } )
              this.updateValues( { fontWeight } )
            }}
          />
          <ResponsiveControl
            onChange={(currentDevice) => this.setState(
              { currentDevice } )}
          >
            <NumberControl
              className='font-size'
              label={__( 'Font Size', 'neve' )}
              default={this.controlParams.size_default[this.state.currentDevice]}
              onChange={(val) => {
                const value = self.state.fontSize
                value[self.state.currentDevice] = val
                self.setState( { fontSize: value } )
                self.updateValues( { fontSize: value } )
              }}
              step={this.state.fontSize.suffix[this.state.currentDevice] ===
              'em' ? 0.1 : 1}
              onReset={() => {
                const value = this.state.fontSize
                value.suffix[this.state.currentDevice] = this.controlParams.size_default.suffix[this.state.currentDevice]
                value[this.state.currentDevice] = this.controlParams.size_default[this.state.currentDevice]
                this.setState( { fontSize: value } )
                this.updateValues( { fontSize: value } )
              }}
              value={this.state.fontSize[this.state.currentDevice]}
              units={this.controlParams.size_units}
              activeUnit={this.state.fontSize.suffix[this.state.currentDevice]}
              onUnitChange={(val) => {
                const value = self.state.fontSize
                value.suffix[self.state.currentDevice] = val
                self.setState( { fontSize: value } )
                self.updateValues( { fontSize: value } )
              }}
            />
            <NumberControl
              className='line-height'
              label={__( 'Line Height', 'neve' )}
              step={0.1}
              default={this.controlParams.line_height_default[this.state.currentDevice]}
              onChange={(val) => {
                const value = this.state.lineHeight
                value[this.state.currentDevice] = val
                this.setState( { lineHeight: value } )
                this.updateValues( { lineHeight: value } )
              }}
              onReset={() => {
                const value = this.state.lineHeight
                value[this.state.currentDevice] = this.controlParams.line_height_default[this.state.currentDevice]
                this.setState( { lineHeight: value } )
                this.updateValues( { lineHeight: value } )
              }}
              value={this.state.lineHeight[this.state.currentDevice]}
              max={4}
              min={0.5}
            />
            <NumberControl
              className='letter-spacing'
              label={__( 'Letter Spacing', 'neve' )}
              step={0.1}
              default={this.controlParams.letter_spacing_default[this.state.currentDevice]}
              onChange={(val) => {
                const value = this.state.letterSpacing
                value[this.state.currentDevice] = val
                this.setState( { letterSpacing: value } )
                this.updateValues( { letterSpacing: value } )
              }}
              onReset={() => {
                const value = this.state.letterSpacing
                value[this.state.currentDevice] = this.controlParams.letter_spacing_default[this.state.currentDevice]
                this.setState( { letterSpacing: value } )
                this.updateValues( { letterSpacing: value } )
              }}
              value={this.state.letterSpacing[this.state.currentDevice]}
              max={20}
              min={-5}
            />
          </ResponsiveControl>
        </div>
      </Fragment>
    )
  }

  updateValues(value) {
    this.props.control.setting.set( {
      ...this.props.control.setting.get(),
      ...value,
      flag: !this.props.control.setting.get().flag
    } )
  }
}

TypefaceComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default TypefaceComponent
