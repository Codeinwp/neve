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
			{
				isVisible ?
					<DragHandle /> :
					''
			}
		</div>
		</div>
	);
} );

let container;

const SortableList = sortableContainer(
	({children}) => {
		return <div className="neve-meta-control neve-meta-sortable-items" ref={el => container = el}>{children}</div>;
	}
);

class SortableItems extends Component {

	constructor(props) {
		super(props);
	}

	onSortStart() {
		container.classList.add('dragging');
	}

	render() {
		const elements = this.props.data.elements;
		const currentValues = JSON.parse( this.props.metaFieldValue );
		return (
			<SortableList
				onSortEnd={this.props.onSortEnd}
				hideSortableGhost={false}
				useDragHandle
				onSortStart={this.props.onSortStart}
			>
			{
				currentValues.map(
					(value, index) => {
						return (
							<SortableItem
								key={`item-${value}`}
								index={index}
								value={value}
								label={elements[value]}
								isVisible={true}
								toggle={this.props.toggle}
							/>
						);
					}
				)
			}
			{
				Object.keys(elements).map(
					(value, index) => {
						if ( currentValues.includes( value ) ) {
							return false;
						}
						return (
							<SortableItem
								key={`item-${value}`}
								index={index}
								value={value}
								label={elements[value]}
								isVisible={false}
								toggle={this.props.toggle}
							/>
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
			onSortStart: function( {index} ) {
				document.querySelector('.ti-sortable-item-area:nth-of-type(' + ( index + 1 ) + ')' ).style.opacity = '0';
				document.querySelector('.ti-sortable-item-area:nth-of-type(' + ( index + 1 ) + ')' ).style.visibility = 'hidden';
			},
			onSortEnd: function( {oldIndex, newIndex} ) {
				const metaValue = JSON.parse( select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data.default );
				const newElements = arrayMove(metaValue, oldIndex, newIndex);
				props.stateUpdate( props.id, JSON.stringify( newElements ) );
				dispatch('core/editor').editPost({meta: {[props.id]: JSON.stringify( newElements ) }});
				document.querySelector('.ti-sortable-item-area:nth-of-type(' + ( newIndex + 1 ) + ')' ).style.opacity = null;
				document.querySelector('.ti-sortable-item-area:nth-of-type(' + ( newIndex + 1 ) + ')' ).style.visibility = null;
			},
			toggle: function ( value ) {
				let metaValue = JSON.parse( select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data.default );
				if ( metaValue.includes( value ) ) {
					metaValue = metaValue.filter( e => e !== value );
				} else {
					metaValue.push( value );
				}
				props.stateUpdate( props.id, JSON.stringify( metaValue ) );
				dispatch('core/editor').editPost({meta: {[props.id]: JSON.stringify(metaValue) }});
			}
		};

	}),
	withSelect((select, props) => {
		let metaValue  = select('core/editor').getEditedPostAttribute('meta')[props.id];
		return { metaFieldValue: ( metaValue || props.data.default ) };
	})

])( SortableItems );
