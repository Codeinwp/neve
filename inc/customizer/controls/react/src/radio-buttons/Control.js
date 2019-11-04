/* jshint esversion: 6 */
import RadioButtonsComponent from './RadioButtonsComponent.js';

export const RadioButtonsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		let control = this;
		ReactDOM.render(
				<RadioButtonsComponent control={control}/>,
				control.container[0]
		);
	}
} );
