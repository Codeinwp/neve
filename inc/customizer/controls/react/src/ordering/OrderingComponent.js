/* jshint esversion: 6 */

import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from 'react-sortable-hoc';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import { maybeParseJson } from '../common/common';

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Tooltip, Icon } from '@wordpress/components';

const List = SortableContainer( ( { children } ) => (
	<div className="items-list">{ children }</div>
) );
const Handle = SortableHandle( () => (
	<Tooltip text={ __( 'Drag to Reorder', 'neve' ) }>
		<button
			className="handle"
			onClick={ ( e ) => {
				e.preventDefault();
			} }
		>
			<Icon icon="menu" />
		</button>
	</Tooltip>
) );
const Item = ( { label, slug, onToggle, className, disabled = false } ) => {
	return (
		<div className={ classnames( [ 'neve-sortable-item', className ] ) }>
			<Tooltip text={ __( 'Toggle Visibility', 'neve' ) }>
				<button
					className="toggle"
					onClick={ ( e ) => {
						e.preventDefault();
						e.stopPropagation();
						onToggle( slug );
					} }
				>
					<Icon icon="visibility" />
				</button>
			</Tooltip>
			<span className="label">{ label }</span>
			{ ! disabled && <Handle /> }
		</div>
	);
};

const SortableItem = SortableElement( Item );

const OrderingComponent = ( { control } ) => {
	const [ value, setValue ] = useState(
		maybeParseJson( control.setting.get() )
	);
	const { components, label } = control.params;
	const disabled = Object.keys( components ).filter(
		( item ) => ! value.includes( item )
	);

	const updateValue = ( newVal ) => {
		setValue( newVal );
		control.setting.set( JSON.stringify( newVal ) );
	};
	const handleSortEnd = ( { newIndex, oldIndex } ) => {
		const newOrder = arrayMove( value, oldIndex, newIndex );
		updateValue( newOrder );
	};
	const handleToggle = ( slug ) => {
		let newValue = [ ...value ];
		if ( newValue.includes( slug ) ) {
			newValue = newValue.filter( ( item ) => item !== slug );
		} else {
			newValue.push( slug );
		}

		updateValue( newValue );
	};

	return (
		<>
			{ label && (
				<label className="customize-control-title">{ label }</label>
			) }
			<List
				items={ value }
				lockAxis="y"
				useDragHandle
				onSortEnd={ handleSortEnd }
			>
				{ value.map(
					( slug, index ) =>
						Object.keys( components ).includes( slug ) && (
							<SortableItem
								key={ index }
								label={ components[ slug ] }
								index={ index }
								slug={ slug }
								onToggle={ handleToggle }
							/>
						)
				) }

				{ disabled.map( ( slug, index ) => (
					<Item
						className="disabled"
						key={ index }
						slug={ slug }
						label={ components[ slug ] }
						index={ index }
						onToggle={ handleToggle }
						disabled
					/>
				) ) }
			</List>
		</>
	);
};

OrderingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};
Item.propTypes = {
	label: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	onToggle: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

export default OrderingComponent;
