import { withDispatch, withSelect } from '@wordpress/data';
import { Button } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import arrayMove from 'array-move';
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from 'react-sortable-hoc';

const DragHandle = SortableHandle( () => {
	return (
		<div className="ti-sortable-handle">
			<Button isTertiary icon="menu" />
		</div>
	);
} );

const SortableList = SortableContainer( ( { children } ) => {
	return (
		<div className="neve-meta-control neve-meta-sortable-items">
			{ children }
		</div>
	);
} );

const Item = ( { value, label, toggle, disabled = false } ) => {
	const itemClass = classnames( [
		`ti-sortable-item-area`,
		`ti-sortable-item-area-${ value }`,
	] );
	const innerClass = classnames( [
		'ti-sortable-item',
		{ hidden: disabled },
	] );
	return (
		<div className={ itemClass }>
			<div key={ value } className={ innerClass }>
				<Button
					icon={ disabled ? 'hidden' : 'visibility' }
					showTooltip={ true }
					onClick={ toggle }
					className="ti-sortable-item-toggle"
					isTertiary
					label={
						disabled ? __( 'Show', 'neve' ) : __( 'Hide', 'neve' )
					}
				/>
				<div className="ti-sortable-item-label">{ label }</div>
				{ ! disabled && <DragHandle /> }
			</div>
		</div>
	);
};

const SortableItem = SortableElement( Item );

const SortableItems = ( {
	data,
	metaFieldValue,
	addItem,
	removeItem,
	onSortEnd,
} ) => {
	const { elements, defaults } = data;
	const currentValues = JSON.parse( metaFieldValue || defaults );
	return (
		<div>
			<SortableList onSortEnd={ onSortEnd } lockAxis="y" useDragHandle>
				{ currentValues.map( ( value, index ) => {
					return (
						<SortableItem
							key={ `item-${ value }` }
							index={ index }
							value={ value }
							label={ elements[ value ] }
							toggle={ () => removeItem( value ) }
						/>
					);
				} ) }
			</SortableList>
			<div className="disabled-items neve-meta-control">
				{ Object.keys( elements ).map( ( value, index ) => {
					if ( currentValues.includes( value ) ) {
						return false;
					}
					return (
						<div key={ index } className="ti-sortable-item-area">
							<Item
								disabled={ true }
								label={ elements[ value ] }
								value={ value }
								toggle={ () => addItem( value ) }
							/>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default compose( [
	withDispatch( ( dispatch, props, { select } ) => {
		const { getEditedPostAttribute } = select( 'core/editor' );
		const { editPost } = dispatch( 'core/editor' );
		const { defaults } = props.data;
		const { id, updateValue } = props;
		return {
			onSortEnd: ( { oldIndex, newIndex } ) => {
				const metaValue = JSON.parse(
					getEditedPostAttribute( 'meta' )[ id ] || defaults
				);
				const newElements = arrayMove( metaValue, oldIndex, newIndex );

				updateValue( id, JSON.stringify( newElements ) );
				editPost( {
					meta: { [ id ]: JSON.stringify( newElements ) },
				} );
			},
			removeItem: ( value ) => {
				let metaValue = JSON.parse(
					getEditedPostAttribute( 'meta' )[ id ] || defaults
				);
				metaValue = metaValue.filter( ( e ) => e !== value );
				editPost( {
					meta: { [ id ]: JSON.stringify( metaValue ) },
				} );
			},
			addItem: ( value ) => {
				const metaValue = JSON.parse(
					getEditedPostAttribute( 'meta' )[ id ] || defaults
				);
				metaValue.push( value );
				editPost( {
					meta: { [ id ]: JSON.stringify( metaValue ) },
				} );
			},
		};
	} ),
	withSelect( ( select, props ) => {
		const { getEditedPostAttribute } = select( 'core/editor' );
		const { id } = props;
		return {
			metaFieldValue: getEditedPostAttribute( 'meta' )[ id ],
		};
	} ),
] )( SortableItems );
