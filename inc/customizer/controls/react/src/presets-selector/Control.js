/* jshint esversion: 6 */

import PresetsSelector from './PresetsSelector';
import { render } from '@wordpress/element';
export const PresetsSelectorControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render( <PresetsSelector control={ this } />, this.container[ 0 ] );
	},
} );
