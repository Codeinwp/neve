const { RadioControl } = wp.components;
import { withSelect, withDispatch } from "@wordpress/data";

let getOptions = function(props) {
	const {choices, icons} = props.data;
	console.log(choices);
	let controlChoices = [];
	Object.keys(choices).map((choice) => {
		controlChoices.push( {label: <img src={icons[choice]}/>, value: choice} );
	});
	return controlChoices;
};

let RadioImage = ( props ) => {
	const { label } = props.data;
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
		return {
			setMetaValue: (value) => {
				dispatch('core/editor').editPost({meta: {[props.id]: value}})
			}
		}
	}
)(RadioImage);

export { RadioImage };
