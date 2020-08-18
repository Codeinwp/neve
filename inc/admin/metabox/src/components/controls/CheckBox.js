const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { ToggleControl } = wp.components;

const CheckBox = compose(
	withDispatch((dispatch) => {
		return {
			setMetaFieldValue: (id, value) => {
				dispatch('core/editor').editPost( { meta: { [id]: value } } );
			}
		};
	}),
	withSelect((select, {id}) => {
		return {
			metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[id]
		};
	})
)(({id, data, metaFieldValue, setMetaFieldValue, stateUpdate}) => {
	const {input_label} = data;

	return (
		<div className="neve-meta-control neve-meta-checkbox">
			<ToggleControl
				label={input_label}
				checked={ ( 'on' === metaFieldValue ) }
				onChange={ (value) => {
					stateUpdate( id, ( value ? 'on' : 'off' ) );
					setMetaFieldValue( id, ( value ? 'on' : 'off' ) );
				} }
			/>
		</div>

	);
});

export {CheckBox};
