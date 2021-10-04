import RichTextComponent from './RichTextComponent';
import { render } from '@wordpress/element';

export const RichTextControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<RichTextComponent control={this} />, this.container[0]);
	},
});
