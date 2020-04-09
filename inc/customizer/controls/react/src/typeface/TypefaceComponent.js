/* jshint esversion: 6 */
/* global wp */
import PropTypes from 'prop-types'
import NumberControl from '../common/NumberControl.js'

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
    super(props)

    const value = props.control.setting.get()
    const defaultParams = {
      size_units: ['em', 'px'],
      line_height_units: ['em', 'px'],
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
        suffix: {
          mobile: 'em',
          tablet: 'em',
          desktop: 'em'
        },
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

    // Added Later. Make sure we have a default value if none is selected.
    value.lineHeight = value.lineHeight || defaultParams.line_height_default
    value.lineHeight.suffix = value.lineHeight.suffix || defaultParams.line_height_default.suffix

    this.controlParams = props.control.params.input_attrs ? {
      ...defaultParams,
      ...JSON.parse(props.control.params.input_attrs)
    } : defaultParams

    // Added Later. Make sure we have a suffix for line height.
    this.controlParams.line_height_default.suffix = this.controlParams.line_height_default.suffix ||
      defaultParams.line_height_default.suffix

    this.state = {
      currentDevice: 'desktop',
      fontSize: value.fontSize,
      lineHeight: value.lineHeight,
      letterSpacing: value.letterSpacing,
      fontWeight: value.fontWeight,
      textTransform: value.textTransform,
      flag: false
    }

    this.renderFontWeight = this.renderFontWeight.bind(this)
    this.renderTextTransform = this.renderTextTransform.bind(this)
    this.renderFontSize = this.renderFontSize.bind(this)
    this.renderLineHeight = this.renderLineHeight.bind(this)
    this.renderLetterSpacing = this.renderLetterSpacing.bind(this)
    this.updateValues = this.updateValues.bind(this)
  }

  render() {
    return (
      <Fragment>
        {this.props.control.params.label &&
          <span className='customize-control-title'>
            {this.props.control.params.label}
          </span>}
        <div className='neve-typeface-control neve-white-background-control'>
          {this.renderTextTransform()}
          {this.renderFontWeight()}
          {this.renderFontSize()}
          {this.renderLineHeight()}
          {this.renderLetterSpacing()}
        </div>
      </Fragment>
    )
  }

  updateValues(value) {
    this.props.control.setting.set({
      ...this.props.control.setting.get(),
      ...value,
      flag: !this.props.control.setting.get().flag
    })
  }

  renderFontWeight() {
    return (
      <div className='select-inline font-weight'>
        <span className='customize-control-title'>
          {__('Weight', 'neve')}
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
            this.setState({ fontWeight })
            this.updateValues({ fontWeight })
          }}
        />
      </div>
    )
  }

  renderTextTransform() {
    return (
      <div className='select-inline text-transform'>
        <span className='customize-control-title'>
          {__('Transform', 'neve')}
        </span>
        <SelectControl
          value={this.state.textTransform}
          options={[
            { value: 'none', label: __('None', 'neve') },
            { value: 'capitalize', label: __('Capitalize', 'neve') },
            { value: 'lowercase', label: __('Lowercase', 'neve') },
            { value: 'uppercase', label: __('Uppercase', 'neve') }
          ]}
          onChange={(textTransform) => {
            this.setState({ textTransform })
            this.updateValues({ textTransform })
          }}
        />
      </div>
    )
  }

  renderFontSize() {
    const { currentDevice, fontSize } = this.state
    const { size_default, size_units } = this.controlParams
    return (
      <NumberControl
        className='font-size'
        label={__('Font Size', 'neve')}
        default={size_default[currentDevice]}
        value={fontSize[currentDevice]}
        step={fontSize.suffix[currentDevice] === 'em' ? 0.1 : 1}
        units={size_units}
        activeUnit={fontSize.suffix[currentDevice]}
        hasResponsive
        onChange={(val) => {
          const value = fontSize
          value[currentDevice] = val
          this.setState({ fontSize: value })
          this.updateValues({ fontSize: value })
        }}
        onUnitChange={(val) => {
          const value = fontSize
          value.suffix[currentDevice] = val
          this.setState({ fontSize: value })
          this.updateValues({ fontSize: value })
        }}
        onReset={() => {
          const value = fontSize
          value.suffix[currentDevice] = size_default.suffix[currentDevice]
          value[currentDevice] = size_default[currentDevice]
          this.setState({ fontSize: value })
          this.updateValues({ fontSize: value })
        }}
        onChangedDevice={(currentDevice) => this.setState({ currentDevice })}
      />
    )
  }

  renderLineHeight() {
    const { line_height_default, line_height_units } = this.controlParams
    const { lineHeight, currentDevice } = this.state
    return (
      <NumberControl
        className='line-height'
        label={__('Line Height', 'neve')}
        step={lineHeight.suffix[currentDevice] === 'em' ? 0.1 : 1}
        default={line_height_default[currentDevice]}
        value={lineHeight[currentDevice]}
        units={line_height_units}
        activeUnit={lineHeight.suffix[currentDevice]}
        max={lineHeight.suffix[currentDevice] === 'em' ? 4 : 200}
        min={lineHeight.suffix[currentDevice] === 'em' ? 0.5 : 1}
        hasResponsive
        onChange={(val) => {
          const value = lineHeight
          value[currentDevice] = val
          this.setState({ lineHeight: value })
          this.updateValues({ lineHeight: value })
        }}
        onReset={() => {
          const value = lineHeight
          value.suffix = value.suffix || line_height_default.suffix
          console.log(value.suffix)
          console.log(line_height_default)
          value.suffix[currentDevice] = line_height_default.suffix[currentDevice]
          value[currentDevice] = line_height_default[currentDevice]
          this.setState({ lineHeight: value })
          this.updateValues({ lineHeight: value })
        }}
        onUnitChange={(val) => {
          const value = lineHeight
          value.suffix[currentDevice] = val
          this.setState({ lineHeight: value })
          this.updateValues({ lineHeight: value })
        }}
        onChangedDevice={(currentDevice) => this.setState({ currentDevice })}
      />
    )
  }

  renderLetterSpacing() {
    const { letter_spacing_default } = this.controlParams
    const { currentDevice, letterSpacing } = this.state
    return (
      <NumberControl
        className='letter-spacing'
        label={__('Letter Spacing', 'neve')}
        step={0.1}
        default={letter_spacing_default[currentDevice]}
        value={letterSpacing[currentDevice]}
        max={20}
        min={-5}
        units={['px']}
        hasResponsive
        onChange={(val) => {
          const value = letterSpacing
          value[currentDevice] = val
          this.setState({ letterSpacing: value })
          this.updateValues({ letterSpacing: value })
        }}
        onReset={() => {
          const value = letterSpacing
          value[currentDevice] = letter_spacing_default[currentDevice]
          this.setState({ letterSpacing: value })
          this.updateValues({ letterSpacing: value })
        }}
        onChangedDevice={(currentDevice) => this.setState({ currentDevice })}
      />
    )
  }
}

TypefaceComponent.propTypes = {
  control: PropTypes.object.isRequired
}

export default TypefaceComponent
