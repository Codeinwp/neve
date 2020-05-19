const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;
const {RangeControl} = wp.components;

export let Range = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaFieldValue: (value, controllingClass) => {
				if( controllingClass ){
					/* TODO: FOLLOW METABOX_SETTINGS.PHP BEHAVIOUR */
					let elements = document.querySelectorAll(controllingClass);
					elements.forEach(function( element ) {
						element.style.maxWidth = value + '%';
					});
				}
				dispatch('core/editor').editPost({meta: {[props.id]: value}});
			}
		};
	}),
	withSelect((select, props) => {
		return {
			metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
		};
	})
)((props) => {
	const {min,max,depends_on} = props.data;
	const initial = props.data['default'];
	let style = {};
	if ( depends_on ){
		style = wp.data.select('core/editor').getEditedPostAttribute('meta')[depends_on] ? {display:"block"} : {display:"none"};
	}
	let controllingClass = props.data['it_controls'];
	return (
		<div style={style} id={props.id} className="neve-meta-control neve-meta-range">
			<RangeControl
				value={ props.metaFieldValue }
				initialPosition={initial}
				onChange={ (content) => props.setMetaFieldValue(content,controllingClass) }
				min={min}
				max={max}
				step="1"
			/>
		</div>
	);
});
