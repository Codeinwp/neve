/* jshint esversion: 6 */
import InlineSelectComponent from './InlineSelectComponent';
import { ControlWithLink } from '@neve-wp/components';
import { render } from '@wordpress/element';

export const InlineSelectControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(
			<ControlWithLink link={this.params.link}>
				<InlineSelectComponent control={this} />
			</ControlWithLink>,
			this.container[0]
		);
	},
});
