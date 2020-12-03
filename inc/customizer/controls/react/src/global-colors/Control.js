import GlobalColors from './GlobalColors';
import ControlWithLink from '../common/ControlWithLink';
import { render } from '@wordpress/element';

export const GlobalColorsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render(
			<ControlWithLink control={ this }>
				<GlobalColors control={ this } />
			</ControlWithLink>,
			this.container[ 0 ]
		);
	},
} );
