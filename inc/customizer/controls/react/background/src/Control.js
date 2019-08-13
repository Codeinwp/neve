const {
	FocalPointPicker,
	FormFileUpload,
	Placeholder,
	Button
} = wp.components;

const {
	MediaUpload,
	MediaUploadCheck,
	MediaPlaceholder
} = wp.blockEditor;

const {
	Component,
	Fragment
} = wp.element;

export const Control = wp.customize.Control.extend( {

	/**
	 * Render the control into the DOM.
	 *
	 * This is called from the Control#embed() method in the parent class.
	 *
	 * @returns {void}
	 */
	renderContent: function renderContent() {
		const control = this;
		console.log( control );
		const value = control.setting.get();
		const ALLOWED_MEDIA_TYPES = ['image'];
		const form =
				<MediaPlaceholder
						onSelect = {
							( el ) => {
								setAttributes( { theImage: el.url } );
							}
						}
						allowedTypes = { ALLOWED_MEDIA_TYPES }
						multiple = { false }
						labels = { { title: 'The Image' } }
				/>;
		ReactDOM.render(
				form,
				control.container[0]
		);
	}

} );
