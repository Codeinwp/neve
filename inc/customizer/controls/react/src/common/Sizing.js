import PropTypes from 'prop-types'
import SingleSizingInput from '../common/SingleSizingInput.js'
import classnames from 'classnames'

const { __ } = wp.i18n
const {
  IconButton,
  Tooltip
} = wp.components
const { Component } = wp.element

class SizingControl extends Component {
  constructor(props) {
    super( props )
    this.hasSetValues = this.hasSetValues.bind( this )
  }

  render() {
    const wrapClasses = classnames( [
      'neve-responsive-sizing',
      { 'single-input': this.props.options.length === 1 }
    ] )

    const controls = []
    if ( !this.props.noLinking ) {
      controls.push(
        <Tooltip text={this.props.linked
          ? __( 'Unlink Values', 'neve' )
          : __( 'Link Values', 'neve' )}
        >
          <IconButton
            icon={this.props.linked ? 'admin-links' : 'editor-unlink'}
            onClick={() => this.props.onLinked()}
            className={classnames(
              [{ active: this.props.linked }, 'link'] )}
          />
        </Tooltip>
      )
    }
    if ( this.hasSetValues() ) {
      controls.push(
        <Tooltip text={this.props.options.length > 1
          ? __( 'Reset all Values', 'neve' )
          : __( 'Reset Value', 'neve' )}
        >
          <IconButton
            icon='image-rotate'
            className='reset'
            onClick={() => this.props.onReset()}
          />
        </Tooltip>
      )
    }

    return (
      <div className={wrapClasses}>
        {this.props.options.map( (i, n) => {
          return (
            <SingleSizingInput
              onChange={(type, value) => this.props.onChange( type,
                value )}
              value={i.value}
              className={i.type ? i.type + '-input' : ''}
              type={i.type}
              max={this.props.max}
              min={this.props.min}
              step={this.props.step}
            />
          )
        } )}
        {controls}
      </div>
    )
  }

  hasSetValues() {
    const { defaults, options } = this.props
    if ( typeof defaults !== 'object' ) {
      return parseFloat( defaults ) !==
					parseFloat( options[0].value )
    }
    return options.filter(
      option => option.value !== defaults[option.type]
    ).length > 0
  }
}

SizingControl.propTypes = {
  options: PropTypes.array.isRequired,
  defaults: PropTypes.array || PropTypes.string || PropTypes.number,
  onLinked: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  linked: PropTypes.bool.isRequired,
  onReset: PropTypes.func,
  noLinking: PropTypes.bool,
  noRange: PropTypes.bool
}

export default SizingControl
