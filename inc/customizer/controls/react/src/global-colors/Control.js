import GlobalColorsComponent from './GlobalColorsComponent';
import ControlWithLink from '../common/ControlWithLink';
import { render } from '@wordpress/element';

export const GlobalColorsControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(
			<ControlWithLink link={this.params.input_attrs.link}>
				<GlobalColorsComponent control={this} />
			</ControlWithLink>,
			this.container[0]
		);
	},
});
