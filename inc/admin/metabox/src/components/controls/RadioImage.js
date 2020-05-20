const { RadioControl } = wp.components;
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;

let getOptions = function(props) {
	const {choices, icons} = props.data;
	let controlChoices = [];
	Object.keys(choices).map((choice) => {
		controlChoices.push( {label: <img src={icons[choice]}/>, value: choice} );
	});
	return controlChoices;
};

export const RadioImage = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaValue: (value) => {
				dispatch('core/editor').editPost({meta: {[props.id]: value}})
			}
		}
	} ),
	withSelect((select, props) => {
		return {
			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data['default']
		}
	} ) )( function( props ) {

		const { label } = props.data;
		// const initial = props.data['default'];
		let options = getOptions(props);
		return (
			<div className="neve-meta-control neve-meta-radio-image">
				{label && <p className="post-attributes-label-wrapper"><span className="post-attributes-label">{label}</span></p>}
				<RadioControl
					selected={props.metaValue}
					options={options}
					onChange={(value) => props.setMetaValue(value)}
				/>
			</div>
		)
	}
);
