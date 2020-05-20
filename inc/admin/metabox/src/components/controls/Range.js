/* global metaSidebar */
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;
const {RangeControl} = wp.components;

export let Range = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaFieldValue: (value) => {

				let {id} = props;
				if ( id === 'neve_meta_content_width' ) {
					let {container} = props.data;

					let metaValue = value;
					let containerMetaValue = wp.data.select('core/editor').getEditedPostAttribute('meta')[container];
					let containerValue = containerMetaValue || containerMetaValue === 'default' ?  containerMetaValue : metaSidebar.actions[id]['container'];

					let blocKWidth;
					if( containerValue === 'contained' ){
						blocKWidth = Math.round( ( metaValue / 100 ) * metaSidebar.actions[id]['editor'] ) + 'px';
					} else {
						blocKWidth = metaValue + '%';
					}

					let controllingClass = props.data['it_controls'];
					if( controllingClass ){
						let elements = document.querySelectorAll(controllingClass);
						elements.forEach(function( element ) {
							element.style.maxWidth = blocKWidth;
						});
					}
				}
				dispatch('core/editor').editPost({meta: {[props.id]: value}});
			}
		};
	}),
	withSelect((select, props) => {
		return {
			metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data['default']
		};
	})
)((props) => {
	const {min,max,depends_on} = props.data;
	let style = {};
	if ( depends_on ){
		style = wp.data.select('core/editor').getEditedPostAttribute('meta')[depends_on] ? {display:"block"} : {display:"none"};
	}
	return (
		<div style={style} id={props.id} className="neve-meta-control neve-meta-range">
			<RangeControl
				value={ props.metaFieldValue }
				onChange={ (content) => props.setMetaFieldValue(content) }
				min={min}
				max={max}
				step="1"
			/>
		</div>
	);
});
