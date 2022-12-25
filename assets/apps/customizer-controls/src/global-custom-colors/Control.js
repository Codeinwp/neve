import GlobalCustomColorsComponent from './GlobalCustomColorsComponent';
import { ControlWithLink } from '@neve-wp/components';
import { render } from '@wordpress/element';

export const GlobalCustomColorsControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(
			<ControlWithLink link={this.params.input_attrs.link}>
				<GlobalCustomColorsComponent control={this} />
			</ControlWithLink>,
			this.container[0]
		);
	},
});
