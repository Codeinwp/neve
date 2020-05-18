const { RadioControl } = wp.components;
import { withSelect, withDispatch } from "@wordpress/data";

let getOptions = function(props) {
	const {choices, icons} = props.data;
	let controlChoices = [];
	Object.keys(choices).map((choice) => {
		controlChoices.push( {label: <img src={icons[choice]}/>, value: choice} );
	});
	return controlChoices;
};

let RadioImage = ( props ) => {
	console.log( props );
	const { label } = props.data;
	let options = getOptions(props);
	return (
		<div className="meta-radio-buttons">
			{label && <p className="post-attributes-label-wrapper"><span className="post-attributes-label">{label}</span></p>}
			<RadioControl
				selected={props.metaValue}
				options={options}
				onChange={(value) => props.updateMeta(value)}
			/>
		</div>
	)
};

RadioImage = withSelect(
	(select, props) => {
		return {
			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
		}
	}
)(RadioImage);

RadioImage = withDispatch(
	(dispatch, props) => {
		const { editPost } = dispatch( 'core/editor' );

		return {
			updateMeta( newMeta ) {
				editPost( { meta: { [props.id]: newMeta } } );
			},
		};
	}
)(RadioImage);

export { RadioImage };
