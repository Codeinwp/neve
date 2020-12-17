/* jshint esversion: 6 */
/* global NeveReactCustomize */
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';

const DynamicFieldInserter = ( { onSelect, allowedOptionsTypes } ) => {
	const getOptions = () => {
		const options = [];
		const allOptions = NeveReactCustomize?.dynamicTags?.options || [];

		allOptions.forEach( ( optionGroup, groupIndex ) => {
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
				<MenuGroup key={ groupIndex } label={ optionGroup.label }>
					{ children }
				</MenuGroup>
			);
		} );
		return options;
	};

	return (
		<DropdownMenu
			icon="image-filter"
			label={ __( 'Insert Dynamic Tag', 'neve' ) }
		>
			{ getOptions }
		</DropdownMenu>
	);
};

DynamicFieldInserter.propTypes = {
	allowedOptionsTypes: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default DynamicFieldInserter;
