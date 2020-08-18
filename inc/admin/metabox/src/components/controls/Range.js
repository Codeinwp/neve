/* global metaSidebar */
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;
const {RangeControl} = wp.components;

const Range = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaFieldValue: (value) => {
				if ( ! value ) {
					value = props.data.default;
				}
				props.stateUpdate(props.id, value);
				dispatch('core/editor').editPost({meta: {[props.id]: value}});
			}
		};
	}),
	withSelect((select, props) => {
		return {
			metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data.default
		};
	})
)((props) => {
	const {min, max} = props.data;
	return (
		<div id={props.id} className="neve-meta-control neve-meta-range">
			<RangeControl
				value={ props.metaFieldValue }
				onChange={ (content) => props.setMetaFieldValue(content) }
				allowReset={true}
				min={min}
				max={max}
				step="1"
			/>
		</div>
	);
});

export {Range};
