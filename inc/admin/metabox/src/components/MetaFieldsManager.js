/* global metaSidebar */
import { PanelBody } from "@wordpress/components";
import { RadioImage } from "./radio-button/RadioImage"
import {withDispatch, withSelect} from "@wordpress/data";
import { CheckboxControl } from '@wordpress/components';

const { __ } = wp.i18n;

let MetaFieldsManager = (props) => {
	console.log( props );
	return (
		<>
			<PanelBody
				title={__("Meta Fields Panel", "neve")}
				icon="admin-post"
				intialOpen={ true }
			>
				{
					metaSidebar.controls.map((metaControl, index) => {
						console.log( metaControl );
						if( metaControl.type === 'radio' ){
							return (
								<RadioImage key={index} id={metaControl.id} data={metaControl.settings} />
							);
						}

						// if( metaControl.type === 'checkbox' ){
						// 	return (
						// 		<CheckboxControl
						// 			key={index}
						// 			heading={metaControl.settings.label}
						// 			label={metaControl.settings.input_label}
						//
						// 			onChange={ (value) => props.setMetaValue( value, metaControl.id ) }
						// 		/>
						// 	)
						// }
					})
				}

			</PanelBody>
		</>
	)
};

// MetaFieldsManager = withSelect(
// 	(select, props) => {
// 		return {
// 			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
// 		}
// 	}
// )(MetaFieldsManager);
//
// MetaFieldsManager = withDispatch(
// 	(dispatch) => {
// 		return {
// 			setMetaValue: (value, id) => {
// 				dispatch('core/editor').editPost({meta: {[id]: value}})
// 			}
// 		}
// 	}
// )(MetaFieldsManager);


export { MetaFieldsManager }
