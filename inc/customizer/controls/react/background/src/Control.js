const {
	// FocalPointPicker,
	// FormFileUpload,
	// Placeholder,
	Button

} = wp.components;

// const {
// 	MediaUpload,
// 	MediaUploadCheck,
// 	MediaPlaceholder
// } = wp.blockEditor;

// const {
// 	Component,
// 	Fragment
// } = wp.element;
//
// const {
// 	withState
// } = wp.compose;

export const Control = wp.customize.Control.extend( {

	renderContent: function renderContent() {
		const control = this;
		console.log( control );
		const value = control.setting.get();
		console.log( value );

		const markup =
				<Button
						isLarge
						isPrimary
						onClick={() => {
							console.log( 'clicked' );
						}}
				>React Mounted</Button>;

		ReactDOM.render(
				markup,
				control.container[0]
		);
	}
} );
