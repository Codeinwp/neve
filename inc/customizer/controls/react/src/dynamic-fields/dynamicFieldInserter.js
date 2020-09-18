/* jshint esversion: 6 */
/* global NeveReactCustomize */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';

import PropTypes from 'prop-types';

class DynamicFieldInserter extends Component {
	constructor( props ) {
		super( props );
		this.getOptions = this.getOptions.bind( this );
	}

	getOptions() {
		const { onSelect, allowedOptionsTypes } = this.props;
		const allOptions = NeveReactCustomize.dynamicTags.options;

		const options = [];
		allOptions.forEach( ( optionGroup, index ) => {
			const children = [];
			Object.keys( optionGroup.controls ).forEach( ( slug, index ) => {
				if (
					! allowedOptionsTypes.includes(
						optionGroup.controls[ slug ].type
					)
				) {
					return false;
				}
				children.push(
					<MenuItem
						key={ index }
						onClick={ () => {
							onSelect( slug, optionGroup.controls[ slug ].type );
						} }
					>
						{ optionGroup.controls[ slug ].label }
					</MenuItem>
				);
			} );

			options.push(
				<MenuGroup key={ index } label={ optionGroup.label }>
					{ children }
				</MenuGroup>
			);
		} );
		return options;
	}

	render() {
		return (
			<DropdownMenu
				icon="image-filter"
				label={ __( 'Insert Dynamic Tag', 'neve' ) }
			>
				{ () => <Fragment>{ this.getOptions() }</Fragment> }
			</DropdownMenu>
		);
	}
}

DynamicFieldInserter.propTypes = {
	allowedOptionsTypes: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default DynamicFieldInserter;
