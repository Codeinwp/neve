/* jshint esversion: 6 */
/* global NeveReactCustomize */
import PropTypes from 'prop-types'

const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { DropdownMenu, MenuGroup, MenuItem } = wp.components

class DynamicFieldInserter extends Component {
  constructor(props) {
    super( props )
    this.getOptions = this.getOptions.bind( this )
  }

  getOptions() {
    const { onSelect, allowedOptionsTypes } = this.props
    const allOptions = NeveReactCustomize.dynamicTags.options

    const options = []
    allOptions.forEach( (optionGroup, index) => {
      const children = []
      Object.keys( optionGroup.controls )
        .forEach( (slug, index) => {
          if ( !allowedOptionsTypes.includes(
            optionGroup.controls[slug].type ) ) {
            return false
          }
          children.push( <MenuItem
            onClick={() => {
              onSelect( slug, optionGroup.controls[slug].type )
            }}
                         >
            {optionGroup.controls[slug].label}
                         </MenuItem> )
        }
        )

      options.push(
        <MenuGroup label={optionGroup.label}>
          {children}
        </MenuGroup>
      )
    } )
    return options
  }

  render() {
    return (
      <DropdownMenu
        icon='image-filter'
        label={__( 'Insert Dynamic Tag', 'neve' )}
      >
        {() => (
          <Fragment>
            {this.getOptions()}
          </Fragment>
        )}
      </DropdownMenu>
    )
  }
}

DynamicFieldInserter.propTypes = {
  allowedOptionsTypes: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default DynamicFieldInserter
