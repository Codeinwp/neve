/* global metaSidebar */
import { PanelBody } from "@wordpress/components";
import { RadioImage } from "./controls/RadioImage"
import { CheckBox } from "./controls/CheckBox";
import { Range } from "./controls/Range";
const { __ } = wp.i18n;

let componentsGroup = [
	{
		'title'    : __( 'Layout' ,'neve' ),
		'controls' : [ 'neve_meta_container', 'neve_meta_sidebar' ]
	},
	{
		'title'    : __( 'Components', 'neve' ),
		'controls' : [ 'neve_meta_disable_header', 'neve_meta_disable_title', 'neve_meta_disable_featured_image', 'neve_meta_disable_footer' ]
	},
	{
		'title'    : __( 'Content width', 'neve' ),
		'controls' : [ 'neve_meta_enable_content_width', 'neve_meta_content_width' ]
	}
];

let renderControl = ( data, index ) => {
	if( data.type === 'radio' ){
		return (
			<RadioImage key={index} id={data.id} data={data.settings}/>
		);
	}
	if( data.type === 'checkbox' ){
		return (
			<CheckBox key={index} id={data.id} data={data.settings}/>
		)
	}
	if( data.type === 'range' ){
		return (
			<Range key={index} id={data.id} data={data.settings}/>
		)
	}
};

let MetaFieldsManager = () => {
	return (
		<>
			{
				componentsGroup.map( (group, index ) => {
					let { title, controls } = group;
					return (
						<PanelBody
							key={index}
							title={title}
							icon="admin-post"
							intialOpen={ true }
						>
							{
								controls.map( (control, index) => {
									let controlData = metaSidebar.controls.find(obj => obj.id === control);
									return(
										renderControl( controlData, index )
									)
								})
							}
						</PanelBody>
					);
				} )
			}
		</>
	)
};

export { MetaFieldsManager }
