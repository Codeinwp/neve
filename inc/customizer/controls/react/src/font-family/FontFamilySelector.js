/**
 * WordPress dependencies
 */
/* global NeveReactCustomize */
import FontPreviewLink from './FontPreviewLink.js'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'

const { __ } = wp.i18n

const {
  Popover,
  Button,
  TextControl,
  Dashicon
} = wp.components

const {
  Component,
  Fragment
} = wp.element

class FontFamilySelector extends Component {
  constructor(props) {
    super( props )
    this.state = {
      fonts: NeveReactCustomize.fonts,
      isVisible: false,
      search: '',
      loadUntil: 20,
      delayFontInclusion: true
    }
  }

  getFonts() {
    const fontGroups = this.state.fonts
    const self = this
    const result = {}

    Object.keys( fontGroups ).map( (key) => {
      result[key] = fontGroups[key].filter( value => value.toLowerCase()
        .includes( self.state.search.toLowerCase() ) )
    } )
    return result
  }

  getFontList() {
    const fontGroups = this.getFonts()
    const options = []
    const self = this

    options.push(
      <li className={'default-value ' + !this.props.selected
        ? 'selected'
        : ''}
      >
        <FontPreviewLink
          fontFace='default'
          delayLoad={false}
          label={this.props.inheritDefault
            ? __( 'Inherit', 'neve' )
            : __( 'Default', 'neve' )}
          onClick={() => {
            this.setState( { isVisible: false } )
            this.props.onFontChoice( 'system', false )
          }}
        />
      </li>
    )

    Object.keys( fontGroups ).map( (key) => {
      fontGroups[key].length > 0 && options.push(
        <li className='font-group-header'>
          {key}
        </li>
      )
      fontGroups[key].map( (font, index) => {
        if ( index < self.state.loadUntil ) {
          options.push(
            <li className={
              (
                font === this.props.selected
              ) ? 'selected' : ''
            }
            >
              <FontPreviewLink
                delayLoad={this.state.delayFontInclusion}
                fontFace={font} onClick={() => {
                  this.setState( { isVisible: false } )
                  this.props.onFontChoice( key, font )
                }}
              />
            </li>
          )
        }
      } )
    } )
    if ( this.state.loadUntil < options.length && this.state.search === '' ) {
      options.push(
        <li className='load-more'>
          <VisibilitySensor
            onChange={(isVisible) => {
              if ( isVisible ) {
                this.setState( {
                  loadUntil: ( self.state.loadUntil + 5 ),
                  delayFontInclusion: false
                } )
              }
            }}
          >
            <Dashicon icon='image-filter' />
          </VisibilitySensor>
        </li>
      )
    }

    return (
      <Fragment>
        <div className='popover-content'>
          <div className='popover-header'>
            <div className='search'>
              <TextControl
                placeholder={__( 'Search', 'neve' ) + '...'}
                value={this.state.search}
                onChange={e => {
                  this.setState( {
                    search: e,
                    loadUntil: 20
                  } )
                }}
              />
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  this.setState( { isVisible: false } )
                }}
                isLink
                isDestructive
              ><Dashicon icon='no' />
              </Button>
            </div>
          </div>
          <ul className='neve-fonts-list'>
            {options.length && options ||
              <li className='no-result'>{__( 'No results.', 'neve' )}</li>}
          </ul>
        </div>
      </Fragment>
    )
  }

  render() {
    const defaultFontface = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    return (
      <div className='neve-font-family-control'>
        <span className='customize-control-title'>
          {__( 'Font Family', 'neve' )}
        </span>
        <Button
          className='font-family-selector-toggle'
          isDefault
          onClick={() => {
            this.setState( { isVisible: true } )
          }}
        >
          <span className='ff-name'>{
            this.props.selected ||
							( this.props.inheritDefault
							  ? __( 'Inherit', 'neve' )
							  : __( 'Default', 'neve' ) )
          }
          </span>
          <span
            className='ff-preview'
            style={{
              fontFamily: this.props.selected || defaultFontface
            }}
          >Abc
          </span>
          {this.state.isVisible && (
            <Popover
              position='bottom left'
              onClickOutside={() => this.setState( { isVisible: false } )}
            >
              {this.state.fonts && this.getFontList() ||
									__( 'Loading...', 'neve' )}
            </Popover>
          )}
        </Button>
      </div>
    )
  }
}

FontFamilySelector.propTypes = {
  onFontChoice: PropTypes.func.isRequired,
  inheritDefault: PropTypes.bool.isRequired,
  selected: PropTypes.string,
  selectedType: PropTypes.string
}

export default FontFamilySelector
