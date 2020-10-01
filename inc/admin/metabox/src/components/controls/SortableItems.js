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

const SortableItem = sortableElement( ({value, label, toggle}) => {
	const icon = 'visibility';
	return (
		<div className={`ti-sortable-item-area ti-sortable-item-area-${value}`} >
		<div key={value} className='ti-sortable-item'>
			<Button
				isTertiary
				icon={ icon }
				label={ __( 'Toggle', 'neve' ) }
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
		const elements = this.props.data.elements;
		const currentValues = JSON.parse( this.props.metaFieldValue );
		return (
			<div>
				<SortableList
					onSortEnd={this.props.onSortEnd}
					lockAxis='y'
					useDragHandle
					hideSortableGhost={false}
					onSortStart={this.props.onSortStart}
				>
				{
					currentValues.map(
						(value, index) => {
							if ( undefined === elements[value] ) {
								return false;
							}
							return (
								<SortableItem
									key={`item-${value}`}
									index={index}
									value={value}
									label={elements[value]}
									toggle={this.props.toggle}
								/>
							);
						}
					)
				}
				</SortableList>
				<div className="disabled-items neve-meta-control">
				{
					Object.keys(elements).map(
						(value, index) => {
							if ( currentValues.includes( value ) ) {
								return false;
							}
							return (
								<div className='ti-sortable-item-area' key={index}>
								<div className='ti-sortable-item hidden'>
									<Button
										isTertiary
										icon='hidden'
										label={ __( 'Toggle', 'neve' ) }
										showTooltip={ true }
										className="ti-sortable-item-toggle"
										onClick={ () => {
											this.props.toggle(value);
										} }
									/>
									<div className="ti-sortable-item-label">{elements[value]}</div>
								</div>
								</div>
							);
						}
					)
				}
				</div>
			</div>
		);
	}
}

export default compose([
	withDispatch(( dispatch, props, {select} ) => {
		return {
			onSortStart: function( {index} ) {
				document.querySelector('.ti-sortable-item-area:nth-of-type(' + ( index + 1 ) + ')' ).style.color = '#ccc';
			},
			onSortEnd: function( {oldIndex, newIndex} ) {
				const metaValue = JSON.parse( select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data.default );
				const newElements = arrayMove(metaValue, oldIndex, newIndex);
				props.stateUpdate( props.id, JSON.stringify( newElements ) );
				dispatch('core/editor').editPost({meta: {[props.id]: JSON.stringify( newElements ) }});
				document.querySelector('.ti-sortable-item-area:nth-of-type(' + ( newIndex + 1 ) + ')' ).style.color = null;
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
