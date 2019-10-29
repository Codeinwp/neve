/* jshint esversion: 6 */
import StylePresetsComponent from './StylePresetsComponent.js';

export const StylePresetsControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		let control = this;
		control.focus();
		ReactDOM.render(
			<StylePresetsComponent control={control} />,
			control.container[0]
		);
	}
});

