/* global metaSidebar */
import { PanelBody } from "@wordpress/components";
import { RadioImage } from "./radio-button/RadioImage"

const { __ } = wp.i18n;

const MetaFieldsManager = () => {
	return (
		<>
			<PanelBody
				title={__("Meta Fields Panel", "neve")}
				icon="admin-post"
				intialOpen={ true }
			>
				{
					metaSidebar.controls.map((metaControl, index) => {
						if( metaControl.type === 'radio' ){
							return (
								<RadioImage key={index} id={metaControl.id} data={metaControl.settings} />
							);
						}
					})
				}

			</PanelBody>
		</>
	)
};

export { MetaFieldsManager }
