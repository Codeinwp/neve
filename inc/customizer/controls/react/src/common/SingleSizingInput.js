import PropTypes from 'prop-types'

const { __ } = wp.i18n
const {
  Popover,
  RangeControl
} = wp.components
const { Component, createRef } = wp.element

class SingleSizingInput extends Component {
  constructor(props) {
    super( props )

    this.escFunction = this.escFunction.bind(this)
    this.closeIfFocusOutside = this.closeIfFocusOutside.bind( this )
    this.toggle = this.toggle.bind( this )
    this.close = this.close.bind( this )
    this.containerRef = createRef()
    this.state = {
      isOpen: false
    }
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.close()
      event.stopPropagation()
      event.preventDefault()
    }
  }

  closeIfFocusOutside() {
    if (
      !this.containerRef.current.contains( document.activeElement )
    ) {
      this.close()
    }
  }

  componentWillUnmount() {
    const { isOpen } = this.state
    const { onToggle } = this.props
    if ( isOpen && onToggle ) {
      onToggle( false )
    }
  }

  componentDidUpdate( prevProps, prevState ) {
    const { isOpen } = this.state
    const { onToggle } = this.props
    if ( prevState.isOpen !== isOpen ) {
      if (!isOpen) {
        document.removeEventListener('keydown', this.escFunction, true)
      }
      if (isOpen) {
        document.addEventListener('keydown', this.escFunction, true)
      }
      if (onToggle) {
        onToggle( false )
      }
    }
  }

  toggle() {
    this.setState( ( state ) => ( {
      isOpen: !state.isOpen
    } ) )
  }

  close() {
    this.setState( { isOpen: false } )
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className='nv-sizing-item'>
        <input
          ref={this.containerRef}
          onFocus={() => this.toggle()}
          type='number'
          className={this.props.type ? this.props.type + '-input' : ''}
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={
            e => this.props.onChange( this.props.type,
              e.target.value === '' ? 0 : e.target.value )
          }
        />
        {isOpen && <Popover
          onFocusOutside={this.closeIfFocusOutside}
                   >
          <div className='range-control'>
            <RangeControl
              value={this.props.value && this.props.value}
              initialPosition={this.props.value && this.props.value || 0}
              beforeIcon='minus'
              afterIcon='plus'
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              onChange={
                e => this.props.onChange( this.props.type,
                  e === '' ? 0 : e )
              }
            />
          </div>
                   </Popover>}
        {this.props.type && (
          <label className='label' htmlFor={this.props.type + '-input'}>
            {this.props.type}
          </label>
        )}
      </div>
    )
  }
}

SingleSizingInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
}

export default SingleSizingInput
