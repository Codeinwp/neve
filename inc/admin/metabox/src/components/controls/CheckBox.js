import {compose} from "@wordpress/compose";
import {withDispatch, withSelect} from "@wordpress/data";
import {CheckboxControl} from "@wordpress/components";

export let CheckBox = compose(
	withDispatch((dispatch, props) => {
		return {
			setMetaFieldValue: (value, dependent) => {

				if ( dependent ){
					let control = document.getElementById(dependent);
					if( value === true ){
						control.style.display = "block";
					} else {
						control.style.display = "none";
					}
				}
				dispatch('core/editor').editPost( { meta: { [props.id]: ( value ? 'on' : 'off' ) } } );
			}
		};
	}),
	withSelect((select, props) => {
		return {
			metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
		};
	})
)((props) => {
	const {input_label, dependent} = props.data;
	return (
		<div className="neve-meta-control neve-meta-checkbox">
			<CheckboxControl
				label={input_label}
				checked={ (props.metaFieldValue === 'on') }
				onChange={ (content) => props.setMetaFieldValue(content, dependent) }
			/>
		</div>

	);
});
