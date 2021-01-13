import GlobalColors from './GlobalColors';
import ControlWithLink from '../common/ControlWithLink';
import { render } from '@wordpress/element';

export const GlobalColorsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render(
			<ControlWithLink link={ this.params.input_attrs.link }>
				<GlobalColors control={ this } />
			</ControlWithLink>,
			this.container[ 0 ]
		);
	},
} );
