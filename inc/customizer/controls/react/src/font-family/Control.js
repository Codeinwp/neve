/* jshint esversion: 6 */

import FontFamilyComponent from './FontFamilyComponent';
import ControlWithLink from '../common/ControlWithLink';
import { render } from '@wordpress/element';

export const FontFamilyControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render(
			<ControlWithLink control={ this }>
				<FontFamilyComponent control={ this } />
			</ControlWithLink>,
			this.container[ 0 ]
		);
	},
} );
