/* jshint esversion: 6 */
import TypefaceComponent from './TypefaceComponent.js';

export const TypefaceControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		let control = this;
		ReactDOM.render(
			<TypefaceComponent control={control} />,
			control.container[0]
		);
	}
});

