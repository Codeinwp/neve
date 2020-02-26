import PropTypes from 'prop-types'
import classnames from 'classnames'

const { __ } = wp.i18n
const {
  Component,
  Fragment
} = wp.element
const {
  Button,
  Dashicon,
  Tooltip,
  ButtonGroup
} = wp.components

class ResponsiveControl extends Component {
  constructor(props) {
    super( props )
    this.state = {
      view: 'desktop'
    }
    this.linkResponsiveButtons()
  }

  render() {
    const { view } = this.state
    const deviceMap = {
      desktop: {
        tooltip: __( 'Desktop', 'neve' ),
        icon: 'desktop'
      },
      tablet: {
        tooltip: __( 'Tablet', 'neve' ),
        icon: 'tablet'
      },
      mobile: {
        tooltip: __( 'Mobile', 'neve' ),
        icon: 'smartphone'
      }
    }

    const { controlLabel, hideResponsive } = this.props
    if ( hideResponsive ) {
      return ( '' )
    }
    return (
      <Fragment>
        <div className={classnames(
          ['neve-responsive-control-bar', { 'bordered': !hideResponsive }] )}>
          {controlLabel && <span
            className='customize-control-title'
          >{controlLabel}
          </span>}
          {
            !hideResponsive &&
            <div className='floating-controls'>
              <ButtonGroup>
                {Object.keys( deviceMap ).map( (device, index) => {
                  const { tooltip, icon } = deviceMap[device]
                  return (
                    <Tooltip text={tooltip} key={index}>
                      <Button
                        isTertiary
                        className={( device === view
                          ? 'active-device '
                          : '' ) + device}
                        onClick={() => {
                          const event = new CustomEvent(
                            'neveChangedRepsonsivePreview', {
                              detail: device
                            } )
                          document.dispatchEvent( event )
                        }}
                      >
                        <Dashicon icon={icon}/>
                      </Button>
                    </Tooltip>
                  )
                } )}
              </ButtonGroup>
            </div>
          }
        </div>
        <div className='neve-responsive-controls-content'>
          {this.props.children}
        </div>
      </Fragment>
    )
  }

  changeViewType(device) {
    this.setState( { view: device } )
    wp.customize.previewedDevice( device )
    this.props.onChange( device )
  }

  linkResponsiveButtons() {
    const self = this
    document.addEventListener( 'neveChangedRepsonsivePreview', function(e) {
      self.changeViewType( e.detail )
    } )
  }
}

ResponsiveControl.propTypes = {
  onChange: PropTypes.func,
  controlLabel: PropTypes.string
}

export default ResponsiveControl
