import {sortableContainer, sortableElement, sortableHandle} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { Component } = wp.element;
const { Button } = wp.components;
const { __ } = wp.i18n;

const DragHandle = sortableHandle( () => {
	return (
		<div className="ti-sortable-handle">
			<Button isTertiary icon="menu"/>
		</div>
	);
});

const SortableItem = sortableElement( ({value, label, isVisible, toggle}) => {
	let icon = 'hidden';
	let visibility = 'hidden';
	let message = __( `Display ${ label }`, 'neve' );
	if ( isVisible ) {
		icon = 'visibility';
		visibility = '';
		message = __( `Hide ${ label }`, 'neve' );
	}
	return (
		<div className={`ti-sortable-item-area ti-sortable-item-area-${value}`} >
		<div key={value} className={`ti-sortable-item ${visibility}`}>
			<Button
				isTertiary
				icon={ icon }
				label={ message }
				showTooltip={ true }
				className="ti-sortable-item-toggle"
				onClick={ () => {
					toggle(value);
				} }
			/>
			<div className="ti-sortable-item-label">{label}</div>
			<DragHandle />
		</div>
		</div>
	);
} );

const SortableList = sortableContainer(
	({children}) => {
		return <div className="neve-meta-control neve-meta-sortable-items">{children}</div>;
	}
);


class SortableItems extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const currentValues = JSON.parse( this.props.metaFieldValue );
		return (
			<SortableList onSortEnd={this.props.onSortEnd} useDragHandle>
			{
				Object.keys( currentValues ).map(
					(value, index) => {
						if ( 'undefined' === typeof this.props.data.elements[value] ) {
							return false;
						}
						return (
							<SortableItem key={`item-${value}`} index={index} value={value} label={this.props.data.elements[value]} isVisible={currentValues[value]} toggle={this.props.toggle}/>
						);
					}
				)
			}
			</SortableList>
		);
	}
}

export default compose([
	withDispatch(( dispatch, props, {select} ) => {
		return {
			onSortEnd: function( {oldIndex, newIndex} ) {
				const metaValue = JSON.parse( select('core/editor').getEditedPostAttribute('meta')[props.id] );
				const newElements = arrayMove(Object.keys(metaValue), oldIndex, newIndex);
				let newMetaValue = {};
				newElements.map( ( value, index ) => {
					newMetaValue[value] = metaValue[value];
				});
				props.stateUpdate( props.id, JSON.stringify( newMetaValue ) );
				dispatch('core/editor').editPost({meta: {[props.id]: JSON.stringify( newMetaValue ) }});
			},
			toggle: function ( value ) {
				let metaValue = JSON.parse( select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data.default );
				metaValue[value] = ! metaValue[value];
				props.stateUpdate( props.id, JSON.stringify( metaValue ) );
				dispatch('core/editor').editPost({meta: {[props.id]: JSON.stringify(metaValue) }});
			}
		};

	}),
	withSelect((select, props) => {
		let metaVal = select('core/editor').getEditedPostAttribute('meta')[props.id];
		if ( metaVal ) {
			let metaVal = JSON.parse( select('core/editor').getEditedPostAttribute('meta')[props.id] );
			let defaultVal = JSON.parse(props.data.default);
			if (Object.keys(metaVal).length !== Object.keys(defaultVal).length) {
				for (let key in defaultVal) {
					if ( ! metaVal.hasOwnProperty(key)) {
						metaVal[key] = defaultVal[key];
					}
				}
			}
			metaVal = JSON.stringify( metaVal );
			return { metaFieldValue: metaVal };
		}
		return { metaFieldValue: props.data.default };
	})

])( SortableItems );
