/* jshint esversion: 6 */

import FontFamilyComponent from './FontFamilyComponent';
import ControlWithLink from '../common/ControlWithLink';
import { render } from '@wordpress/element';

export const FontFamilyControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;

		render(
			<ControlWithLink control={ control }>
				<FontFamilyComponent control={ control } />
			</ControlWithLink>,
			control.container[ 0 ]
		);
	},
} );
