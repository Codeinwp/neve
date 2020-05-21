/* global metaSidebar */
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;
const {RangeControl} = wp.components;

const Range = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaFieldValue: (value) => {

				const {id} = props;
				if ( id === 'neve_meta_content_width' ) {
					const {container} = props.data;

					const metaValue = value;
					const containerMetaValue = wp.data.select('core/editor').getEditedPostAttribute('meta')[container];
					const containerValue = containerMetaValue || containerMetaValue === 'default' ?  containerMetaValue : metaSidebar.actions[id]['container'];

					let blocKWidth;
					if( containerValue === 'contained' ){
						blocKWidth = Math.round( ( metaValue / 100 ) * metaSidebar.actions[id]['editor'] ) + 'px';
					} else {
						blocKWidth = metaValue + '%';
					}

					const controllingClass = props.data['it_controls'];
					if( controllingClass ){
						const elements = document.querySelectorAll(controllingClass);
						elements.forEach(function( element ) {
							element.style.maxWidth = blocKWidth;
						});
					}
				}
				props.stateUpdate(props.id, value);
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
	const {min,max} = props.data;
	return (
		<div id={props.id} className="neve-meta-control neve-meta-range">
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

export {Range}
